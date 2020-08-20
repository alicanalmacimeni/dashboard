<template>
    <div class="info">
            <div style="font-size: 1.7rem; ">{{ value }}</div>
            <div style=" color: #6c757d; font-size: 15px">{{ title }}</div>
        </div>

</template>
<script>
    export default {
        name: "User1",
        props: {
            title: {
                type: String,
                require: true
            },
            value: {
                type: Number,
                require: true,
                default:0


            },
        },

    }
</script>

<style >
    .info{
        text-align: center;
    }


</style>