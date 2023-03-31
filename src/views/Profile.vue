<template>
    <div>
        <div>
            {{ user.data.displayName }}
        </div>
        <div>
            {{ user.data.email }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'ProfilePage',
    components: {},
    computed: {
        ...mapGetters(['user']),
    },
    mounted() {
        if (!this.user.loggedIn) {
            this.$router.push('/sign-in');
        }
    },
});
</script>

<style lang="less"></style>
