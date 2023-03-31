<template>
    <button
        @click="handleGeoButton"
        class="geo-button"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'AddPlace',
    components: {},
    computed: {},
    methods: {
        ...mapActions(['getUserPosition']),
        handleGeoButton() {
            this.getUserPosition();
        },
    },
});
</script>

<style lang="less">
.geo-button {
    position: absolute;
    bottom: 40px;
    right: 15px;
    z-index: 1;
    background: #fff;
    height: 40px;
    width: 40px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    &:before {
        content: '';
        background: url(./../../assets/arrow-icon.svg);
        width: 24px;
        height: 20px;
        position: absolute;
        top: 11px;
        left: 7px;
    }
}
</style>
