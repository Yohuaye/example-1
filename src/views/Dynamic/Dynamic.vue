<template>
  <Carousel />
  <div class="dynamic">
    <el-scrollbar class="dynamic-content-box">
      <div class="dynamic-item" v-for="item in data.dynamicList" :key="item.id" @click="toDetail(item)">
        <span class="dynamic-title">{{ item.title }}</span>
        <span class="dynamic-user">{{ item.userName }} &nbsp; {{ item.createTime }} 发表于 {{ item.position }}</span>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
// import
import Carousel from "@/components/Carousel.vue"
import axios from "@/util/http.ts"
import roouter from '@/router'
import { onMounted, reactive } from 'vue'
import { ElScrollbar } from "element-plus"
// interface

// data
let data: any = reactive({
  dynamicList: []
})

// function
// 查询动态列表
function getDynamicList() {
  axios.get('/dynamic/dynamicList').then((res: any) => {
    // console.log(res.data)
    data.dynamicList = res.data
    // data.dynamicList = data.dynamicList.concat(res.data)
    // data.dynamicList = data.dynamicList.concat(res.data)
    // data.dynamicList = data.dynamicList.concat(res.data)
  })
}
// 跳转动态详情
function toDetail(item: any) {
  roouter.push({ name: 'dynamicDetail', query: { id: item.id } })
}

// other
onMounted(() => {
  getDynamicList()
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

  :deep(.el-scrollbar__wrap) {
    width: 100%;
  }

  .dynamic-content-box {
    width: 80%;
    height: 90%;
    background-color: rgba($color: rgb(153, 6, 6), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    // padding: 20px;


    .dynamic-item {
      // border: 1px solid aqua;
      width: 80%;
      color: #fff;
      margin-top: 25px;
      margin-left: 25px;


      .dynamic-title {
        cursor: pointer;
        font-size: 2em;

      }

      .dynamic-user {
        cursor: pointer;
        margin-left: 15px;
      }
    }
  }
}
</style>