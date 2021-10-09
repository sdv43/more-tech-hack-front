<template>
  <v-container class='d-flex justify-end pa-4'>
    <img src='@/assets/icons/vtb-2.svg' :class='$style.logo'>
  </v-container>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style lang='scss' module>
.logo {
  height: auto;
  width: 48px;
}
</style>
