<template>
    <div>
        <el-button  icon="el-icon-arrow-left" @click="back()">返回上级</el-button>
        <div id="china_map" style="min-width: 400px; min-height: 400px" ></div>
    </div>


</template>
<script>
    import '@/js/china'
    export default {
        name: "",
        data() {
            return{}
        },
        mounted(){
            this.init();
        },
        methods:{
            back(){

            },
            init(){
                // axios.get('../../../../json/china.json')
                //     .then(function (res){
                //         console.log(res)
                //     }).catch(err=>{
                //     console.log(err)
                // })
                let echarts=require('echarts');
                let china_map=echarts.init(document.getElementById('china_map'));
                let option= {
                    title: {},
                    //滑动显示数据
                    tooltip: {
                        trigger: 'item'
                    },
                    geo: {
                        map: 'china', // 这边是显示地图的名字
                        emphasis:{
                            show:false, // 控制悬浮框是否显示
                            label: {
                                show:true, //显示省份标签
                                textStyle:{color:"#18191A"}
                            },
                            itemStyle: {
                                borderWidth: 0, //区域边框宽度
                                borderColor: '#009fe8', //区域边框颜色
                                areaColor: 'rgba(11,50,129,0.52)', //区域颜色
                            }
                        },
                        roam: true, // 控制地图放大缩小移动
                        selectedMode: 'single'
                    },
                    series: [{
                        name: '地图',
                        type: 'scatter',
                        coordinateSystem:'geo',
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
