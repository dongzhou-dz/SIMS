<template>
  <a-layout>
    <a-layout-sider></a-layout-sider>
    <a-layout>
    
      <a-layout-content></a-layout-content>

    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      layoutSideer: [
        {
          name: '学生列表',
          info: 'studentList'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  @import './UserLogin.less';
</style>