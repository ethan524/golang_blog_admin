<template id="asidebar">
    <div class="sizeBox">
        <div class="siteTitle"><a href="/index"><i class="el-icon-s-home"></i> 博客后台</a></div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :default-active="$route.path" ref="menuBar" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i> <span>仪表盘</span>
                        </template>
                        <el-menu-item index="/index" @click="clickMenu($event)">仪表盘</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-notebook-2"></i> <span>博客</span>
                        </template>
                        <el-menu-item index="/art-list" @click="clickMenu($event)">文章列表</el-menu-item>
                        <el-menu-item index="/art-create" @click="clickMenu($event)">创建文章</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i> <span>前台菜单</span>
                        </template>
                        <el-menu-item index="/menu-list" @click="clickMenu($event)">导航菜单</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-s-comment"></i> <span>评论留言</span>
                        </template>
                        <el-menu-item index="/comment-sensitive">敏感词列表</el-menu-item>
                        <el-menu-item index="/comment-sensitive-set">敏感词设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i> <span>标签分类</span>
                        </template>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                        <el-menu-item index="5-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-s-custom"></i> <span>用户</span>
                        </template>
                        <el-menu-item index="6-1">选项1</el-menu-item>
                        <el-menu-item index="6-2">选项2</el-menu-item>
                        <el-menu-item index="6-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-s-management"></i> <span>权限管理</span>
                        </template>
                        <el-menu-item index="7-1">选项1</el-menu-item>
                        <el-menu-item index="7-2">选项2</el-menu-item>
                        <el-menu-item index="7-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(obj){
            let breadcrumb = {
                'path':obj.index,
                'name':obj.$el.innerText
            };
            this.$store.state.breadcrumb = breadcrumb
        }
    },
}
</script>
<style lang="less" scoped>
    .siteTitle{
        height: 40px;
        line-height: 40px;
        width: 240px;
        text-align: center;
        color:white;
    }
    .siteTitle a{
        color:white;
    }
    /deep/ .el-menu{
        background-color: #354152 !important;
    }
    /deep/ .el-submenu__title{
        color:white !important;
    }
    /deep/ .el-submenu__title:hover{
        background-color: #008b7c !important;
    }
    /deep/ .el-menu-item{
        color:white !important;
    }
    /deep/ .el-menu-item:hover{
        color:#008b7c;
        background-color: #354152 !important;
    }
    .el-menu-item.is-active{
        background-color: #008b7c !important;
    }
</style>