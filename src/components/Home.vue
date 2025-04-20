<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-button @click="loginout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {
      // 清空 token
      window.sessionStorage.clear();
      // 跳转到登陆页面
      this.$router.push('/login');
      this.$message({ message: '退出成功', type: 'success' });
    }
  }
};
</script>

<!-- scoped 范围只在这个单文件组件中生效，不加在整个项目中生效 -->
<style lang="less" scoped></style>
