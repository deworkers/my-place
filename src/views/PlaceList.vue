<template>
    <div class="place-list">
        <h1>Список точек</h1>
        <div 
            :key="place.id"
            v-for="place in places">
            {{place.title}}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
export default defineComponent({
    name: 'PlaceList',
    components: {},
    computed: {
        ...mapState(['places'])
    },
});
</script>

<style></style>
