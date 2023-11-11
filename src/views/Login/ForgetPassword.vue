<template>
  <div class="login">
    <div class="top"></div>
    <div class="mask">
      <el-form hide-required-asterisk ref="ruleFormRef" label-position="top" :model="userForm" :rules="rules"
        class="login-form" :size="formSize">
        <h1 class="title">找回密码</h1>
        <el-form-item prop="userphone" label="手机号">
          <el-input v-model="userForm.userphone" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="手机号"
            :style="{ fontSize: '16px' }" />
        </el-form-item>
        <el-form-item prop="userCaptcha" class="userCaptcha-main" label="验证码">
          <el-input v-model="userForm.userCaptcha" type="text" size="large" auto-complete="off" placeholder="验证码"
            placeholder-style="color: blue" :style="{ fontSize: '16px' }">
            <template #prefix>
              <i class="element-icons el-icon-yanzhengma"></i>
            </template>
            <template #suffix>
              <el-link v-if="userForm.disableclick" disabled>{{ userForm.time }}秒后发送</el-link>
              <el-link :underline="false" v-else :disabled="userForm.disableclick"
                @click="getCode(userForm.userphone)">发送验证码</el-link>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="请输入新密码">
          <el-input v-model="userForm.password" type="password" :prefix-icon="Hide" size="large" auto-complete="off"
            placeholder="请输入新密码" :style="{ fontSize: '16px' }" />
          <!-- <el-input v-model="userForm.password" type="password" :prefix-icon="View" size="large" auto-complete="off"
            placeholder="请输入新密码" :style="{ fontSize: '16px' }" /> -->
        </el-form-item>
        <el-form-item prop="rePassword" label="请再次输入新密码">
          <el-input v-model="userForm.rePassword" type="password" :prefix-icon="Hide" size="large" auto-complete="off"
            placeholder="请再次输入新密码" :style="{ fontSize: '16px' }" />
        </el-form-item>
        <div class="submit">
          <el-button size="large" class="btn_login" @click="confirmChange">修改密码</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import router from '@/router'
import type { FormInstance, FormRules, } from 'element-plus'
import { ElMessage, ElForm, ElFormItem, ElInput, ElButton, ElLink } from 'element-plus'
import { Avatar, Hide } from '@element-plus/icons-vue'

let codeBtnText = ref('获取验证码')
let reClick = ref(false)

const formSize: any = ref('default')
const ruleFormRef = ref<FormInstance>()

const userForm = reactive<any>({
  userphone: '',
  password: '',
  rePassword: '',
  userCaptcha: '',
})
// 数据效验
const rules = reactive<FormRules>({
  userphone: [
    { required: true, validator: checkPhone, trigger: 'blur' },
  ],
  // 验证码
  userCaptcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码至少是6位至15位', trigger: 'blur' }
  ],
  rePassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码至少是6位至15位', trigger: 'blur' }
  ],
})
// 校验手机号(ts数据泛型暂时不写，有需要再改)
function checkPhone(rule: any, value: any, callback: any,) {
  console.log('参数值rule', rule)
  console.log('参数值value', value)
  console.log('参数值callback', callback)
  if (!value) {
    return callback(new Error('请输入手机号'))
  }
  if (value.length != 11 || !Number(value)) {
    return callback(new Error('手机号为11位的数字'))
  }
  callback()
}
// 校验密码和再次输入，暂时不用
// function checkPassword(rule: any, value: any, callback: any,) {

// }
// function checkRePassword(rule: any, value: any, callback: any,) {

// }

//发送验证码
function sendYzm() {
  //清空计时器
  if (userForm.timer) {
    clearInterval(userForm.timer)
  }
  axios.get("/sendYzm?userPhone=" + userForm.userPhone).then((res: any) => {
    console.log(res);
    if (res.code == 200) {
      ElMessage({
        message: res.message,
        type: "success"
      })
    } else {
      ElMessage({
        message: res.message,
        type: "error"
      })
    }
    dtimer()
  })
}

// 获取验证码
async function getCode(formList: FormInstance | undefined) {
  if (reClick.value) {
    ElMessage({
      type: 'error',
      message: 'xx秒后再试'
    })
    return
  }
  // 1验证手机号是否输入正确
  if (!formList) return
  formList.validate((ifPass) => {
    // console.log(ifPass)
    if (ifPass) {
      // alert('ifPass为真')
      // 2给服务器请求，获取验证码
      sendYzm()

      // 3获取成功后进入倒计时
      reClick.value = true
      codeBtnText.value = '已发送'
      // 调用倒计时方法
      dtimer()
    } else {
      ElMessage({
        type: 'error',
        message: '输入的手机号有误'
      })
    }
  })

}

//计时器方法
function dtimer() {
  userForm.timer = setInterval(function () {
    if (userForm.time > 0) {
      userForm.disableclick = true    //它控制发送验证码按钮是否显示
      userForm.time = userForm.time - 1
    } else {
      userForm.disableclick = false
      userForm.timer = null
    }
  }, 1000)
}
// 修改密码
function confirmChange() {
  // alert('点了修改密码')
  // router.replace({ name: 'login' })

  //校验验证码是否正确,userForm.userCaptcha值请求给后端验证
  if ('后端返回值') {
    ElMessage({
      type: 'error',
      message: '验证码输入错误'
    })
    return
  }
  if (userForm.rePassword !== userForm.password) {
    ElMessage({
      type: 'error',
      message: '两次密码输入不一致'
    })
    return
  }

  // 请求后端修改数据

  // 修改成功后返回登录页面
  /* 
      ElMessage({
      type: 'success',
      message: '修改成功'
    })

    router.replace({ name: 'login' })
  */

  router.replace({ name: 'login' })
}

</script>

<style scoped lang="scss">
.login {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('@/assets/image/backprint.jpg') no-repeat;
  background-size: 60% 100%;
  background-position: center;

  .top {
    position: relative;
    top: 0;
    height: 40px;
    width: 100%;
    background: #7b1e17;
  }

  .mask {
    width: 100%;
    height: calc(100vh - 40px);
    background: rgba($color: #fdfdfd, $alpha: 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.title {
  text-align: center;
  color: #000000;
  font-family: "楷体", "KaiTi", serif;
}

.btn-getCode {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  left: 15px;
}

.login-form {
  position: relative;
  top: 100px;
  border-radius: 15px;
  background: rgba(146, 78, 71, 0.6);
  width: 300px;
  height: 450px;
  padding: 25px 25px 5px 25px;

  :deep(.el-form-item__label) {
    color: white;
  }

  :deep(.el-input__wrapper) {
    border-radius: 50px;
  }

  .forgetPassword {
    float: right;
    color: rgba($color: #fdfbfb, $alpha: 0.7);
  }

  .submit {
    margin-top: 80px;
    text-align: center;

    .btn_login {
      background-color: #7b1e17;
      border-color: #7b1e17;
      color: white;
      width: 60%;
      height: 70px;
      font-size: 20px;
      border-radius: 50px;
    }
  }
}
</style>