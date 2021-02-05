<template>
<div class="fish_header">
    <div class="collapse-btn" @click="collapseChage">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">欢迎</div>
</div>
</template>

<script>
    import bus from '@/components/common/bus';
    export default {
        name: "",
        data(){
            return {
                collapse: false
            }
        },
        methods: {
            // 侧边栏折叠
            collapseChage() {
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
        }
    }
</script>

<style scoped>
    .fish_header {
        padding: 0px;
        box-sizing: border-box;
        background-color: #666666;
        width: 100%;
        height: 60px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn {
        float: left;
        padding: 0 20px 0 60px;
        cursor: pointer;
        line-height: 60px;
    }
    .fish_header .logo {
        float: left;
        width: 250px;
        line-height: 60px;
    }
</style>
