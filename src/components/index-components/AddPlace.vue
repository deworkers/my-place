<template>
    <div
        class="add-place"
        v-if="activePlace">
        <div class="add-place-top"></div>
        <div class="add-place-title">{{ activePlace.title }}</div>
        <div class="add-place-descr">{{ activePlace.description }}</div>
        <div class="add-place-bottom">
            <div class="add-place-bottom__left">
                <button class="add-place-route">Маршрут</button>
            </div>
            <div class="add-place-bottom__right">
                <button class="add-place-edit"></button>
                <button class="add-place-delete"></button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddPlace',
    props: ['activePlace'],
    components: {},
    computed: {},
});
</script>

<style lang="less">
.add-place {
    background: #fff;
    padding: 10px 15px 15px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: calc(100% - 30px);
    z-index: 10;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
}

.add-place-top {
    background: #d9d9d9;
    height: 5px;
    width: 125px;
    margin: 0 auto 20px;
}

.add-place-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    margin-bottom: 15px;
}

.add-place-descr {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 15px;
}

.add-place-bottom {
    display: flex;
    justify-content: space-between;
}

.add-place-bottom__left {
}

.add-place-route {
    background: #3f51b5;
    color: #fff;
    height: 40px;
    padding: 9px 15px;
    border-radius: 8px;
    font-weight: 750;
    font-size: 12px;
    display: flex;
    align-items: center;
    &:before {
        content: '';
        background: url(./../../assets/map-white-icon.svg);
        width: 18px;
        height: 17px;
        display: inline-block;
        margin-right: 8px;
    }
}

.add-place-bottom__right {
}

.add-place-edit {
    background: #3f51b5;
    color: #fff;
    height: 40px;
    width: 40px;
    padding: 9px;
    border-radius: 8px;
    font-weight: 750;
    font-size: 12px;
    margin-right: 5px;
    &:before {
        content: '';
        background: url(./../../assets/pen-icon.svg);
        width: 20px;
        height: 20px;
        display: block;
    }
}

.add-place-delete {
    background: #3f51b5;
    color: #fff;
    height: 40px;
    width: 40px;
    padding: 9px;
    border-radius: 8px;
    font-weight: 750;
    font-size: 12px;
    &:before {
        content: '';
        background: url(./../../assets/delete-icon.svg);
        width: 20px;
        height: 20px;
        display: block;
    }
}
</style>
