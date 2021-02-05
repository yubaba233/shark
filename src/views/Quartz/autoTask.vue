<template>
    <div>
    <el-table
            :data="tableData"
            border
            max-height="300"
            style="width: 100%">
        <el-table-column
                prop="ltaskid"
                label="任务id"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="taskName"
                label="任务名称"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="dstartdate"
                label="开始时间"
                :formatter="dateFormat"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="denddate"
                label="结束时间"
                :formatter="dateFormat"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="cron"
                v-if="showCol"
                label="cron表达式"
                width="180">
        </el-table-column>
        <el-table-column
                prop="creator"
                label="创建人"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="cisvalid"
                label="是否启用"
                :formatter="tdformat"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                prop="taskDesc"
                label="任务描述"
                min-width="12.5%">
        </el-table-column>
        <el-table-column
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="showDetailWin(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="editDetailWin(scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="showDialog" center :append-to-body='true'>
        <el-form :model="tableData"  ref="" >
            <el-form-item label="厂家名称" prop="nickName">
                <el-input  style="width:70%;"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
    </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Quartz",
        data(){
            return {
                tableData: [],
                showCol: false,
                showDialog: false,
                title: ''
            }
        },
        mounted(){
            this.init();//在html加载完成后进行，相当于在页面上同步显示后端数据
        },
        methods:{
            init: function (){
                axios.get('/api/quartz/findAll')
                .then(response=>{
                    this.tableData =response.data
                })
                .catch(error => console.log(error))
            },
            dateFormat: function (row,column){
                var newdate=row[column.property];
                if(newdate==undefined)return ''
                return this.$moment(newdate).format("YYYY-MM-DD HH:mm:ss")
            },
            tdformat:function (row,column){
                var newdata=row[column.property];
                if(newdata == 0){
                    return "停用"
                }else{
                    return "启用"
                }
            },
            showDetailWin:function (data) {
                this.showDialog=true,
                this.title='查看定时任务'
            },
            editDetailWin:function (data) {
                this.showDialog=true,
                this.title='修改定时任务'
            },
        }
    }
</script>

<style scoped>

</style>
