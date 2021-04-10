<template>
    <div id="china_map" style="min-width: 400px; min-height: 400px" ></div>
</template>
<script>
    import "@/js/china"
    export default {
        name: "",
        data() {
            return{}
        }
        ,created() {

        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                let echarts=require('echarts');
                let china_map=echarts.init(document.getElementById('china_map'));
                let option= {
                    title: {},
                    //滑动显示数据
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [{
                        name: '地图',
                        type: 'map',
                        map: 'china',
                        data: []
                    }]
                }
                china_map.setOption(option);
                china_map.on('click',function (params) {
                    console.log(params)
                })
            }
        }
    }
</script>

<style scoped>

</style>
