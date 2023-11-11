<template>
  <Carousel />
  <div class="vol">
    <div class="vol-content-box">
      <div class="title-box">
        <div class="title-text">合作文旅项目志愿者招聘</div>
        <div style="display: flex;flex-direction: row;justify-content: center">
          <ElSelect v-model="position" style="width: 20%;" placeholder="地区" @change="changePosition">
            <ElOption v-for="item in list.position" :key="item.id" :value="item" />
          </ElSelect>
          <ElSelect v-model="date" style="width: 20%;margin-left: 20px;" placeholder="时间" @change="changeDate">
            <ElOption v-for="item in list.date" :key="item.id" :value="item" />
          </ElSelect>
        </div>
      </div>
      <el-scrollbar class="content-display-box">
        <div class="vol-item" v-for="item in volList" :key="item">
          XXXX年XX月XX日 XX部门 XXXXXXXXX志愿者招募
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts" name="Vol">
import Carousel from "@/components/Carousel.vue"
import { ref, reactive, onMounted } from 'vue'
import { ElSelect, ElOption, ElScrollbar } from "element-plus";
// interface
// data
let position = ref()
let date = ref()
let list: any = reactive({
  position: [],
  date: [],
})
let volList = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

// function
// 获取志愿者信息列表
function getVolList() { }
// 获取地区信息
function getPostition() { }
// 获取日期信息
function getDate() { }
//更改了选项
function changePosition() {

}
// 改了时间
function changeDate() {

}

// other
onMounted(() => {
  getVolList()
  getPostition()
  getDate()
})
</script>

<style lang="scss" scoped>
.vol {
  width: 100%;
  height: 100%;
  background: url(/src/assets/image/back.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  // align-items: center;

  .vol-content-box {
    width: 80%;
    height: 90%;
    background-color: rgba($color: rgb(84, 6, 6), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    .title-box {
      // border: 1px solid black;
      position: relative;
      top: 20px;
      width: 100%;
      // height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;

      .title-text {
        font-family: 宋体;
        font-size: 2em;
        color: #fff;
        margin-bottom: 10px;
      }

    }

    .content-display-box {
      // border: 1px solid white;
      width: 90%;
      height: 70%;
      background-color: rgba($color: #e64343, $alpha: 0.5);
      position: relative;
      top: 70px;

      .vol-item {
        // border: 1px solid #fff;
        width: 80%;
        color: #fff;
        font-size: 1.5em;
        margin-top: 15px;
        margin-left: 10px;
      }
    }

  }
}
</style>