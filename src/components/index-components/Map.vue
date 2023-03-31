<template>
    <div class="map">
        <AddPlace 
            v-if="showPlace"
            :activePlace="activePlace"
        ></AddPlace>
        <GeoButton></GeoButton>
        <YandexMap
            :coordinates="coordinates"
            :zoom="14"
            :detailed-controls="detailedControls"
            :controls="controls"
            @click="handleOnMapClick"
        >
            <YandexMarker
                v-for="(point, index) in places"
                :coordinates="[Number(point.coord[0]), Number(point.coord[1])]"
                :key="index"
                :marker-id="point.id"
                @click="handleOnPointClick"
                :options="getOptions(point)"
                :properties="point"
            >
            </YandexMarker>
            <YandexMarker
                v-if="userGeoposition"
                :marker-id="'you'"
                :coordinates="[Number(userGeoposition[0]), Number(userGeoposition[1])]"
                :options="getOptions({icon: 'you'})"
            >
            </YandexMarker>
            
        </YandexMap>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
import { mapState } from 'vuex';
import AddPlace from './AddPlace';
import GeoButton from './GeoButton';

// @ is an alias to /src

export default defineComponent({
    name: 'MapComponent',
    components: {
        YandexMap,
        YandexMarker,
        AddPlace,
        GeoButton
    },
    data() {
        return {
            coordinates: [56.805227, 60.641756],
            controls: [],
            detailedControls: { zoomControl: { position: { right: 10, top: 10 } } },
            places: [
                {
                    id: 0,
                    title: 'Engels Coffee',
                    description: 'Антуражно, вкусно, недешево. Приятное место. Вкусный кофе (раф с малиной) и прекрасный тост на черном хлебе с каперсами — приятный перекус. Персонал вежливый. Живые растения. Минус - с парковкой в будни вечером плохо, имейте ввиду)) Но зато в самом центре!!!',
                    coord: [56.805227, 60.641756],
                    icon: 'default'
                }
            ],
            showPlace: false,
            activePlace: null
        }
    },
    computed: {
        ...mapState(['userGeoposition']),
    },
    methods: {
        handleMapInit() {
            console.log('handleMapInit');
        },
        handleOnMapClick(event) {
            console.log(event.get('coords'));
            if (this.showPlace) {
                this.toggleShowPlace();
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
                iconImageOffset: [-36, -36],
            }
        },
        toggleShowPlace() {
            this.showPlace = !this.showPlace;
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
