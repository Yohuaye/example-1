<template>
  <div class="register">
    <div class="mask">
      <el-form hide-required-asterisk ref="ruleFormRef" label-position="right" :model="userForm" :rules="rules"
        class="register-form" label-width="150px" :size="formSize">
        <div class="form-title">
          用户注册
        </div>
        <!-- <el-form-item prop="userName" label="用户名">
          <el-input v-model="userForm.userName" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="用户名"
            :style="{ fontSize: '16px' }" />
        </el-form-item> -->
        <el-form-item prop="userName" label="姓名">
          <el-input v-model="userForm.userName" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="姓名"
            :style="{ fontSize: '16px' }" />
        </el-form-item>
        <el-form-item prop="userSex" label="性别">
          <!-- <el-input v-model="userForm.userSex" :prefix-icon="Avatar" size="large" auto-complete="off" placeholder="性别"
            :style="{ fontSize: '16px' }" /> -->
          <el-radio-group v-model="userForm.userSex">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="userForm.password" @input="userInput" type="password" :prefix-icon="Lock" size="large"
            auto-complete="off" placeholder="密码" :style="{ fontSize: '16px' }" />
        </el-form-item>
        <el-form-item prop="password" label="确认密码">
          <el-input v-model="userForm.confirmPassword" @input="userInput" type="password" :prefix-icon="Lock" size="large"
            auto-complete="off" placeholder="确认密码" :style="{ fontSize: '16px' }" />
        </el-form-item>
        <el-form-item prop="userPhone" label="联系电话">
          <el-input v-model="userForm.userPhone" type="phone" @input="userInput" :prefix-icon="Lock" size="large"
            auto-complete="off" placeholder="联系电话" :style="{ fontSize: '16px' }" />
        </el-form-item>
        <el-form-item prop="password" label="邮箱">
          <el-input v-model="userForm.userEmail" type="email" @input="userInput" :prefix-icon="Lock" size="large"
            auto-complete="off" placeholder="邮箱" :style="{ fontSize: '16px' }" />
        </el-form-item>
        <!-- <el-form-item prop="userAvatar" label="头像">
          <el-input v-model="userForm.userAvatar" :prefix-icon="Lock" size="large" auto-complete="off" placeholder="头像"
            :style="{ fontSize: '16px' }" />
        </el-form-item> -->
        <el-form-item class="user-introduce" prop="userBio" label="个人简介">
          <el-input class="input__user-intorduce" v-model="userForm.userBio" type="textarea" placeholder="个人简介" />
        </el-form-item>
        <div class="submit">
          <el-button size="large" color="#7b1e17" :dark="false" class="btn_register"
            @click="submitForm(ruleFormRef)">注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from '@/util/http'
import { ElMessage } from 'element-plus'
import { Avatar, Lock } from '@element-plus/icons-vue'
import router from '@/router'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const userForm = reactive({
  userName: "",
  userEmail: "",
  userPhone: "",
  userSex: "",
  password: "",
  confirmPassword: "",
  userCaptcha: "",        //验证码
  disableclick: false,    //控制发送验证码
  time: 60,               //倒计时时间
  timer: null,            //计时器
  inputValue: "",
  userBio: "",
})
// const activeName = ref('password')

const userInput = (value: any) => {
  // userForm.inputValue = value
  // 匹配用户名（4到12个字母、数字、下划线、短横线）
  const userNameRegex = /^[a-zA-Z0-9_-]{4,12}$/
  if (userNameRegex.test(userForm.userName)) {
    return
  }

  // 匹配邮箱地址
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  if (emailRegex.test(value)) {
    userForm.userEmail = value
  }

  // 匹配手机号（以1开头的10位数字）
  const phoneRegex = /^1[3456789]\d{9}$/
  if (phoneRegex.test(value)) {
    userForm.userPhone = value
  }
};


// 数据效验
const rules = reactive<FormRules>({
  inputValue: [
    { required: true, message: '请输入用户名/邮箱/手机号', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名/邮箱/手机号 长度范围是 3 至 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码至少是6位至15位', trigger: 'blur' }
  ],
  userPhone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { max: 11, message: '手机号必须输入11位数', trigger: 'blur' }
  ],
  userCaptcha: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 6, max: 10, message: '验证码必须输入6位数', trigger: 'blur' }
  ]
})
// 提交
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      userregister()
    } else {
      console.log('error submit!', fields)
    }
  })
}

