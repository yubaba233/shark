<template>
	<div>
	    <el-form ref="loginForm" :model="form" :rules="rules"  class="login-box">
	      <h3 class="login-title">欢迎登录</h3>

	      <el-form-item prop="username">
	        <el-input type="text" prefix-icon="el-icon-user" placeholder="请输入账号" v-model="form.username"/>
	      </el-form-item>
	      <el-form-item prop="password">
	        <el-input type="password" prefix-icon="el-icon-key" placeholder="请输入密码" v-model="form.password" @keyup.enter="onSubmit('loginForm')"/>
	      </el-form-item>
	      <el-form-item>
	        <el-button type="primary" style="width: 100%" v-on:click="onSubmit('loginForm')">登录</el-button>
	      </el-form-item>
	    </el-form>

	    <el-dialog
	      title="温馨提示"
	      :visible.sync="dialogVisible"
	      width="30%"
	      :before-close="handleClose">
	      <span>请输入账号和密码</span>
	      <span slot="footer" class="dialog-footer">
	        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	      </span>
	    </el-dialog>
	  </div>
</template>

<script>
 export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: '',
          user: {}
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
          let _this = this;
          this.$refs[formName].validate((valid) => {
          if (valid) {
              axios.get('/api/user/login',{
                  params:{
                      username: _this.form.username,
                      password: _this.form.password
                  }
              })
                  .then(response=>{
                      _this.user =response.data
                  })
                  .catch(error => console.log(error))
			  if(_this.user){
				  // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                  sessionStorage.setItem("token","true");
                  this.$store.commit('setToken',true);
				  _this.$router.push("/");
			  }else{
				 _this.$message('用户或密码输入错误');
			  }
          } else {
            _this.dialogVisible = true;
            return false;
          }
        });
      }, handleClose(done) {
        _this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>
