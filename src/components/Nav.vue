<template>
    <nav>
        <div class="container">
            <h1>Vue-todo <span>v1.0</span></h1>
            <div @click="$emit('onMenuOpen')" class="menu-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="scss" scoped>
nav {
    position: sticky;
    margin-bottom: 20px;
    top: 0;
    left: 0;
    padding: 10px 15px;
    z-index: 100;
    background: var(--main-bg);
    box-shadow: 0 3px 6px var(--transparent-shadow),
        0 3px 6px var(--transparent-shadow);
    
    div {
        display: flex;

        justify-content: space-between;

        h1 {
            font-weight: 600;
            font-size: 20px;
            color: var(--cian);
            span {
                font-size: 10px;
                color: #6c6c6c;
            }
        }
        .menu-burger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            span {
                display: block;
                height: 2px;
                width: 25px;
                border-radius: 10px;
                background: var(--cian);
                &:nth-child(2) {
                    margin: 5px 0;
                }
            }
        }
    }
}
</style>
