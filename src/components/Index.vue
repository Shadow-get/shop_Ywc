<template>
  <!-- 头部 -->
  <el-container class="index">
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="title">电商后台管理系统</div>
      <div class="logout">
        欢迎光临
        <a @click="logout" href="javascript:;">退出</a>
      </div>
    </el-header>
    <!-- 侧边栏 -->
    <el-container >
      <el-aside width="200px">
        <el-menu
          router
          unique-opened
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item class="el-icon-magic-stick" index="users"> 用户列表</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item class="el-icon-magic-stick" index="roles"> 角色列表</el-menu-item>
              <el-menu-item class="el-icon-magic-stick" index="rights"> 权限列表</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>

      <!-- 内容右侧区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;

  .el-header {
    background-color: rgb(229, 130, 130);
    display: flex;
    .logo {
      width: 180px;
      img {
        height: 40px;
        margin: 10px;
      }
    }
    .title {
      flex: 1;
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-weight: 700;
      color: #545c64;
      font-size: 24px;
    }
    .logout {
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: right;
      a {
        color: rgb(91, 84, 85);
        text-decoration: none;
      }
    }
  }
  .el-aside {
    background-color: rgb(161, 222, 151);
      .el-menu{
        border: none;
      }
  }
  .el-main {
    background-color: rgb(134, 177, 224);
  }
}
</style>
