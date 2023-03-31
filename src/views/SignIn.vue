<template>
    <div class="container pt-3 pb-3">
        <form @submit.prevent="setLogin">
            <h1 class="h1 mb-3">Авторизация</h1>
            <div class="mb-3 text-start">
                <label
                    for="email"
                    class="form-label"
                    >Email</label
                >
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com" />
            </div>
            <div class="mb-3 text-start">
                <label
                    for="password"
                    class="form-label"
                    >Ваш пароль</label
                >
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password" />
            </div>
            {{ errorMessage }}
            <div>
                <button
                    type="submit"
                    class="btn btn-primary me-2">
                    Авторизоваться
                </button>
                <router-link to="/register">Регистрация</router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'SignIn',
    components: {},
    data() {
        return {
            email: '',
            password: '',
            errorMessage: null as null | string,
        };
    },
    methods: {
        ...mapActions(['logIn']),
        async setLogin() {
            await this.logIn({ email: this.email, password: this.password })
                .then(() => {
                    this.errorMessage = null;
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});
</script>
