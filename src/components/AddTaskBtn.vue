<template>
    <button class="btn">
        +
    </button>
</template>

<script>
export default {
    name: 'AppAddTaskBtn'
}
</script>

<style lang="scss" scoped>
button.btn {
    position: sticky;
    bottom: 20px;
    margin-top: 40px;
    left: calc(50% - (40px / 2));
    padding-bottom: 5px;
    z-index: 100;

    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    background: var(--main-bg) !important;
    box-shadow: 0 5px 10px var(--dark-shadow);
    color: var(--cian);
    border-radius: 50%;

    font-size: 35px;
    font-weight: 600;

    transition: 0.3s;
    outline: 0;

    &:focus {
        transform: translateY(5px);
        box-shadow: 0 0 5px var(--dark-shadow) !important;
    }

    &:hover {
        color: #ffffff;
    }
}
</style>
