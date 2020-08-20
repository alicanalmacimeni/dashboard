<template>
    <div>
        <div class="chart-title" style="font-weight: bold;color: #4e555b">{{ title }}</div>

        <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
</template>

<script>

    export default {
        name: "DonutChart",
        props: {

            title:{
                type: String,
                require: true
            }

        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'pie'
                    },




                    series: [],

                }
            };
        }
    };
</script>

<style scoped>

</style>