export default {
    credits: {
        enabled: false
    },

    colors: [

        '#cfb0cf',
        '#b3e6ff',
        '#ffcce6',
        '#ffe0b3',
        '#ff66a3',
        '#99ffdd',
        '#e6e6ff',
        '#b3cce6',
        '#ffcc99',
        '#ffff99',

    ],
    chart: {
        backgroundColor: null,
        style: {
            colors: '#777',
        },

    },

    legend: {
        itemStyle: {
            color: '#2a2727',
        },


    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            innerSize: '50%',
        }
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: '{point.y} (<b>{point.percentage:.1f}%</b>)'
    },
    marker: {
        //noktaları kaldırdık
        enabled: false,
        //görünmez noktalrın rengi
        fillColor: '#FFFFFF',
        lineWidth: 3,
        lineColor: '#b3cccc'
    },


}
