<template>
    <el-dialog
            :title="title"
            :visible.sync="show"
            >
        <span>{{show}}</span>
        <div slot="footer" class="dialog-footer">
            <el-button @click="show=false">取 消</el-button>
            <el-button type="primary" @click="">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "",
        props: {
            title:{
                type: String
            },
            visible:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                show: false
            }
        },
        watch:{
            visible:function (newValue, oldValue) {
                this.show=newValue;
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
