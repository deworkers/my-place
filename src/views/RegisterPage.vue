<template>
    <div class="container pt-3 pb-3">
        <form @submit.prevent="getRegister">
            <h1 class="h1">Регистрация</h1>
            <div class="mb-3 text-start">
                <label
                    for="name"
                    class="form-label"
                    >Ваше имя</label
                >
                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Иван Иванов" />
            </div>
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
                    Отправить
                </button>
                <router-link to="/sign-in">Авторизоваться</router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
// @ is an alias to /src

export default defineComponent({
    name: 'RegisterPage',
    components: {},
    data() {
        return {
            email: '',
            password: '',
            name: '',
            errorMessage: null as null | string,
        };
    },
    methods: {
        ...mapActions(['register']),
        async getRegister() {
            await this.register({
                email: this.email,
                password: this.password,
                name: this.name,
            })
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
