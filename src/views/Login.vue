<template>
    <div class="login">
        <div class="alterBox" ><el-alert title="" type="error" v-if="showAlter" @close="close()">{{alertTxt}}</el-alert></div>
        <div class="ipt">
            <el-row>
                <el-col :span="16" :push="4">
                    <el-input placeholder="请输入用户名" v-model="username">
                        <template slot="prepend"><i class="el-icon-user-solid"></i></template>
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="ipt">
            <el-row>
                <el-col :span="16" :push="4">
                    <el-input placeholder="请输入密码" v-model="password" type="password">
                        <template slot="prepend"><i class="el-icon-s-goods"></i></template>
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="ipt">
            <el-row>
                <el-col :span="16" :push="4">
                    <el-input placeholder="请输入验证码" v-model="captcha" class="captcheIpt">
                        <template slot="prepend"><i class="el-icon-picture"></i></template>
                    </el-input>
                </el-col>
                <div class="captchaImg"></div>
            </el-row>
        </div>
        <div class="ipt">
            <el-row>
                <el-col :span="16" :push="4">
                    <el-button type="primary" class="loginBtn" @click="submitForm('loginForm')">登陆</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
        alertTxt:"",
        showAlter:false,
        username:"",
        password:"",
        captcha:"",
    };
  },
  methods:{
        submitForm(){
            console.log(this.showAlter)
            if(this.username == '' || this.password == '' || this.captcha == ''){
                this.alertTxt = "请将信息填写完整"
                this.showAlter = true
            }else{
                this.$router.push('/');
            }
        },
        close(){
            this.showAlter = false
        }
  }
};
</script>
<style lang="less" scoped>
    html,body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .login{
        width: 400px;
        height: 320px;
        background:white;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 50%; /*偏移*/
        transform: translateY(-90%);
        padding-top:10px;
        border-radius: 4px;
    }
    .ipt{
        margin-top:20px;
    }
    .captcheIpt{
        width: 195px;
        float: left;
    }
    .captchaImg{
        float: left;
        width: 64px;;
        height:37px;
        border:1px solid rgb(229,229,229);
        border-radius: 3px;
    }
    .alterBox{
        height:30px;
    }
    .loginBtn{
        width:268px;
    }
</style>