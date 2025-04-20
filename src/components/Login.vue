<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login_container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avator-box"><img src="../assets/logo.png" alt="" /></div>
      <!-- 登陆表单 -->
      <el-form ref="loginFormRef" :rules="loginFormRules" :model="loginForm" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user-solid" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="fa fa-lock" show-password />
        </el-form-item>
        <el-form-item class="login-form-btn">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登陆表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证对象
      loginFormRules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          },
          {
            pattern: /^[^\u4e00-\u9fa5]+$/, // 匹配非中文
            message: '不能输入中文',
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    };
  },
  methods: {
    login() {
      // async 使用异步请求
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }

        // 用于处理 Promise，必须和 async 一起使用
        await this.$http
          .post('/login', this.loginForm)
          .then((resp) => {
            const respStatus = resp.data.meta;
            const respData = resp.data;

            // 登陆失败的处理
            if (respStatus.status !== 200) {
              return this.$message.error(respStatus.msg);
            }

            // 登陆成功
            this.$message({ message: respStatus.msg, type: 'success' });

            // 将登陆成功后的 token，保存到浏览器的 sessionStorage 中，因为 token 只在网站打开期间有效
            window.sessionStorage.setItem('token', respData.data.token);

            // 跳转到后台主页 /home
            this.$router.push('/home');
          })
          .catch(() => {
            this.$message.error('系统异常，请联系管理员');
          });
      });
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<!-- scoped 范围只在这个单文件组件中生效，不加在整个项目中生效 -->
<style lang="less" scoped>
.login_container {
  background-color: #dddd;
  height: 100%;
}

.login-box {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px; /* 四个角都是3px圆角 */
  position: absolute;
  left: 50%; // 离左边50%
  top: 50%; // 离上面50%
  transform: translate(-50%, -50%); // 平移：translate(x, y) 同时水平和垂直移动

  .avator-box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd; // 设置阴影
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      // 样式嵌套
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login-form-btn {
  text-align: center;
}
</style>
