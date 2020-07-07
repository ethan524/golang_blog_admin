<template>
    <div class="art-list">
        <div class="conditions">
          <div class="conditions-box selectOpt">
            <span class="labelName">菜单状态</span>
            <div class="labelCondition">
              <template>
                <el-select v-model="condition_status" placeholder="请选择" size="mini">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </template>
            </div>
          </div>
          <div class="conditions-box"><el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button></div>
        </div>
        <template>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="name" label="导航名称" > 
                  <template slot-scope="scope"><router-link v-bind:to="'/art-content/'+scope.row.id" >{{scope.row.name}}</router-link></template> 
                </el-table-column>
                <el-table-column prop="tag" label="状态"
                    :filters="[{ text: '启用', value: '启用' }, { text: '关闭', value: '关闭' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.tag === '启用' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
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
    name:'MenuList',
    data() {
      return {
        page:{
          pagesize:10,
          total:100,
        },
        condition_status:"",
        options:[
          {value:'',label:'全部'},{value:'1',label:'启用'},{value:'0',label:'关闭'}
        ],
        tableData: [{
          id:1,name: '首页',tag:'启用',
        },{
          id:2, name: '前端', tag:'关闭',
        },{
          id:3, name: '后端', tag:'关闭',
        },{
          id:4, name: '数据库', tag:'关闭',
        },{
          id:2, name: '开发文档', tag:'关闭',
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
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