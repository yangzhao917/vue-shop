<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    欢迎您，{{ username ? username : '' }}<br/>
    邮箱：{{ email ? email : '' }}<br/>
    手机号：{{ mobile ? mobile : '' }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      email: null,
      mobile: null
    };
  },
  mounted() {
    this.getLoginUser();
  },
  methods: {
    getLoginUser() {
      const loginUser = window.sessionStorage.getItem('loginUser');
      const lgoinUserObj = JSON.parse(loginUser);
      console.log(lgoinUserObj);
      this.username = lgoinUserObj.username;
      this.email = lgoinUserObj.email;
      this.mobile = lgoinUserObj.mobile;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
