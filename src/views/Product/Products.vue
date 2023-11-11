<template>
  <Carousel />
  <div class="product">
    <div class="product-content-box">
      <div class="product-item" v-for="item in 6" :key="item" @click="toDetail">
        <el-image class="product-img" src="@/assets/img/01.jpg" :lazy="true" />
        <span class="product-title">XXX文创系列</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Product">
import Carousel from "@/components/Carousel.vue"
import { onMounted } from "vue";
import { ElImage } from 'element-plus'
import router from "@/router";
// interface
// data
// function
// 获取产品列表
function getProductList() {

}
// 查看详情
function toDetail() {
  router.push({ name: 'productDetail', query: { id: '001' } })
}

// other
onMounted(() => {
  getProductList()
})
</script>

<style lang="scss" scoped>
.product {
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
  // align-items: center;

  .product-content-box {
    width: 80%;
    height: 90%;
    background-color: rgba($color: rgb(113, 10, 10), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    .product-item {
      // border: 1px solid #fff;
      cursor: pointer;
      width: 30%;
      height: 35%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;


      .product-img {
        border: 1px solid #fff;
        width: 80%;
        height: 90%;
        border-radius: 20px;
      }

      .product-title {
        width: 100%;
        text-align: center;
        font-size: 1.5em;
        color: #fff;
      }
    }
  }
}
</style>