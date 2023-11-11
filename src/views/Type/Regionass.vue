<template>
  <Carousel />
  <div class="regionass-body">
    <div class="regionass-content-box">
      <div class="title-box">
        <div class="title-text">地区筛选</div>
        <div style="display: flex;flex-direction: row;justify-content: space-evenly;">
          <ElSelect v-model="pValue" value-key="id" @focus="clickSelect" @change="provinceSelected">
            <ElOption v-for="item in list.provinceList" :key="item.id" :label="item.name" :value="item" />
          </ElSelect>
          <ElSelect v-model="cValue" style="margin-left: 20px;">
            <ElOption v-for="item in list.cityLIst" :key="item.id" :value="item.cName" />
          </ElSelect>
        </div>
      </div>
      <div class="content-display">
        <div class="content-item" v-for="item in 6" :key="item">
          <img src="src/assets/image/logo.jpg" alt="加载失败">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
 
<script lang='ts' setup name='Regionass'>
import Carousel from '@/components/Carousel.vue';
import axios from '@/util/http'
import { ElMessage, ElOption, ElSelect } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
// 数据
const pValue = ref()
const cValue = ref()
let list = reactive({
  provinceList: [{
    name: '--请选择--',
    id: '00001',
    city: [{
      cName: '--请选择--',
      id: '0-0'
    }]
  }],
  cityLIst: [{
    cName: '--请选择--',
    id: '0-0'
  }]
})

// 监听，计算属性等操作

// 生命周期
onMounted(() => {
  // 调用获取地区列表方法
  getRegionList()

})

// 方法声明
// 获取地区选择列表
function getRegionList() {
  // 请求后端获取列表
  // 接口随便造的，后续再改动
  axios.get("/area/regionList").then((res: any) => {
    if (res.code == 200) {
      // 请求成功赋值
      list.provinceList = list.provinceList.concat(res.data)
      console.log("regionList的值", list.provinceList)
    }
  }).catch((err: any) => {
    ElMessage({
      type: 'error',
      message: err.msg
    })
  })
}
// 点了选择框
function clickSelect() {
  cValue.value = '--请选择--'
  list.cityLIst = [{
    cName: '--请选择--',
    id: '0-0'
  }]
}
// 选择省份之后
function provinceSelected(item: any) {
  console.log(item)
  pValue.value = item.name
  list.cityLIst = item.city
}

</script>
 
<style scoped lang="scss">
img {
  width: 100%;
  height: 80%;
}

.regionass-body {
  // border: 3px solid green;
  width: 100vw;
  height: 100vh;
  background: url(/src/assets/image/back.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .regionass-content-box {
    width: 80%;
    background-color: rgba($color: rgb(153, 6, 6), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 30px;


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



    .content-display {
      // border: 1px solid blue;
      width: 90%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: 40px;
      padding: 20px;


      .content-item {
        // border: 1px solid green;
        width: 30%;
        height: 250px;
        margin-top: 50px;
        font-size: 1.5em;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
 