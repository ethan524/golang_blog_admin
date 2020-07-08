<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="cardLine">
                    <div class="card viewsNumber"><span class="cardTitel"><i class="el-icon-view"></i> 浏览总量</span><span class="cardContent">6397</span></div>
                    <div class="card contentNumber"><span class="cardTitel"><i class="el-icon-document"></i> 文章总数</span><span class="cardContent">99</span></div>
                    <div class="card commentNumber"><span class="cardTitel"><i class="el-icon-s-comment"></i> 评论总数</span><span class="cardContent">16397</span></div>
                    <div class="card userNumber"><span class="cardTitel"><i class="el-icon-s-custom"></i> 用户总数</span><span class="cardContent">13</span></div>
                    <div class="card cpuNumber">
                        <span class="cardTitel"><i class="el-icon-cpu"></i> CPU</span>
                        <span class="cpuContent">已用25%，剩余75%</span>
                    </div>
                    <div class="card memNumber">
                        <span class="cardTitel"><i class="el-icon-odometer"></i> 内存</span>
                        <span class="cpuContent">已用71%，剩余29%</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Index'
}
</script>
<style lang="less" scoped>
    .cardLine{
        width: 100%;
        overflow: hidden;
    }
    .card{
        float: left;
        margin-right: 30px;
        width: 220px;
        height:120px;
        border-radius: 4px;
        opacity:0.7;
    }
    .viewsNumber{
        background: -webkit-linear-gradient( top, rgba(48,150,246, 1),rgba(48,150,246, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(48,150,246, 1),rgba(48,150,246, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(48,150,246, 1), rgba(48,150,246, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(48,150,246, 1), rgba(48,150,246, 0.7)); /* 标准的语法 */
    }
    .contentNumber{
        background: -webkit-linear-gradient( top, rgba(134,129,232, 1),rgba(134,129,232, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(134,129,232, 1),rgba(134,129,232, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(134,129,232, 1), rgba(134,129,232, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(134,129,232, 1), rgba(134,129,232, 0.7)); /* 标准的语法 */
    }
    .commentNumber{
        background: -webkit-linear-gradient( top, rgba(75,211,199, 1),rgba(75,211,199, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(75,211,199, 1),rgba(75,211,199, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(75,211,199, 1), rgba(75,211,199, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(75,211,199, 1), rgba(75,211,199, 0.7)); /* 标准的语法 */
    }
    .userNumber{
        background: -webkit-linear-gradient( top, rgba(241,108,111, 1),rgba(241,108,111, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(241,108,111, 1),rgba(241,108,111, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(241,108,111, 1), rgba(241,108,111, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(241,108,111, 1), rgba(241,108,111, 0.7)); /* 标准的语法 */
    }
    
    .cpuNumber{
        background: -webkit-linear-gradient( top, rgba(233,173,96, 1),rgba(233,173,96, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(233,173,96, 1),rgba(233,173,96, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(233,173,96, 1), rgba(233,173,96, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(233,173,96, 1), rgba(233,173,96, 0.7)); /* 标准的语法 */
    }
    .memNumber{
        
        background: -webkit-linear-gradient( top, rgba(115,200,94, 1),rgba(115,200,94, 0.7) ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(bottom,rgba(115,200,94, 1),rgba(115,200,94, 0.7)); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient( bottom, rgba(115,200,94, 1), rgba(115,200,94, 0.7)); /* Firefox 3.6 - 15*/
        background: linear-gradient(to bottom,rgba(115,200,94, 1), rgba(115,200,94, 0.7)); /* 标准的语法 */
    }
    .cardTitel{
        font-size:14px;
        font-weight: bolder;
        color:white;
        display: block;
        margin-left: 20px;
        margin-top: 20px;;
    }
    .cardContent{
        font-size:24px;
        color:white;
        display: block;
        margin-left: 20px;
        margin-top: 30px;
    }
    .cpuContent{
        font-size:18px;
        color:white;
        display: inline-block;
        margin-left: 20px;
        margin-top: 34px;
    }
</style>