<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><router-link :to="{path:breadcrumb.path}">{{breadcrumb.name}}</router-link></el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name:'Breadcrumb',
    data(){
        return {
        }
    },
    computed:{
        breadcrumb(){
            return this.$store.state.breadcrumb
        }
    }
}
</script>
<style lang="less" scoped>

</style>