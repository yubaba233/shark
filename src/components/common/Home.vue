<template>
    <div>
        <el-container>
            <el-header style="padding: 0">
                <appHeader/>
            </el-header>
            <el-container>
                <el-aside :width=" collapse ? '60px' : '180px'">
                    <side/>
                </el-aside>
                <el-main>
                    <div class="content-box" :class="{'content-collapse':collapse}">
                       <tags/>
                    <div class="content">
                        <transition name="move" mode="out-in">
                            <keep-alive :include="tagsList">
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                       <!-- <el-backtop target=".content"></el-backtop>-->
                    </div>
                  </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import appHeader from '@/components/common/header/index'
    import side from '@/components/common/sidebar/index'
    import tags from '@/components/common/Tags';
    import bus from "@/components/common/bus";

export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components:{
        appHeader,
        side,
        tags
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        });
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
}

</script>


