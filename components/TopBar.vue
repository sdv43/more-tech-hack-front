<template>
  <v-container class='d-flex justify-space-between pa-4'>
    <div>
      Баланс: {{ $store.state.user.status.money }}
    </div>

    <img src='@/assets/icons/vtb-2.svg' :class='$style.logo'>
  </v-container>
</template>

<script>
export default {
  name: 'TopBar',

  mounted() {
    this.$root.$on('update-status', this.updateStatus)
  },

  methods: {
    updateStatus() {
      // try {
      //   this.$store.state.user.status = await this.$axios.$get('/api/status')
      // } catch (e) {
      //   console.error(e)
      // }

      this.$store.commit('setUserStatus', {
        money: this.$store.state.user.status.money+10
      })
    }
  }
}
</script>

<style lang='scss' module>
.logo {
  height: auto;
  width: 48px;
}
</style>
