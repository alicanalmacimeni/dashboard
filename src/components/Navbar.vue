<template>
    <div>


        <ul class="nav nav-tabs" style="margin: 14px">
               <li class="nav-item">
                   <a class="nav-link active" style="background-color:#ffffff;  " href="#" >Guests <br>
                   {{ totalGuests }}
                   </a>

               </li>

            <li class="nav-item">
                <a class="nav-link disabled " href="#"  >New Guests <br>
                {{ totalNewGuests }}
                </a>

            </li>
            <li class="nav-item" >
                <a class="nav-link disabled" href="#">Connections <br>
                    {{ totalGuestConnections }}
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Traffic <br>
                    {{ totalGuestTraffic}}

                </a>
            </li>
        </ul>




    </div>
</template>

<script>
    export default {
        name: "Navbar",

        data: () => ({
            totalGuests: 0,
            guests: {},

            totalNewGuests:0,
            newGuests: {},

            totalGuestTraffic:0,
            guestTraffic: {},

            totalGuestConnections:0,
            guestConnections: {},


        }),
        mounted() {

            this.getGuests();
            this.getNewGuests();
            this.getGuestTraffic();
            this.getGuestConnections();

        },

        methods:{



            async getNewGuests() {
                const response = await window.axios.get('new-guests.json')
                this.newGuests = response.data.data;

                this.totalNewGuests = Object.values(this.newGuests).reduce((a, b) => a + b, 0);
            },

            async getGuests() {
                const response = await window.axios.get('guests.json')
                this.guests = response.data.data;

                this.totalGuests = Object.values(this.guests).reduce((a, b) => a + b, 0);
            },

            async getGuestConnections() {
                const response = await window.axios.get('connections.json')
                this.guestConnections = response.data.data;


                this.totalGuestConnections = Object.values(this.guestConnections).reduce((a, b) => a + b, 0);
            },

            async getGuestTraffic() {
                const response = await window.axios.get('traffic.json')
                this.guestTraffic = response.data.data;

                this.totalGuestTraffic = Object.values(this.guestTraffic).reduce((a, b) => (a + b)/1000000000 , 0).toFixed(2)+"GB";
            },


        }



    }
</script>

<style scoped>

</style>