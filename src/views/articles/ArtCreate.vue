<template>
    <div id="artBox">
        <!--类别，标签，是否发布，是否推荐-->
        <el-form ref="form" :model="form" label-width="80px">
            <div class="artOthers">
                <div>
                    <el-form-item label="文章标题" prop="artTitle">
                        <el-input v-model="form.artTitle" placeholder="请输入文章标题"></el-input>
                    </el-form-item>
                </div>
                <div class="">
                    <div class="fl" style="margin-right:-10px;">
                        <el-form-item label="所属类别">
                            <template slot="prepend">文章标题</template>
                            <el-select v-model="form.category" placeholder="请选择所属类别">
                            <el-option v-for="(item, i) in category" :key="i" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="fl">
                        <el-form-item label="标签" prop="tags">
                            <el-input v-model="form.tags" placeholder="请输入标签关键词,关键词使用逗号分割" style="width:280px;"></el-input>
                        </el-form-item>
                    </div>
                    <div class="fl">
                        <el-form-item label="是否推荐">
                            <el-radio-group v-model="form.is_recommend" size="mini">
                            <el-radio border label="是"></el-radio>
                            <el-radio border label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="fr">
                        <el-form-item size="large">
                            <el-button type="primary" >立即发布</el-button>
                            <el-button>存入草稿</el-button>
                        </el-form-item>
                    </div>
                </div>
            </div>
            
            <div id="artContent">
                <div class="mavonEditor">
                    <mavon-editor :subfield = "subfield" :code_style="code_style" :ishljs="true"  v-model="handbook"/>
                </div>
            </div>
            
        </el-form>
    </div>
</template>
<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "mavon-editor/dist/highlightjs/highlight.min.js";
import "mavon-editor/dist/katex/katex";
Vue.use(mavonEditor)

export default {
    name:'ArtCreate',
    data() {
    return {
        category:[
            {label:"前端",value:"1"},
            {label:"后端",value:"2"},
            {label:"数据库",value:"3"},
            {label:"操作系统",value:"4"},
        ],
        form:{
            artTitle:'',
            category:'',
            tag:'',
            is_recommend:'',
        },
        
        subfield: true,
            code_style: 'solarized-dark',
            externalLink: {
                markdown_css: function() {
                    // 这是你的markdown css文件路径
                    return '/markdown/github-markdown.min.css';
                },
                hljs_js: function() {
                    // 这是你的hljs文件路径
                    return '/highlightjs/highlight.min.js';
                },
                hljs_css: function(css) {
                    // 这是你的代码高亮配色文件路径
                    return '/highlightjs/styles/' + css + '.min.css';
                },
                hljs_lang: function(lang) {
                    // 这是你的代码高亮语言解析路径
                    return '/highlightjs/languages/' + lang + '.min.js';
                },
                katex_css: function() {
                    // 这是你的katex配色方案路径路径
                    return '/katex/katex.min.css';
                },
                katex_js: function() {
                    // 这是你的katex.js路径
                    return '/katex/katex.min.js';
                },
            },
        markdownOption: {
            
            toolbars:{
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            }
        },
        handbook: "请撰写博客内容"
    };
  }
}
</script>
<style lang="less" scoped>
    #artContent{
        margin:10px 0px;
        height:720px;
        width: 100%;
        clear: both;
    }
    .mavonEditor {
        width: 100%;
    }
    .v-note-wrapper{
        min-height: 720px;;
    }
    .fl{
        float: left;
        margin-right: 20px;;
    }
    .fr{
        float: right;
    }
    .el-radio {
        margin-right: 0px;;
    }
</style>