<template>
    <div class="header">
        <div class="header-left">
            <div class="header-title">Мои места</div>
        </div>
        <button
            class="header-logOut"
            @click="logOut"
            v-if="user.loggedIn">
            Выйти
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
// @ is an alias to /src

export default defineComponent({
    name: 'HeaderComponent',
    components: {},
    computed: {
        ...mapGetters(['user']),
    },
    methods: {
        ...mapActions(['logOut']),
        setLogOut() {
            this.logOut();
            this.$router.push('/');
        },
    },
});
</script>

<style lang="less">
.header {
    background: #3f51b5;
    padding: 0 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
}

.header-title {
    font-size: 18px;
}

.header-logOut {
    text-decoration: underline;
    font-size: 14px;
}
</style>
