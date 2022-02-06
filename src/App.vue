<template>
  <MainHeader></MainHeader>
<!--  <router-view/>-->

  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>



import MainHeader from "@/components/Headers/MainHeader";
export default {
  components: {MainHeader},

}
</script>