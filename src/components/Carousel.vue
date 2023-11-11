<template>
  <el-carousel :autoplay="false" height="445px">
    <el-carousel-item type="card" v-for="(item, index) in bannerList" :key="index">
      <div class="carousel" :style="{ 'background': `url(${item.bannerImage}) no-repeat center center cover` }">
        <div class="bg-color">
          <el-image :src="item.bannerImage" alt="index" style="object-fit: cover;" />
          <!-- <div class="text">你的文字内容</div> -->
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">

import { onMounted, reactive } from 'vue'
import axios from '@/util/http'

const bannerList:any = reactive([])
function getAllBanner() {
  axios.get("/banner/getAllBanners").then((res: any) => {
    // console.log('获取的banner图片为：', res);
    if (res.code == 200) {
      Object.assign(bannerList, res.data.banners)
      // console.log('获取的banner图片为：', bannerList);

    }
  }).catch((err: any) => {
    console.log('报错了', err)

  })
}

onMounted(() => {
  getAllBanner();
})
</script>

<style lang="scss" scoped>
.el-carousel {
  text-align: center;
}

.bg-color {
  background-color: #8b3841b8;
  height: 445px;
}

.el-image {
  width: 70%;
  height: 92%;
  position: absolute;
  left: 135px;
  top: 21px;
}
</style>
