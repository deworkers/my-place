<template>
    <div class="map">
        <ActivePlace
            v-if="showPlace"
            :toggleShowPlace="toggleShowPlace"
            :activePlace="activePlace"></ActivePlace>
        <AddPlace
            v-if="addPlace"
            :toggleAddPlace="toggleAddPlace"
            :addPlaceCoord="addPlaceCoord"></AddPlace>
        <GeoButton></GeoButton>
        <YandexMap
            :coordinates="coordinates"
            :zoom="14"
            :detailed-controls="detailedControls"
            :controls="controls"
            :events="['click', 'contextmenu']"
            @click="handleOnMapClick"
            @contextmenu="handleOnContextmenu">
            <YandexMarker
                v-for="(point, index) in places"
                :coordinates="[Number(point.coord[0]), Number(point.coord[1])]"
                :key="index"
                :marker-id="point.id"
                @click="handleOnPointClick"
                :options="getOptions(point)"
                :properties="point">
            </YandexMarker>
            <YandexMarker
                v-if="userGeoposition"
                :marker-id="'you'"
                :coordinates="[
                    Number(userGeoposition[0]),
                    Number(userGeoposition[1]),
                ]"
                :options="getOptions({ icon: 'you' })">
            </YandexMarker>
        </YandexMap>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
import { mapState } from 'vuex';
import ActivePlace from './ActivePlace';
import AddPlace from './AddPlace';
import GeoButton from './GeoButton';

// @ is an alias to /src

export default defineComponent({
    name: 'MapComponent',
    components: {
        YandexMap,
        YandexMarker,
        ActivePlace,
        GeoButton,
        AddPlace,
    },
    data() {
        return {
            coordinates: [56.805227, 60.641756],
            controls: [],
            detailedControls: {
                zoomControl: { position: { right: 10, top: 10 } },
            },
            showPlace: false,
            activePlace: null,
            addPlace: false,
            addPlaceCoord: null,
        };
    },
    computed: {
        ...mapState(['userGeoposition', 'places']),
    },
    methods: {
        handleMapInit(map) {
            console.log(map);
        },
        handleOnContextmenu(event) {
            if (!this.addPlace) {
                this.toggleAddPlace();
            }
            this.addPlaceCoord = event.get('coords');
        },
        handleOnMapClick() {
            if (this.showPlace) {
                this.toggleShowPlace();
            }
            if (this.addPlace) {
                this.toggleAddPlace();
            }
        },
        handleOnPointClick(event) {
            if (!this.showPlace) {
                this.toggleShowPlace();
                this.activePlace = event.get('target').properties._data;
            }
        },
        getIcon(icon) {
            switch (true) {
            case icon == 'default':
                return '/pic/icon-inactive.png';
            case icon == 'you':
                return '/pic/icon-you.png';
            default:
                return '/pic/icon-inactive.png';
            }
        },
        getOptions(point) {
            return {
                iconLayout: 'default#imageWithContent',
                iconImageHref: this.getIcon(point.icon),
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -18],
            };
        },
        toggleShowPlace() {
            this.showPlace = !this.showPlace;
        },
        toggleAddPlace() {
            this.addPlace = !this.addPlace;
        },
    },
    watch: {
        userGeoposition(newValue, oldValue) {
            this.coordinates = newValue;
        }
    },
});
</script>

<style>
.map {
    height: calc(100vh - 140px);
    width: 100%;
    position: relative;
}

.yandex-container {
    height: 100%;
    width: 100%;
}
</style>
