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
            <el-dropdown-item command="loginout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      <span>{{username}}</span>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏容器 -->
      <el-aside :width="isCollapse? '60px':'200px'">
        <div class="home-menu-toggle-button" @click="toggleButton">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
         background-color="#B3C0D1"
         active-text-color="#409EFF"
         class="el-menu-vertical-demo"
         @open="handleOpen"
         @close="handleClose"
         unique-opened
         :collapse="isCollapse"
         :collapse-transition="false"
         router
         >
          <!-- 一级菜单 -->
          <el-submenu :index="String(menus.path)" v-for="menus in menuList" :key="menus.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ menus.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="String(subMenu.path)" v-for="subMenu in menus.children" :key="subMenu.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subMenu.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 右侧内容主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer style="height: 30px;">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      isCollapse: false,
      username: null
    };
  },
  created() {
    this.getLoginUserName();
    this.getMenuList();
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
    },
    async getMenuList() {
      // 用于处理 Promise，必须和 async 一起使用
      await this.$http
        .get('/menus', this.loginForm)
        .then((resp) => {
          const respStatus = resp.data.meta;
          const respData = resp.data;
          if (respStatus.status !== 200) {
            return this.$message.error(respStatus.msg);
          }
          this.menuList = respData.data;
          // console.log(respData.data);
        })
        .catch(() => {
          this.$message.error('系统异常，请联系管理员');
        });
    },
    getLoginUserName() {
      const loginUser = window.sessionStorage.getItem('loginUser');
      const lgoinUserObj = JSON.parse(loginUser);
      this.username = lgoinUserObj.username;
    },
    // 切换菜单的折叠/展开
    toggleButton() {
      this.isCollapse = !this.isCollapse;
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
  .el-menu {
    border-right: none;
  }

  .el-icon-menu {
  margin-left: 45px;
}
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
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

.home-menu-toggle-button {
  line-height: 24px;
  font-size: 10px;
  text-align: center;
  letter-spacing: 0.2rem;
  cursor: pointer;
}
</style>
