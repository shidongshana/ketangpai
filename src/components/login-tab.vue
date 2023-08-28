<template>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<el-form-item prop="user"  style="margin-left: 0">
  <el-input type="text" v-model="ruleForm.user" class="item-ruleForm" placeholder="请输入邮箱/手机号/账号"></el-input>
</el-form-item>
<el-form-item  prop="pass" >
  <el-input type="password" v-model="ruleForm.pass" class="item-ruleForm" placeholder="请输入密码"></el-input>
</el-form-item>
  <el-form-item class="item-ruleForm">
    <div class="flex-between">
    <el-checkbox v-model="ruleForm.checkBox">下次自动登录</el-checkbox>
    <el-button type="text"><span>忘记密码？</span></el-button>
    </div>
  </el-form-item>
<el-form-item class="item-ruleForm">
  <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">登录</el-button>
  <div class="flex-bottom">
    <span>还没有账号？</span>
    <el-button type="text" @click="goRegist" ><span>立即注册</span></el-button>

  </div>
</el-form-item>
</el-form>
</template>
<script>
export default {
 name:'LoginTab',
  data() {
   const validateUser= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        pass: '',
        checkBox: false,
      },
      rules: {
        user: [
          { validator: validateUser, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //跳转http://localhost:8081/#/regist
    goRegist(){
      this.$router.push("/regist")
    }

  }
}
</script>
<style>
.item-ruleForm {
  width: 360px !important;
  height: 48px !important;
}
.el-form-item__content{
  margin-left: 0 !important;
}
.demo-ruleForm{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-between{
display: flex;
  justify-content: space-between;
}
.flex-bottom{
  display: flex;
  justify-content: flex-end;
}
.login-button{
  width: 360px;
  height: 48px;
}
.flex-between span{
  color: #606266 !important;
}

</style>