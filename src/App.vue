<template>
  <div class="container-fluid">
    <app-header
    ></app-header>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import appHeader from "./components/header";
export default {
  components: {
    appHeader
  }
};
</script>

<style>
.fadeIn,
.fadeOut {
  animation-duration: 0.5s;
}
</style>
