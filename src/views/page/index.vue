<template>
    <div class="page">
        <template v-for="i in 5">
            <div class="box-card">
                <div v-if="i!=5" >
                <el-card class="card_1_1">
                    <span></span>
                </el-card>
                </div>
                <div v-else>
                    <el-card class="card_1_2">
                        <span></span>
                    </el-card>
                </div>
            </div>
        </template>

        <div class="box_1">
            <el-card class="card_2_1">
                <span></span>
            </el-card>
        </div>
        <div class="box_1">
            <el-card class="card_2_2">
                <div >
                    <mapGetter/>
                </div>

            </el-card>
        </div>
        <div class="box_2">
            <el-card class="card_3">
                <span></span>
            </el-card>
        </div>
        <div class="box_foot">
            最终解释权归@鲨鱼恶霸解释
        </div>
    </div>

</template>

<script>
    import mapGetter from './chinamap';
    export default {
        name: "",
        data(){
            return{}
        },
        components:{
            mapGetter
        }
    }
</script>

<style scoped>
    .page{
        height: 100%;
    }
.box-card{
    height: 100px;
    width: 20%;
    float: left;
}
.card_1_1{
    margin: 10px 0px 10px 10px;
    height: 80px;
}
.card_1_2{
    margin: 10px;
    height: 80px;
}
.box_1{
    width: 50%;
    height: 400px;
    float: left;
}
.card_2_1{
    margin: 0 10px;
    height: 400px;
}
.card_2_2{
    margin: 0 10px 0 0;
    height: 400px;
}
.box_2{
    width: 100%;
    height: 100px;
    float: left;
}
.card_3{
    margin: 10px;
    height: 80px;
}
.box_foot{
    margin: 0 10px;
    width: 100%;
    text-align: center;
    float: left;
}
</style>
