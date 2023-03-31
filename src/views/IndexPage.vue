<template>
    <div class="index">
        <Map></Map>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Map from '@/components/index-components/Map.vue';
// @ is an alias to /src

export default defineComponent({
    name: 'IndexPage',
    components: {
        Map,
    },
    computed: {},
    methods: {},
});
</script>

<style></style>
