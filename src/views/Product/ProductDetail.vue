<template>
  <Carousel />
  <div class="product">
    <div class="product-content-box">
      <div class="product-introduce">
        <div class="introduce-img">
          <ElCarousel style="height: 100%;">
            <ElCarouselItem v-for="item in 4" :key="item"></ElCarouselItem>
          </ElCarousel>
        </div>
        <div class="introduce-text">
          <span style="font-size: 3em;color: #000;">价格0.00</span>
          <span style="width:100%;font-size: 2em;color: #000;">商品简介</span>
          <p style="text-decoration-line:underline;font-size: 1.5em;text-indent: 2em;word-break: break-all;">
            ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
        </div>
      </div>
      <div class="function">
        <span class="function-item" @click="">点赞</span>
        <span class="function-item" @click="">评论</span>
        <span class="function-item" @click="">收藏</span>
        <span class="function-item" @click="">联系客服</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ProductDetail">
import Carousel from "@/components/Carousel.vue"
import { onMounted } from "vue";
import { ElCarousel, ElCarouselItem } from 'element-plus'
// interface
// data
// function
// 获取产品详情
function getProductDetail() {

}
// 查看详情

// other
onMounted(() => {
  getProductDetail()
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

  .product-content-box {
    width: 80%;
    height: 90%;
    background-color: rgba($color: rgb(113, 10, 10), $alpha: 0.6);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    // justify-content: space-evenly;
    // align-items: center;
    padding: 10px;


    .product-introduce {
      // border: 1px solid aqua;
      width: 100%;
      height: 40%;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;


      .introduce-img {
        border: 1px solid white;
        width: 40%;
        // height: 50%;
      }

      .introduce-text {
        // border: 1px solid blue;
        width: 60%;
        display: flex;
        flex-direction: column;
        // flex-wrap: wrap;
      }
    }

    .function {
      width: 100%;
      margin-top: 60px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 1.5em;
      color: #fff;

      .function-item {
        padding: 0 20px;
        cursor: pointer;
      }
    }
  }
}
</style>