var user = reactive({})
function userregister() {
  axios.post("/user/register", userForm).then((res: any) => {
    //成功提示
    if (res.code == 200) {
      user = res.data.user
      sessionStorage.setItem("user", JSON.stringify(user))
      ElMessage({
        message: res.message,
        type: 'success',
      })
      // 路由跳转
      router.push("/index")
    } else {
      ElMessage({
        message: res.message,
        type: 'error',
      })
    }
  })
}

</script>
  
<style scoped lang="scss">
.top {
  padding: 12px;
}

.el-menu--horizontal {
  align-items: center;
}

.el-menu,
.el-menu-item.is-active {
  border-bottom: none !important;
}

.el-menu--horizontal>.el-menu-item {
  height: 56px !important;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.register {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('@/assets/image/backprint.jpg') no-repeat;
  background-size: 60% 100%;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* .top {
    position: fixed;
    top: 0;
    height: 30px;
    width: 100%;
    background: #7b1e17;
  }
 */
  .mask {
    width: 80%;
    height: 100%;
    background: rgba($color: #fdfdfd, $alpha: 0.5);
    display: flex;
    // flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

  }
}

.title {
  margin: 0px auto 50px;
  text-align: center;
  font-size: 62px;
  font-family: 华文行楷;
  font-weight: 500;
}

.register-form {
  // position: absolute;
  border-radius: 20px;
  background-color: #7b1e17cc;
  width: 50%;
  height: 70%;
  padding: 60px 40px;
  margin-top: 10px;


  .form-title {
    width: 100%;
    text-align: center;
    font-family: 华文行楷;
    font-size: 3em;
    position: relative;
    top: -25px;
  }

  .user-introduce {
    display: flex;
    flex-direction: column;
    font-size: 1em;

    .input__user-intorduce {
      margin-top: 20px;
      width: 90%;

      :deep(.el-textarea__inner) {
        height: 150px;
        border-radius: 20px;
      }
    }
  }

  .submit {
    margin-top: 50px;
    // border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 70px;


    .btn_register {
      color: white;
      width: 46%;
      height: 70px;
      font-size: 27px;
      font-family: 华文行楷;
      text-align: center;
      border-radius: 50px;
    }
  }

  #register {
    margin-top: 138px;
  }

  .register-from-hengxi {
    width: 184%;
    height: 394px;
    background-color: #7b1e175e;
    position: inherit;
    left: -35px;
    top: 55px;
  }

  .hengxi-nei {
    width: 36%;
    position: inherit;
    top: 14px;
    left: 414px;
    text-align: center;

    h3 {
      font-size: 27px;
      color: #fdfbfbd6;
      font-family: 华文行楷;
      font-weight: 500;
      margin-bottom: 8px;
    }

    img {
      width: 80%;
    }

    .nei-account {
      span {
        font-size: 17px;
        color: #fdfbfbd6;
        font-family: 华文行楷;
        font-weight: 500;
      }

      .register {
        margin-top: 22px;

        .btn_register {
          width: 48%;
          height: 58px;
          font-size: 21px;
          font-family: 华文行楷;
          border-radius: 50px;
        }
      }
    }
  }
}

:deep(.el-form-item__content) {
  justify-content: center;
}

:deep(.el-form-item__label) {
  // color: #fdfbfbb3;
  // font-size: 17px;
  // font-family: 华文行楷;
  margin-top: 15px;
  color: #000;
  font-size: 2em;
  font-family: 华文行楷;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

:deep(.el-input__wrapper) {
  border-radius: 50px;
}

:deep(.el-form-item--default) {
  margin-bottom: 26px;
}

:deep(.el-tabs__item) {
  font-size: 18px !important;
  color: #fdfbfbde;
  font-weight: 700 !important;
  font-family: 华文行楷;
}

:deep(.el-radio__label) {
  font-family: 华文行楷;
  font-size: 2.5em;
  color: #000;
}

.el-link.is-underline:hover:after {
  border: none;
}

.el-link:hover,
:deep(.el-tabs__item.is-active),
:deep(.el-tabs__item:hover) {
  color: #c99692 !important;
}

:deep(.el-tabs__active-bar) {
  background-color: #c99692 !important;
}

:deep(.el-tabs__nav-wrap::after) {
  background-color: transparent;
}

.el-tab-pane {
  margin-top: 26px;
}
</style>