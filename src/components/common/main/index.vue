<template>
    <div class="content-box" :class="{'content-collapse':collapse}">
        <tags/>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <el-backtop target=".content"></el-backtop>
        </div>
</div>
</template>

<script>
    import tags from '@/components/common/Tags';
    import bus from '@/components/common/bus';
    export default {
        name: "",
        data() {
            return {
                tagsList: [],
                collapse: false
            };
        },
        components:{
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

<style scoped>

</style>
