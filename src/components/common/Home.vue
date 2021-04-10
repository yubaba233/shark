<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <appheader/>
            </el-header>
            <el-container>
                <el-aside :width=" collapse ? '60px' : '180px'">
                    <appside/>
                </el-aside>
                <el-main>
                    <appmain/>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import appheader from '@/components/common/header/index'
    import appside from '@/components/common/sidebar/index'
    import appmain from '@/components/common/main/index'
    import bus from "@/components/common/bus";
    export default {
        data() {
            return {
                collapse: false
            };
        },
        components:{
            appheader,
            appside,
            appmain
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            });
        }
    }

</script>


