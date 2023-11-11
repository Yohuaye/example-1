<template>
  <footer>
    <!-- <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <el-link v-for="(item, index) in footList" :key="index" :underline="false">{{ item.footName }}
          <br v-if="index === footList.length - 1" />
        </el-link>
      </el-col>
    </el-row> -->
    <div :class="['row-1', classType.type]">
      <span @click="toDetail('about')">关于我们</span>
      <span @click="toDetail('contact')">联系我们</span>
      <span @click="toDetail('terms')">服务协议</span>
      <span @click="toDetail('privacy')">隐私政策</span>
    </div>
    <div :class="['row-2', classType.type]">
      <span @click="toDetail('home')">智绘蓝图</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import axios from '@/util/http'
import { onMounted, reactive } from 'vue'
import router from '@/router';

let classType = defineProps(['type'])
const footList: any = reactive([])
// function
// 获取footer列表（暂时不需要）
function getAllFoot() {

  axios.get("/foot/getAllFoot").then(res => {
    // footList = res.data.footList;
    console.log('footer中拿到的值为', res);
    Object.assign(footList, res.data.footList)
  })
}
// 跳转对应页面
function toDetail(name: string) {
  router.replace({ name })
}

// other
onMounted(() => {
  // console.log(classType.type)
  getAllFoot()
})
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 15%;
}


span {
  cursor: pointer;
  padding: 0 20px;
}

.row-1 {
  color: #fff;
  font-size: 1.5em;
}

.row-2 {
  width: 100%;
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font-family: 华文行楷;
  font-size: 2.5em;
}

.type-1 {
  color: #000;
  font-family: 华文行楷;
  font-size: 2em;
}

.type-2 {}

// .el-row {
//   // margin: 0px !important;
//   width: 90%;
//   // border: 1px solid red;
//   text-align: center;
// }

// :deep(.el-link__inner) {
//   /*color: #5F524C;*/
//   color: #000;
//   font-size: 2em;
//   font-family: 华文行楷; //字体存疑
//   margin: 0px 4px;
// }
</style>