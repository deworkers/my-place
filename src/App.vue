<template>
    <Header></Header>
    <div class="content">
        <router-view />
    </div>
    <Bottom></Bottom>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

import Header from '@/components/index-components/Header.vue';
import Bottom from '@/components/index-components/Bottom.vue';

import { auth } from './firebaseConfig';
import { User } from '@firebase/auth';

export default defineComponent({
    name: 'App',
    components: {
        Header,
        Bottom,
    },
    computed: {},
    methods: {
        ...mapActions(['fetchUser', 'getPlaces']),
    },
    mounted() {
        auth.onAuthStateChanged((user: User | null) => {
            this.fetchUser(user);
            this.getPlaces();
        });
    },
});
</script>

<style lang="less">
#app {
    font-family: 'Avenir Next Cyr', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.content {
    max-height: calc(100vh - 140px);
    overflow-y: auto;
}

/* Reset and base styles  */
* {
    padding: 0px;
    margin: 0px;
    border: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Links */

a,
a:link,
a:visited {
    color: inherit;
    text-decoration: none;
    display: inline-block;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
    display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-size: inherit;
    font-weight: inherit;
}

ul,
ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

img,
svg {
    max-width: 100%;
    height: auto;
}

address {
    font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
    display: none;
}

button,
input[type='submit'] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
    outline: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

legend {
    display: block;
}
</style>
