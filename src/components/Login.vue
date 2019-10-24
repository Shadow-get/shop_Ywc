<template>
  <div class="login">
    <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
      <img class="logo" src="../assets/1.jpg" alt />
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item type="password" label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名称',
            trigger: ['change', 'blur']
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: ['change', 'blur']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['change', 'blur']
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(flag => {
        if (!flag) return
        console.log('发送ajax请求')
        axios({
          method: 'post',
          url: 'http://localhost:8888/api/private/v1/login',
          data: this.form
        }).then(res => {
          console.log(res.data)
          const { meta, data } = res.data
          if (meta.status === 200) {
            localStorage.setItem('token', data.token)
            this.$message({
              type: 'success',
              message: meta.msg,
              duration: 1000
            })
            this.$router.push('/index')
          } else {
            this.$message.error(meta.msg)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    margin: 0 auto;
    margin-top: 80px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    padding-top: 50px;
    position: relative;
    .logo {
      width: 100px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
      border-radius: 50%;
      border: 3px solid #fff;
    }
    .loginBtn {
      margin-right: 70px;
    }
  }
}
</style>
