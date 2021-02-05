<template>
    <div class="side">
        <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                :collapse="collapse"
                :collapse-transition="false"
                active-text-color="#20a0ff"
                unique-opened
                router>
            <template v-for="(item,index) in routers">
                <template v-if="!item.hidden">
                <template v-if="hasOne(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
                    <el-menu-item :index="item.path" :key="index">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                </template>
                    <el-submenu  v-else :index="index+''">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <template v-for="(child,index2) in item.children">
                            <el-menu-item :index="item.path+'/'+child.path" :key="index+'_'+index2">
                                <i :class="child.meta.icon"></i>
                                <span slot="title">{{child.meta.title}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
            </template>
            </template>
            </el-menu>
    </div>
</template>

<script>
    import bus from '@/components/common/bus';
    export default {
        name: "sideBar",
        data(){
            this.onlyOneChild=null
            return {
                collapse: false,
            }
        },
        computed: {
            routers() {
                return this.$router.options.routes;
            }
        },
        methods: {
            hasOne(children = [], parent){
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        this.onlyOneChild = item
                        return true
                    }

                })
                if (showingChildren.length === 1) {
                    return true
                }
                if (showingChildren.length === 0) {
                    this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                    return true
                }
                return false
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });
        }
    }
</script>

<style scoped>
.side{
    display: block;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
}
.side::-webkit-scrollbar {
    width: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}
</style>
