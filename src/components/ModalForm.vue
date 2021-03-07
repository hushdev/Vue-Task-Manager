<template>
    <form>
        <div class="container mx-auto">
            <button @click.prevent="$emit('onCloseForm')" class="close">
                X
            </button>
            <div>
                <input
                    v-model="task"
                    @keydown.enter.prevent="onAddTask"
                    @input="error = null"
                    type="text"
                    placeholder="Enter your task"
                />
                <button @click.prevent="onAddTask" class="add">
                    Add
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
    name: 'AppModalForm',
    data() {
        return {
            task: '',
            error: null
        }
    },
    methods: {
        onAddTask() {
            if (!this.task) {
                this.error = 'Task field can not be empty'
            }
            if (this.task) {
                this.$emit('onAddTask', this.task)
                this.task = ''
                this.$emit('onCloseForm')
            }
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
    z-index: 110 !important;
    box-shadow: -5px 0 6px var(--transparent-shadow);

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

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
        div {
            display: flex;
            input {
                background: var(--main-bg);
                padding: 10px 15px;
                border: 1px solid var(--cian);
                outline: 0;
                color: var(--cian);
                border-radius: 0;
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
}
</style>
