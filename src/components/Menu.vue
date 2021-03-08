<template>
    <div class="menu">
        <div class="container">
            <button @click.prevent="$emit('onCloseMenu')" class="close">
                X
            </button>

            <h2>Developed by Ildar Anikin</h2>
            <span>Links</span>
            <ul>
                <li>
                    <a href="https://github.com/hushdev" target="_blank">
                        <img src="@/assets/github.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UCNgK_fITER_vZVsBDzoJZcw"
                        target="_blank"
                    >
                        <img src="@/assets/youtube.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/hush_dev" target="_blank">
                        <img src="@/assets/telegram.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/an.ildar/"
                        target="_blank"
                    >
                        <img src="@/assets/instagram.svg" alt="" />
                    </a>
                </li>
            </ul>
            <p class="date">{{ date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppMenu',
    data() {
        return {
            date: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--main-bg);
    z-index: 200;
    overflow-y: hidden;
    box-shadow: -5px 0 6px var(--transparent-shadow);

    .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        
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

        h2 {
            color: #fff;
            font-size: 20px;
            font-weight: 100;
        }
        span {
            color: rgb(184, 184, 184);
            font-weight: 100;
            margin: 5px 0;
        }
        ul {
            display: flex;
            flex-direction: row;
            li {
                margin: 0 5px;
                transition: 0.3s;
                &:hover {
                    filter: brightness(50%);
                }
                a {
                    img {
                        width: 23px;
                        height: 23px;
                    }
                }
            }
        }
        .date {
            position: absolute;
            bottom: 15px;
            color: rgb(184, 184, 184);
        }
    }
}
</style>
