<template>
    <form>
        <div class="container mx-auto">
            <button @click.prevent="closeEditTaskForm" class="close">
                X
            </button>
            <div>
                <input
                    v-model="text"
                    @keydown.enter.prevent="editTask"
                    @input="error = null"
                    type="text"
                    placeholder="Change your task"
                />
                <button @click.prevent="editTask" class="add">
                    Edit
                </button>
            </div>
            <transition name="slide">
                <label for="task" v-if="error">{{ error }}</label>
            </transition>
        </div>
    </form>
</template>

<script>
export default {
    name: 'AppEditTaskForm',
    data() {
        return {
            text: this.taskToEdit.text,
            error: null
        }
    },
    props: {
        taskToEdit: {
            required: true,
            type: Object
        }
    },
    methods: {
        editTask() {
            if (!this.text) {
                this.error = 'Field can not be empty'
            }
            if (this.text) {
                this.$emit('onTaskEdit', {
                    text: this.text,
                    task: this.taskToEdit
                })
                this.text = ''
                this.$emit('onTaskEditFormClosed')
            }
        },
        closeEditTaskForm() {
            this.$emit('onTaskEditFormClosed')
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    position: sticky;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--main-bg);
    z-index: 110;
    box-shadow: -5px 0 6px var(--transparent-shadow);

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        position: relative;
        input {
            background: var(--main-bg);
            padding: 10px 15px;
            border: 1px solid var(--cian);
            outline: 0;
            color: var(--cian);
            border-radius: 0;
        }
        label {
            margin-top: 10px;
            color: var(--cian);
        }
        button.close {
            position: absolute;
            top: 5px;
            right: 15px;
            color: var(--cian);
            font-size: 25px;
            font-weight: 400;
            transform: scaleX(1.5);
            outline: 0;
        }
        button.add {
            color: var(--main-bg);
            font-weight: 700;
            padding: 10px 15px;
            background: var(--cian);
            border: 1px solid var(--cian);
            outline: 0;
        }
    }
}
</style>
