<template>
  <div style="width: 100%;height: 40px;background-color: #880b0b;"></div>
  <div class="user">
    <div class="mask">
      <!-- 个人信息 -->
      <div class="userInfo-box">
        <div class="box-row-1">
          <span>·个人信息</span>
          <span style="color: #880b0b;">..........................................</span>
        </div>
        <div class="box-row-2">
          <div class="user-img">
            <ElImage />
          </div>
          <div class="user-info" style="">
            <div>·姓名：{{ }};</div>
            <div>·性别：{{ }};</div>
            <div>·联系方式:{{ }};</div>
            <div>·邮箱：{{ }};</div>
          </div>
        </div>
        <div class="box-row-3">..........................................</div>
      </div>
      <!-- 个人简介 -->
      <div class="userIntroduce-box">
        <div class="box-row-4">·个人简介</div>
        <div class="box-row-5">
          这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介这里是个人简介
        </div>
        <div class="box-row-6">
          <span style="color: #880b0b;">..........................................</span>
        </div>
      </div>
      <!-- 功能 -->
      <div class="user-function">
        <div class="function-item">
          <div class="function-icon"></div>
          <span>我的收藏</span>
        </div>
        <div class="function-item">
          <div class="function-icon"></div>
          <span>订单</span>
        </div>
        <div class="function-item">
          <div class="function-icon"></div>
          <span>志愿证书</span>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script lang='ts' setup name='User'>
import router from '@/router';
import { onMounted } from 'vue';
// interface
// data
// function
// 获取个人信息
function getUserInfo() {

}
// other
onMounted(() => {
  // 进入页面之前校验用户信息
  /* 登录校验有多种方式，后续进行选择 */
  console.log(localStorage.getItem('userInfo'))
  // 如果没登录
  // if (!localStorage.getItem('userInfo')) {
  if (localStorage.getItem('userInfo')) {
    router.replace({ name: 'login' })
    return
  }
  // 已经登录调用获取信息接口（或者直接使用本地信息？）
  getUserInfo()
})
</script>
 
<style scoped lang="scss">
.user {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('@/assets/image/backprint.jpg') no-repeat;
  background-size: 60% 100%;
  background-position: center;

  .mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;


    .userInfo-box {
      width: 60%;
      height: 40%;
      font-family: 华文行楷;
      font-size: 3em;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;

      .box-row-1 {
        // border: 1px solid red;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .box-row-2 {
        width: 100%;
        height: 80%;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        .user-img {
          width: 25%;
          height: 100%;
          background-color: #fff;
          border-radius: 15px;
        }

        .user-info {
          width: 50%;
          // font-size: 2rem;
        }
      }

      .box-row-3 {
        color: #880b0b;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .userIntroduce-box {
      width: 60%;
      height: 40%;
      font-family: 华文行楷;
      font-size: 3em;
      color: #000;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      padding-top: 20px;


      .box-row-4 {
        width: 100%;
      }

      .box-row-5 {
        // border: 1px solid red;
        width: 80%;
        height: 50%;
        font-size: 30px;
        margin-top: 20px;
        text-indent: 2em;
      }

      .box-row-6 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }

    .user-function {
      // border: 1px solid red;
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-bottom: 50px;

      .function-item {
        // border: 1px solid #fff;
        cursor: pointer;
        width: 30%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 华文行楷;
        font-size: 2em;
        color: #000;

        .function-icon{
          border: 1px solid #fff;
          width: 120px;
          height: 120px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
 