<template>
    <div class="Header">
        <ul class="menu-ul">
            <li>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a href="/login">退出</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HeaderBar',
    data(){
        return {
            activeIndex:1,
        }
    }
}
</script>
<style lang="less" scoped>
    .Header{
        padding-left: 10px;
        color:white;
    }
    .menu-ul{
        float:right;
        margin-right: 50px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: white;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>