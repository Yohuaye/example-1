<template>
  <Carousel />
  <div class="dynamic">
    <div class="dynamic-content-box">
      <div class="dynamic-item">
        <!-- 标题 -->
        <span class="dynamic-title">这里是动态1张三</span>
        <!-- 人物时间地点 -->
        <span class=" dynamic-user"> 2023年11月5日 10:16:54 发表于 辽宁</span>
      </div>
      <!-- 正文 -->
      <div class="content-display-box" v-html="dynamicDetail.content"></div>
      <!-- 功能 -->
      <div class="content-function">
        <span class="function-item" @click="like">点赞</span>
        <span class="function-item" @click="comment">评论</span>
        <span class="function-item" @click="start">收藏</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import
import Carousel from "@/components/Carousel.vue"
import axios from "@/util/http.ts"
import { onMounted, reactive, } from 'vue'
import { useRoute } from 'vue-router'
// interface

// data
let params = useRoute().query
let dynamicDetail: any = reactive({
  title: '这里是标题',
  content: `<h3>这里是正文标题<h3><p>这里是正文内容第一段</p>`
})

// function
// 查询动态详情
function getDynamicDetail() {
  axios.get('/dynamic/dynamicDetail?id=' + params.id).then((res: any) => {
    // console.log(res.data)
    // 从数据库拿到对应id的具体内容
    Object.assign(dynamicDetail, res.data)
  })
}
// 点赞
function like() {
  alert('点击了点赞')
}
// 评论
function comment() {
  alert('点击了评论')
}
// 收藏
function start() {
  alert('点击了收藏')
}


// other
onMounted(() => {
  console.log(params)
  // getDynamicDetail()
})
</script>

<style lang="scss" scoped>
.dynamic {
  width: 100vw;
  height: 100%;
  background: url(/src/assets/image/back.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .dynamic-content-box {
    width: 80%;
    height: 90%;
    background-color: rgba($color: rgb(153, 6, 6), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .dynamic-item {
      // border: 1px solid aqua;
      width: 90%;
      color: #fff;
      margin-top: 15px;


      .dynamic-title {
        font-size: 2em;
      }

      .dynamic-user {
        margin-left: 15px;
      }
    }

    .content-display-box {
      // border: 1px solid white;
      width: 90%;
      height: 70%;
      // padding: 10px;
      background-color: #fff;
      margin-top: 20px;
    }

    .content-function {
      // border: 1px solid black;
      width: 90%;
      font-family: 华文行楷; //字体存疑
      font-size: 2em;
      color: #fff;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .function-item {
        // border: 1px solid #fff;
        // width: 15%;
        cursor: pointer; //鼠标变小手
        padding: 0 25px;
        text-align: center;
      }
    }
  }
}
</style>