<template>
    <nav class="bottom">
        <router-link
            class="bottom-element"
            to="/">
            <img
                src="./../../assets/map-icon.svg"
                alt="" />
            Карта
        </router-link>
        <router-link
            class="bottom-element"
            to="/place-list">
            <img
                src="./../../assets/place-list-icon.svg"
                alt="" />
            Мои места
        </router-link>
        <router-link
            class="bottom-element"
            to="/search">
            <img
                src="./../../assets/search-icon.svg"
                alt="" />
            Поиск
        </router-link>
        <router-link
            class="bottom-element"
            to="/profile">
            <img
                src="./../../assets/user-icon.svg"
                alt="" />
            Профиль
        </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ is an alias to /src

export default defineComponent({
    name: 'BottomComponent',
    components: {},
});
</script>

<style lang="less">
.bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    height: 80px;
    display: flex;
    align-items: self-end;
    justify-content: center;
    padding: 5px 15px;
    font-size: 12px;
    color: #8b8b8b;
}

.bottom-element {
    width: 90px;
    display: flex;
    text-align: center;

    &.router-link-active {
        color: #3f51b5;
    }

    img {
        display: block;
        margin: 0 auto 5px;
    }
}
</style>
