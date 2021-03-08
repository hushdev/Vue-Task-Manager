<template>
    <div class="todo-app">
        <div class="todo-wrapper">
            <transition name="slide">
                <app-modal-form
                    v-if="isFormActive"
                    @onCloseForm="closeForm"
                    @onAddTask="addTask"
                />
            </transition>
            <transition name="slide">
                <app-edit-task-form
                    v-if="isEditTaskFormActive"
                    :task-to-edit="taskToEdit"
                    @onTaskEditFormClosed="closeTaskEditForm"
                    @onTaskEdit="editTask"
                />
            </transition>
            <transition name="slide">
                <app-menu v-if="isMenuActive" @onCloseMenu="closeMenu" />
            </transition>
            <app-nav @onMenuOpen="openMenu" />
            <ul class="tasks container">
                <transition-group name="task">
                    <app-task
                        v-for="(task, idx) in tasks"
                        :key="idx"
                        :task="task"
                        :number="idx"
                        @onTaskDeleted="deleteTask"
                        @onTaskMarked="markTask"
                        @onTaskUnMarked="unMarkTask"
                        @onTaskEdited="editTaskSelected"
                    />
                </transition-group>
            </ul>
            <app-add-task-btn @click="showModal" />
        </div>
    </div>
</template>

<script>
import AppNav from '@/components/Nav'
import AppAddTaskBtn from '@/components/AddTaskBtn'
import AppTask from '@/components/Task'
import AppModalForm from '@/components/ModalForm'
import AppMenu from '@/components/Menu'
import AppEditTaskForm from '@/components/EditTaskForm'

export default {
    name: 'App',
    components: {
        AppNav,
        AppAddTaskBtn,
        AppTask,
        AppModalForm,
        AppMenu,
        AppEditTaskForm
    },
    data() {
        return {
            isFormActive: false,
            isMenuActive: false,
            isEditTaskFormActive: false,
            taskToEdit: null,
            tasks: [
                {
                    text: 'Add todos by the button below',
                    isActive: true,
                    deleted: false
                }
            ]
        }
    },
    methods: {
        showModal() {
            this.isFormActive = true
        },
        closeForm() {
            this.isFormActive = false
        },
        addTask(text) {
            const newTask = {
                text: text,
                isActive: true,
                deleted: false
            }
            this.tasks.push(newTask)
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t !== task)
        },
        markTask(task) {
            const selectedTask = this.tasks.find(t => t === task)
            selectedTask.isActive = false
        },
        unMarkTask(task) {
            const selectedTask = this.tasks.find(t => t === task)
            selectedTask.isActive = true
        },
        editTaskSelected(task) {
            this.isEditTaskFormActive = true
            this.taskToEdit = task
        },
        editTask({ text, task }) {
            const selectedTask = this.tasks.find(t => t === task)
            selectedTask.text = text
        },
        closeTaskEditForm() {
            this.isEditTaskFormActive = false
        },
        openMenu() {
            this.isMenuActive = true
        },
        closeMenu() {
            this.isMenuActive = false
        }
    }
}
</script>

<style lang="scss">
.todo-app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--main-bg);
    .todo-wrapper {
        box-shadow: 0 5px 10px var(--dark-shadow);
        max-width: 100%;
        width: 100%;
        max-height: 100vh;
        height: 100%;
        overflow: hidden;
        position: relative;

        .tasks {
            margin-top: -20px;
            padding: 10px 10px 130px 10px;
            height: 100%;
            overflow-x: auto;
        }
    }
}

@media (max-width: 1024px) {
    .todo-wrapper {
        max-width: 100% !important;
        max-height: 100% !important;
    }
}
</style>
