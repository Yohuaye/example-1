<template>
  <Carousel />
  <div class="typeass-body">
    <div class="typeass-content-box">
      <div class="title-box">
        <div class="title-text">类型筛选</div>
        <ElSelect v-model="tValue" name="地域筛选" id="1" @change="changeType">
          <ElOption v-for="item in typeList.list" :key="item.id" :label="item.name" :value="item" />
        </ElSelect>
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
 
<script lang='ts' setup name='Typeass'>
import Carousel from '@/components/Carousel.vue';
import axios from '@/util/http'
import { ElMessage, ElOption, ElSelect } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

// 数据
let tValue = ref()
let typeList = reactive({
  list: [{ name: '--请选择--', id: '00001' }]
})

// 生命周期
onMounted(() => {
  // 调用获取地区列表方法
  getTypeList()
  console.log("typeList的值", typeList)
})

// 方法声明
// 获取地区选择列表
async function getTypeList() {
  // 请求后端获取列表
  // 接口随便造的，后续再改动
  await axios.get("/type/typeList").then((res: any) => {

    if (res.code == 200) {
      typeList.list = typeList.list.concat(res.data)
      // 请求成功赋值
      // console.log('newList', typeList.concat(newList))
    }
  }).catch((err: any) => {

    ElMessage({
      type: 'error',
      message: err.msg
    })
  })
}
function changeType(item: any) {
  tValue.value = item.name
}



</script>
 
<style scoped lang="scss">
img {
  width: 100%;
  height: 80%;
}

select {
  width: 100px;
  height: 30px;
  font-size: 1em;
  margin-top: 10px;
}

.typeass-body {
  width: 100%;
  height: 100vh;
  background: url(/src/assets/image/back.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .typeass-content-box {
    width: 80%;
    background-color: rgba($color: rgb(153, 6, 6), $alpha: 0.6);
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
      height: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title-text {
        font-family: 宋体;
        font-size: 2em;
        color: #fff;
        margin-bottom: 25px;
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
 