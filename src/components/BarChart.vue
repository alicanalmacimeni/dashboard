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
                        type:'bar'
                    },
                    series: [],
                    legend:{
                        enabled:false
                    },


                    yAxis: {
                        title: {
                            text: null
                        },

                    },




                }
            };
        }
    };
</script>


<style scoped>

</style>