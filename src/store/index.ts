import { createStore } from "vuex";
import { auth} from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { getDatabase, ref, child, get, set, remove, onValue } from "firebase/database";

export interface IPlace {
    id: number,
    title: string,
    description: string,
    coord: [latitude: number, longitude: number],
    icon: string
}

export interface IUserData {
    id: string,
    displayName: string | null,
    email: string | null
}

export interface IUser {
    loggedIn: boolean,
    data:null | IUserData
}

export interface State {
    places: IPlace[],
    count: number,
    user: IUser,
    userGeoposition: [number, number] | null
}

export default createStore<State>({
    state: {
        places: [],
        count: 0,
        user: {
            loggedIn: false,
            data: null
        },
        userGeoposition: null
    },
    getters: {
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_PLACES(state, payload:IPlace[]) {
            state.places = payload;
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_USER_GEOPOSITION(state, data) {
            state.userGeoposition = data;
        }
    },
    actions: {
        async register(context, { email, password, name }) {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user);
                if (auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                }
            } else {
                throw new Error('Unable to register user')
            }
        },

        async logIn(context, { email, password }) {
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error('login failed')
            }
        },

        async logOut(context) {
            await signOut(auth)
            context.commit('SET_USER', null)
            context.commit('SET_LOGGED_IN', false)
        },

        async fetchUser(context, user) {
            context.commit("SET_LOGGED_IN", user !== null);
            if (user) {
                context.commit("SET_USER", {
                    id: user.uid,
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                context.commit("SET_USER", null);
            }
        },

        async getUserPosition(context) {
            navigator.geolocation.watchPosition(position => {
                context.commit('SET_USER_GEOPOSITION', [position.coords.latitude, position.coords.longitude]);
            })
        },

        async getPlaces(context) {
            const db = getDatabase();
            const placesRef = ref(db, 'places/');
            onValue(placesRef, (snapshot) => {
                context.commit('SET_PLACES', snapshot.val())
            });
        },
        async addPlace(context, place:IPlace) {
            const db = getDatabase();
            set(ref(db, 'places/' + place.id), place);
        },
        async deletPlace(context, id) {
            const db = getDatabase();
            remove(ref(db, 'places/' + id));
        },
    },
    modules: {

    },
});
