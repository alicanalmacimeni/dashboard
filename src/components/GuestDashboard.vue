<template>
    <div class="container">
        <div class="row mb-4">
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-users "></i>
                            </span>
                            <user2 :title=" 'Max. Login / Online' "  :value="newDashboard.numberOfMaxOnlineGuests"></user2>
                        </div>

                    </div>


                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-eye "></i>
                            </span>
                            <user2 :title=" 'Impressions' " :value="newDashboard.numberOfImpressions" ></user2>
                        </div>

                    </div>



                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-wifi "></i>
                            </span>
                            <user2 :title=" 'Total Logins' " :value="newDashboard.numberOfLogins" ></user2>
                        </div>

                    </div>



                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="icon avatar">
                                <i class="fas fa-users "></i>
                            </span>
                            <user2 :title=" 'Unique Logins / New Guests' " :value="newDashboard.uniqueLogins"  ></user2>
                        </div>

                    </div>



                </div>
            </div>


        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <chart ref="newDashboardChart" :title="' Online Guests '" ></chart>
                    </div>

                </div>

            </div>
        </div>

        <div class="row mb-4">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <bar-chart ref="newDemographicsChart" :title="' Demographics '" ></bar-chart>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <donut-chart ref="newNationalityChart" :title="' Nationality '"></donut-chart>

                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <bar-chart ref="countryChart" :title="' Country of Residence '"></bar-chart>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <bar-chart ref="newNationalityCountryChart" :title="' Nationality By Country Name '"></bar-chart>

                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <donut-chart ref="deviceUsageChart" :title="' Device Usage Shares '"></donut-chart>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <donut-chart ref="devicePlatformsChart" :title="' Device Platforms '"></donut-chart>

                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <donut-chart ref="deviceVendorsChart" :title="' Device Vendors'"></donut-chart>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <donut-chart ref="newLoginTypesChart" :title="' Login Types '"></donut-chart>

                    </div>
                </div>
            </div>
        </div>







    </div>
</template>

<script>
    import User2 from "@/components/User2";
    import Chart from "@/components/Chart";
    import DonutChart from "@/components/DonutChart";
    import BarChart from "@/components/BarChart";
    export default {
        name: "GuestDashboard.vue",
        components: {
            User2,
            Chart,
            DonutChart,
            BarChart


        },
        data: () => ({
            device:{
                device_usage_shares:[],
                device_platforms:[],
                device_vendors:[],
            },
            newDashboard:{

            },
            newDemographics:{},
            nationalities1:{},
            country:{},
            nationalities2:{},
            newLoginTypes:{}

        }),
        mounted() {
            this.getNewDashboard();
            this.getNewDemographics();
            this.getNationalities1();
            this.getCountry();
            this.getNationalities2();
            this.getDevice();
            this.getNewLoginTypes();

        },
        computed: {
            maxOnline() {
                const maximum = this.newDashboard.onlineGuests

                return Math.max(...maximum);
            }
        },
        methods:{
            async getNewDashboard() {
                const response = await window.axios.get('new-dashboard.json')
                console.log(response)
                this.newDashboard = response.data
                this.$refs.newDashboardChart.chartOptions.series = [{data:  Object.values(this.newDashboard.onlineGuests)}];
            },
            async getNewDemographics() {
                const response = await window.axios.get('new-demographics.json')
                this.items = response.data.data;
                let categories = response.data.categories;



                let data = [];
                this.items.map(function (item) {
                    const sum = item.data.reduce((a, b) => a + b, 0);
                    const color = item.color;

                    data.push({'name': name, 'y': sum, 'color': color,}  );
                })

                this.newDemographics = data;

                this.$refs.newDemographicsChart.chartOptions.series = [
                    {
                        data: this.newDemographics

                    }

                ];
                this.$refs.newDemographicsChart.chartOptions.xAxis = [
                    {

                        categories: categories,
                    }
                ];
            },

            async getNationalities1() {
                const response = await window.axios.get('nationalities-1.json')
                this.nationality = response.data.data


                this.$refs.newNationalityChart.chartOptions.series = [{data: this.nationality}];

            },
            async getCountry() {
                const response = await window.axios.get('country.json')
                this.country = response.data.data
                console.log(this.country)



                this.$refs.countryChart.chartOptions.series = [{data: this.country}];
                this.$refs.countryChart.chartOptions.xAxis = [{categories: this.country}];







            },
            async getNationalities2() {
                const response = await window.axios.get('nationalities-2.json')
                this.nationalityCountry = response.data.data


                this.$refs.newNationalityCountryChart.chartOptions.series = [{data: this.nationalityCountry}];
                this.$refs.newNationalityCountryChart.chartOptions.xAxis = [{categories: this.nationalityCountry}];


            },
            async getDevice() {
                const response = await window.axios.get('device.json')
                console.log(response)
                this.device = response.data.data


                this.$refs.deviceUsageChart.chartOptions.series = [{data: this.device.device_usage_shares}]
                this.$refs.devicePlatformsChart.chartOptions.series = [{data: this.device.device_platforms}]
                this.$refs.deviceVendorsChart.chartOptions.series = [{data: this.device.device_vendors}]

            },
            async getNewLoginTypes() {
                const response = await window.axios.get('new-login-types.json')
                this.newLoginTypes = response.data.data


                this.$refs.newLoginTypesChart.chartOptions.series = [{data: this.newLoginTypes}];




            },
        }
    }
</script>

<style scoped>

</style>