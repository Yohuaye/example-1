<script setup lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// console.log('页面的初始路径',router)

// 使用computed来动态计算showTops
const footerType = computed(() => {
  const path = router.currentRoute.value.path;
  let a = (path === "/login")
  let b = (path === "/register")
  let c = (path === "/forgetPassword")
  let d = (path === "/groupRegister")

  console.log('a || b || c || d', (a || b || c || d))

  if (a || b || c || d) {
    return 'type-1'
  } else {
    return 'type-2'
  }
})


</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer :type="footerType" />
</template>

<style lang="scss"></style>