<template>
    <main class="mx-auto max-w-[100rem] h-full">

        <Loader v-if="loading" />
        <div v-else class="flex h-full space-x-7 lg:px-6 sm:py-4 sm:px-4 relative overflow-hidden">
            <div :class="[platform.os=='ios'?'pt-20 md:pt-12':'pt-12','w-1/2 sm:w-1/3 lg:w-60 xl:w-96 h-h-full bg-zinc-800 text-white px-1 sm:px-5 sticky top-0']">
                <div class="flex flex-col h-full overflow-hidden pt-6 sm:pt-0">
                    <p class="text-3xl sm:text-4xl xl:text-6xl font-extralight tracking-wider">{{ beauty_date.time }}
                    </p>
                    <div class="mt-5 text-zinc-100">{{ beauty_date.day }}</div>
                    <div :class="[platform.os=='ios'?'pb-20 md:pb-0':'','flex-1 overflow-y-auto overflow-x-hidden']">
                        <div class="pr-5 ">
                            <div class="hover:bg-zinc-700 flex space-x-5 items-center py-1 px-1 sm:py-3 sm:px-3 mt-1 rounded-md cursor-pointer " @click="setActive(null)" >
                                <span
                                    :class="[summary.empty ? 'bg-zinc-600' : summary.occupied ? 'bg-green-50' : 'bg-yellow-50', 'p-1.5  rounded-full']">
                                    <svg v-if="summary.empty" class="h-6 w-6 sm:h-9 sm:w-9 fill-zinc-800"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <title>lighting-bolt-struck</title>
                                        <path d="M13 2L3 14H10L8 22L18 10H11L13 2Z M3 6L4.5 4.5L20.5 18.5L19 20L3 6Z" />
                                    </svg>
                                    <svg v-else
                                        :class="[summary.occupied ? 'fill-green-600' : 'fill-yellow-600', 'h-6 w-6 sm:h-9 sm:w-9 ']"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <title>lighting-bolt</title>
                                        <path
                                            d="M13 2L3 14H10L8 22L18 10H11L13 2Z" />
                                    </svg>
                                </span>
                                <div class="tracking-wide text-xs sm:text-sm"  :class="[!platform.is_touch?'hover:bg-zinc-700':'',active_label === 'null'?'bg-zinc-900':'','tracking-wide text-xs sm:text-sm']">
                                    <h3 class="font-semibold text-zinc-200 line-clamp-1">All Rooms</h3>
                                    <p class="text-zinc-400 line-clamp-1 capitalize">{{summary.status}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 pr-5">
                            <div v-for="rtype in room_labels" :key="rtype.id" @click="setActive(rtype.id)" :class="[!platform.is_touch?'hover:bg-zinc-700':'',active_label===rtype.id?'bg-zinc-900':'','flex space-x-5 items-center py-1 px-1 sm:py-3 sm:px-3 mt-1 rounded-md cursor-pointer']">
                                <span
                                    :class="[rtype.empty ? 'bg-zinc-600' : rtype.occupied ? 'bg-green-50' : ' bg-yellow-50', 'p-1.5 rounded-full ']">
                                    <svg v-if="rtype.empty" class="h-6 w-6 sm:h-9 sm:w-9  fill-zinc-800"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <title>lighting-bolt-struck</title>
                                        <path d="M13 2L3 14H10L8 22L18 10H11L13 2Z M3 6L4.5 4.5L20.5 18.5L19 20L3 6Z" />
                                    </svg>
                                    <svg v-else
                                        :class="[rtype.occupied ? 'fill-green-600' : 'fill-yellow-600', 'h-6 w-6 sm:h-9 sm:w-9']"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <title>lighting-bolt</title>
                                        <path
                                            d="M13 2L3 14H10L8 22L18 10H11L13 2Z" />
                                    </svg>
                                </span>
                                <div class="tracking-wide text-xs sm:text-sm">
                                    <h3 class="font-semibold text-zinc-200 line-clamp-1">{{ rtype.name }}</h3>
                                    <p class="text-zinc-400 line-clamp-1">{{ rtype.status }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div
                class="flex-1 pr-3 overflow-y-auto overflow-x-hidden h-full py-4 sm:py-0 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-600 pb-1">
                <div :class="[platform.os=='ios'?'pt-20 pb-20 md:pb-0 sm:pt-0':'','sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 grid grid-cols-1 gap-3']">
                    <div v-for="(room, ridx) in display_rooms" class="grid-item" :style="{ 'height': height + 'px' }"
                        :key="ridx">

                        <button
                            :class="[room.is_vacant ? ' bg-zinc-800' : 'bg-white', 'rounded-3xl h-full w-full overflow-hidden relative']">
                            <svg v-if="room.is_vacant"
                                class="absolute top-10 sm:top-5 lg:top-10 left-6 h-1/3 w-auto fill-white"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>lighting-bolt-struck</title>
                                <path
                                    d="M13 2L3 14H10L8 22L18 10H11L13 2Z M3 6L4.5 4.5L20.5 18.5L19 20L3 6Z" />
                            </svg>
                            <svg v-else class="absolute top-10 sm:top-5 lg:top-10 left-6 h-1/3 w-auto fill-red-600"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>lighting-bolt</title>
                                <path
                                    d="M13 2L3 14H10L8 22L18 10H11L13 2Z" />
                            </svg>
                            <div
                                :class="[room.is_vacant ? ' text-zinc-400 ' : 'text-zinc-600', 'absolute left-0 bottom-5 sm:bottom-4 lg:bottom-5 w-full text-sm md:text-base lg:text-xl font-semibold pl-6 sm:pl-2 lg:pl-6  tracking-wide text-left text-wrap']">
                                <span class="mr-2">{{ room.id }} </span>
                                <span v-if="room.is_vacant">Inactive</span>
                                <span v-else>Active</span>
                            </div>
                            <div v-if="room.is_vacant === 'error'" class="absolute top-0 left-0 h-full w-full bg-red-600 opacity-5"
                                ></div>  
                            <div v-if="room.is_vacant === 'error'" class="absolute top-5 right-5">
                                <div
                                    class="mx-auto flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 p-1.5">
                                    <ExclamationTriangleIcon class="h-4 w-4 text-red-600" aria-hidden="true" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import Loader from '../components/Loader.vue';

import appMixen from '../mixins/app.js'
import { format } from "date-fns";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
export default {
    name: 'home-page',
    mixins: [appMixen],
    components: {
        Loader,
        ExclamationTriangleIcon
    },
    data() {
        return {
            loading: true,
            active_label:null,
            false: false,
            next_room: null,
            date: null,
            errors: [],
            getting_labels: false,
            height: 0,
        }
    },
    methods: {
        setActive(label){
            console.error(label);
            if (this.active_label===label){
                this.active_label=null
            }else{
                this.active_label=label
            }
        },
        async changeRoomState(room, is_vacant) {
            this.wait(true)
            try {
                let resp=await this.$store.dispatch('setState',{room:room,'state':is_vacant?'off':'on'})
                if (resp){
                    // this.setroomStatus(room,is_vacant)
                }else{
                    this.errors.push(room)
                }
            } catch (error) {
                error(error)
                this.errors.push(room)
            }
            this.wait(false)
            setTimeout(() => {
                let idx = this.errors.indexOf(room)
                this.errors.splice(idx, 1)
            }, 5000);
        },
        updateGridItemSize() {
            const firstGridItem = document.querySelector('.grid-item');
            if (firstGridItem) {
                const width = firstGridItem.offsetWidth;
                this.height = width;
            }
        },
        async init() {
            // set date for app
            this.date = new Date()
            await this.$store.dispatch('entities')
            setInterval(() => {
                this.$store.dispatch('entities')
            }, 1000);
            setInterval(() => {
                this.date = new Date()
            }, 10000);
            this.loading = false
        }
    },
    computed: {
        beauty_date() {
            if (this.date == null) {
                return { time: '', day: '' }
            }
            return {
                time: format(this.date, "h:mm aa"),
                day: format(this.date, "EEEE, MMMM d")
            }
        },
        rooms() {
            let rooms = this.$store.getters['rooms']
            return rooms
        },
        display_rooms(){
            if (this.active_label===null){
                return this.rooms
            }
            return this.rooms.filter(el=>{
                return el.label==this.active_label
            })
        },
        labels() {
            return this.$store.getters['labels']
        },
        platform() {
            return this.$store.getters['platform']
        },
        room_labels() {
            let labels = []
            Object.keys(this.labels).forEach(label=>{
                let total = this.rooms.filter(element => {
                    return element.label==label
                })
                let occupied = this.rooms.filter(element => {
                    return element.label==label && !element.is_vacant
                })
                let status = 'All Inactive';
                if (occupied.length == total.length) {
                    status = 'All Active'
                } else if (occupied.length > 0) {
                    status = occupied.length + ' Occupied'
                }
                labels.push({ name: this.labels[label], id: label,empty: occupied.length === 0, total: total.length, status: status, occupied: occupied.length === total.length })
            })
            labels.sort((a, b) => b.total - a.total );
            return labels
        },
        summary() {
            let occupied = this.rooms.filter(element => {
                return !element.is_vacant
            })
            let total = this.rooms.length
            let status = 'All Inactive';
            if (occupied.length == total) {
                status = 'All Active'
            } else if (occupied.length > 0) {
                status = occupied.length + ' Active'
            }

            let types = { total: total, status: status, empty: occupied.length == 0, occupied: occupied.length == total }
            return types
        },
    },
    watch: {
        rooms:{
            handler() {
                this.updateGridItemSize()
            },
            deep:true
            // this.get_labels()
            
        },
    },
    mounted() {
        this.init()
        window.addEventListener('resize', this.updateGridItemSize);
    }
}
</script>