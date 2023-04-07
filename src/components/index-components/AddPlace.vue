<template>
    <div
        class="add-place"
        v-if="addPlaceCoord">
        <div class="add-place-top"></div>
        <div class="add-place-title">Добавить место</div>
        <div class="add-place-form">
            <div class="add-place-input">
                <label for="">Название</label>
                <input
                    type="text"
                    v-model="title" />
            </div>
            <div class="add-place-input">
                <label for="">Описание</label>
                <textarea
                    type="text"
                    v-model="description">
                </textarea>
            </div>
        </div>
        <div class="add-place-bottom">
            <div class="add-place-bottom__left">
                <button
                    @click="handleOnClick"
                    class="add-place-button">
                    Добавить
                </button>
            </div>
            <div class="add-place-bottom__right">
                <button
                    @click="toggleAddPlace"
                    class="add-place-delete"></button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'AddPlace',
    props: ['addPlaceCoord', 'toggleAddPlace'],
    data() {
        return {
            title: null,
            description: '',
            icon: 'default',
        };
    },
    components: {},
    computed: {},
    methods: {
        ...mapActions(['addPlace', 'getPlaces']),
        handleOnClick() {
            const newId = Math.random().toString(24).slice(2);
            this.addPlace({
                id: newId,
                coord: this.addPlaceCoord,
                title: this.title,
                description: this.description,
                icon: this.icon,
            }).then(() => {
                this.toggleAddPlace();
            });
        },
    },
});
</script>

<style lang="less">
.add-place-input {
    margin-bottom: 15px;
    width: 100%;
    text-align: left;

    input {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 35px;
        padding: 0 10px;
    }

    textarea {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 100px;
        outline: none;
        padding: 5px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }
}

.add-place-button {
    background: #3f51b5;
    color: #fff;
    height: 40px;
    padding: 9px;
    border-radius: 8px;
    font-weight: 750;
    font-size: 14px;
}
</style>
