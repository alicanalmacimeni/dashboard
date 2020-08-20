<template>


    <div>
        <div class="container">


            <div class="row mb-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <navbar></navbar>
                            <chart ref="lineChartResponseChart"  ></chart>
                        </div>

                    </div>

                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <chart ref="newGuestsChart"></chart>
                        </div>

                    </div>

                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <chart ref="connectionsChart"></chart>
                        </div>

                    </div>

                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <chart ref="trafficChart"></chart>
                        </div>

                    </div>

                </div>
            </div>


            <div class="row mb-4">
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-users "></i>
                            </span>
                            <user1 :title=" 'Current Online' " :value="response.totalNewGuests "></user1>
                        </div>

                    </div>


                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-wifi "></i>
                            </span>
                            <user1 :title=" 'Max Online' " :value="0"></user1>
                        </div>

                    </div>



                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-eye "></i>
                            </span>
                            <user1 :title=" 'Unique Connections' " :value=" response.totalConnections "></user1>
                        </div>

                    </div>



                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-user "></i>
                            </span>
                            <user1 :title=" 'Impresions' " :value="response.numberOfImpressions"></user1>
                        </div>

                    </div>



                </div>
            </div>

            <div class="row mb-4">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <donut-chart ref="demographicsChart" :title="' Gender '" ></donut-chart>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <donut-chart ref="loginTypesChart" :title="' Login Types '" ></donut-chart>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <donut-chart ref="devicePlatformsChart" :title="' Device Platforms '" ></donut-chart>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <donut-chart ref="deviceVendorsChart" :title="' Device Vendor '" ></donut-chart>

                        </div>
                    </div>
                </div>






            </div>

        </div>









    </div>

</template>
<script>

    import User1 from "@/components/User1";
    import Chart from "@/components/Chart";
    import DonutChart from "@/components/DonutChart";
    import Navbar from "@/components/Navbar";


    export default {
        name: 'HelloWorld',
        components: {
            User1,
            Chart,
            DonutChart,
            Navbar


        },
        data: () => ({
            response:{
                deviceVendors:[],
                devicePlatforms:[]
            },
            loginTypes:{},
            demographics: {},
            lineChartResponse:{},
            newGuests:{},
            connections:{},
            traffic:{},

        }),
        mounted() {
            this.getResponse();
            this.getLoginTypes();
            this.getDemographics();
            this.getLineChartResponse();
            this.getNewGuests();
            this.getConnections();
            this.getTraffic()
        },
        computed: {
            maxOnline() {
                const maximum = this.response.onlineGuests

                return Math.max(...maximum);
            }
        },


        methods: {

            async getResponse() {
                const response = await window.axios.get('response.json')
                console.log(response)
                this.response = response.data

                console.log(this.$refs);
                console.log(this.response.deviceVendors);
                this.$refs.deviceVendorsChart.chartOptions.series = [{data: this.response.deviceVendors}]
                // this.$refs.deviceVendorsChartt.chartOptions.series = [{data: this.response.deviceVendors}]
                // this.$refs.deviceVendorsCharttt.chartOptions.series = [{data: this.response.deviceVendors}]
                // this.$refs.deviceVendorsChartttt.chartOptions.series = [{data: this.response.deviceVendors}]




                this.$refs.devicePlatformsChart.chartOptions.series = [{data: this.response.devicePlatforms}]
                // this.$refs.devicePlatformsChartt.chartOptions.series = [{data: this.response.devicePlatforms}]
                // this.$refs.devicePlatformsCharttt.chartOptions.series = [{data: this.response.devicePlatforms}]
                // this.$refs.devicePlatformsChartttt.chartOptions.series = [{data: this.response.devicePlatforms}]






            },

            async getLoginTypes() {
                const response = await window.axios.get('login-types.json')
                this.loginTypes = response.data.data


                this.$refs.loginTypesChart.chartOptions.series = [{data: this.loginTypes}];
                // this.$refs.loginTypesChartt.chartOptions.series = [{data: this.loginTypes}];
                // this.$refs.loginTypesCharttt.chartOptions.series = [{data: this.loginTypes}];
                // this.$refs.loginTypesChartttt.chartOptions.series = [{data: this.loginTypes}];



            },
            async getDemographics() {
                const response = await window.axios.get('demographics.json')
                this.items = response.data.data;

                let data = [];
                this.items.map(function (item) {
                    const sum = item.data.reduce((a, b) => a + b, 0);
                    const name = item.name;
                    const color = item.color;

                    data.push({'name': name, 'y': sum, 'color': color});
                })

                this.demographics = data;

                this.$refs.demographicsChart.chartOptions.series = [
                    {
                        data: this.demographics
                    }
                ];



            },

            async getLineChartResponse() {
                const response = await window.axios.get('lineChartResponse.json')
                this.lineChartResponse = response.data.data


                this.$refs.lineChartResponseChart.chartOptions.series = [{data:  Object.values(this.lineChartResponse)}];

            },
            async getNewGuests() {
                const response = await window.axios.get('new-guests.json')
                this.newGuests = response.data.data


                this.$refs.newGuestsChart.chartOptions.series = [{data:  Object.values(this.newGuests)}];

            },
            async getConnections() {
                const response = await window.axios.get('connections.json')
                this.connections = response.data.data


                this.$refs.connectionsChart.chartOptions.series = [{data:  Object.values(this.connections)}];

            },
            async getTraffic() {
                const response = await window.axios.get('traffic.json')
                this.traffic = response.data.data


                this.$refs.trafficChart.chartOptions.series = [{data:  Object.values(this.traffic)}];

            },





        },


    }
</script>
<style>
    div.container {
        margin-top: 30px;
        padding: 20px 40px;
        background-color: #ffffff;
        border: 1px solid #a7b0b1;
    }

    .card-body {
        padding: 5px;
        margin-bottom: 2px;
    }

    .card-body .icon {
        border-radius: 50%;
        float: left;
        width: 50px;
        height: 50px;
        line-height: 50px;
        background-color: #ffe6cc;
    }

    .card-body p {
        margin-bottom: 0;
        line-height: 1.2;
        text-align: right;
    }

    .icon {
        float: left;
        width: 70px;
        height: 70px;
        line-height: 50px;
        float: right;
        font-size: 1.5rem;
        padding: 3px;
    }

    .icon.avatar {
        display: flex;

        /*iconlar aşağıdan yukarıdam tam ortalandı*/
        align-items: center;

        /*iconlar sağdan soldan tam ortalandı*/
        justify-content: center;
        width: 45px;
        height: 45px;
        /*margin-right: 5px !important;*/
        margin: 10px 0px 5px 0px;

        color: #ff8566;
        font-size: 1rem;

        margin-bottom: 0px;
    }

</style>



