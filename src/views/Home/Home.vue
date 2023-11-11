<template>
  <Carousel />
  <div class="home">
    <div class="notice">
      <div style="width: 60%;">
        <p>天坛<span>Temple of Heaven</span></p>
        <div style="width: 100%;margin-left: 20px;">
          <el-image src="/src/assets/image/1.png" style="width: 60%;" />
        </div>
      </div>
      <div style="width: 40%;font-size: 5em;">
        竞标公告<br />占位
      </div>
    </div>
    <div class="dynamic">
      <span class="dynamic-img">
        <el-image src="/src/assets/image/2.png" />
      </span>
      <div class="program-list">
        <div v-for="item in 4">
          {{ item }}、这是一个项目标题
        </div>
      </div>
      <div class="dynamic-introduce">
        动态详情
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import Carousel from "@/components/Carousel.vue"
import { ElImage } from "element-plus"
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('/src/assets/image/back.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .notice,
  .dynamic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 400px;
    background-color: #a52a2199;
  }

  .notice {
    p:nth-child(1) {
      margin: 0px;
      padding: 0.5rem 2.4rem 6px;
      color: white;
      font-size: 32px;
      font-family: Microsoft JhengHei UI Light;

      span {
        font-size: 20px;
        margin-left: 2px;
      }
    }

    p:nth-child(2) {
      text-align: center;
      font-size: 43px;
      font-family: Microsoft JhengHei UI Light;
    }
  }

  .dynamic {
    position: relative;
    top: -10%;

    .dynamic-img {
      padding: 10px;
      margin-left: 20px;
    }

    .program-list {
      width: 60%;
      font-size: 2em;
      text-decoration: solid;
    }

    .dynamic-introduce {
      width: 30%;
      height: 90%;
      background-color: #a41f1f;
      font-size: 3em;
    }
  }
}
</style>
