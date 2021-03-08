<template>
    <li class="task" :class="{ lineThrought: task.isActive == false }">
        {{ number + 1 }}. {{ task.text }}
        <span class="actions">
            <button @click="editTask">
                <img src="@/assets/pencil.svg" alt="" />
            </button>
            <button @click="markTask">
                <img src="@/assets/complete.svg" alt="" />
            </button>
            <button @click="deleteTask">
                <img src="@/assets/trash.svg" alt="" />
            </button>
        </span>
    </li>
</template>

<script>
export default {
    name: 'AppTask',
    props: {
        number: {
            required: true,
            type: Number
        },
        task: {
            required: true,
            type: Object
        }
    },
    methods: {
        deleteTask() {
            this.$emit('onTaskDeleted', this.task)
        },
        markTask() {
            if (this.task.isActive == true) {
                this.$emit('onTaskMarked', this.task)
            } else if (this.task.isActive == false) {
                this.$emit('onTaskUnMarked', this.task)
            }
        },
        editTask() {
            this.$emit('onTaskEdited', this.task)
        }
    }
}
</script>

<style lang="scss" scoped>
.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--main-bg);
    box-shadow: 0 0 10px var(--dark-shadow);
    padding: 10px 15px;
    border-radius: 7px;
    color: var(--cian);
    margin-top: 15px;
    transition: 0.2s;

    &:nth-child(1) {
        margin-top: 0;
    }
    .actions {
        display: flex;
        align-items: center;
        button {
            outline: 0;
            border: 0;
            &:nth-child(2) {
                margin: 0 5px;
            }
            img {
                width: 22px;
                height: auto;
            }
        }
    }
}
.lineThrought {
    text-decoration: line-through;
    color: #6c6c6c;
}
@media (max-width: 1160px) {
    .task {
        margin-right: 20px;
    }
}
</style>
