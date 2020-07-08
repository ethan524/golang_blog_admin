<template>
    <div class="art-list">
        <div class="conditions">
          <div class="conditions-box ">
            <span class="labelName">敏感词</span>
            <div class="labelCondition">
              <el-input placeholder="请输入内容" size="mini" v-model="condition_arttitle"></el-input>
            </div>
          </div>
          <div class="conditions-box"><el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button></div>
        </div>
        <template>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="name" label="敏感词" > 
                  <template slot-scope="scope"><router-link v-bind:to="'/art-content/'+scope.row.id" >{{scope.row.name}}</router-link></template> 
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <div class="page">
          <el-pagination 
            :page-sizes="[10, 20, 30, 40]" :page-size="page.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
          </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:'CommentSensitive',
    data() {
      return {
        page:{
          pagesize:10,
          total:100,
        },
        condition_arttitle:"",
        options:[
          {value:'',label:'全部'},{value:'1',label:'上线'},{value:'0',label:'下线'},{value:'-1',label:'草稿',}
        ],
        tableData: [{id:1,name: 'fuck',},{id:2,name: 'fucker'}],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    }
}
</script>
<style lang="less" scoped>
  .conditions{
    border:1px solid rgb(229,229,229);
    padding:10px;
    background-color: white;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .conditions-box{
    width: 240px;
    float: left;
    margin-right: 20px;
  }
  .timepicker{
    width:220px;
  }
  .labelName{
    float: left;
    line-height: 26px;
    margin-right: 10px;
    color:#535254;
    font-size:14px;
  }
  .labelCondition{
    float: left;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width:150px !important;
  }
  .page{
    text-align: center;
    padding: 10px 0px ;
  }
</style>