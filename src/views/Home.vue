<template>
  <div class="home">
    <el-container direction="vertical">
      <el-container>
        <el-aside width="240px" class="menuBox">
          <AsideBar />
        </el-aside>
        <el-main>
          <div class="headerBox"><HeaderBar /></div>
          <div class="breadcrumb"><Breadcrumb /></div>
          <div class="mainBox"><router-view /></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import HeaderBar from '../components/HeaderBar'
import AsideBar from '../components/AsideBar'
export default {
  name: 'Home',
  components:{HeaderBar, AsideBar, Breadcrumb}
}
</script>
<style lang="less" scoped>
  .home{
    width:100% !important;
    padding: 0;
    margin:0;
    height:calc(100vh);
  }
  .headerBox{
    width: 100%;
    height:40px;
    border-bottom: 1px solid rgb(229,229,229);
    padding:0px 0px;
    line-height: 40px;
    background-color: #354152;
  }
  .el-main{
    padding:0px;
  }
  .menuBox{
    // border-right: 1px solid rgb(229,229,229);
    background-color: #354152 !important;
  }
  .el-aside {
    height:100vh;
  }
  .breadcrumb{
    height: 30px;
    line-height: 30px;
    padding-top: 10px;
    padding-left: 10px;
  }
  .mainBox{
    padding:10px;
  }
</style>