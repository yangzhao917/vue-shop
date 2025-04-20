<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- 主体容器 -->
  <el-container>
    <!-- 头部容器 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" style="width: 50px; height: 50px;" alt="">
        <span>后台管理系统</span>
      </div>
      <div style="text-align: right;">
        <el-dropdown type="primary" @command="handlerUser">
          <i class="el-icon-setting" ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="getPerson">个人信息</el-dropdown-item>
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      <span>王小虎</span>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏容器 -->
      <el-aside>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-location"></i>
              <span>选项2</span>
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-location"></i>
              <span>选项3</span>
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-location"></i>
              <span>选项4</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-location"></i>
              <span>选项2</span>
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-location"></i>
              <span>选项3</span>
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="el-icon-location"></i>
              <span>选项4</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <el-footer style="height: 30px;">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    loginout() {
      // 清空 token
      window.sessionStorage.clear();
      // 跳转到登陆页面
      this.$router.push('/login');
      this.$message({ message: '退出成功', type: 'success' });
    },
    handlerUser(command) {
      console.log(command);
      switch (command) {
        case 'getPerson':
          // 查看个人信息
          this.$message('功能开发中');
          break;
        case 'loginout':
          // 退出登陆
          this.loginout();
          break;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- scoped 范围只在这个单文件组件中生效，不加在整个项目中生效 -->
<style lang="less" scoped>
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
}

.el-footer {
  text-align: center;
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

// body > .el-container {
//   margin-bottom: 40px;
// }

.el-container:nth-child(5) .el-aside, .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-container {
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
