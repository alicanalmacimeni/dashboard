<template>
    <div>
        <div class="chart-title" style="font-weight: bold;color: #666165">{{ title }}</div>
        <br>

        <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
</template>
<script>

    export default {
        name: "Chart",
        props: {

            title:{
                type: String,
                require: true
            }

        },
        data() {
            return {
                chartOptions: {
                   chart:{
                       type:'areaspline'
                   },
                    series: [],

                    xAxis: {
                        categories: [
                            '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
                            '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
                        ]
                    },
                    yAxis: {
                        title: {
                            text: null
                        },

                    },
                    legend: {
                        enabled: false,
                    },



                }
            };
        }
    };
</script>

<style scoped>

</style>