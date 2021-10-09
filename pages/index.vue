<template>
  <v-window :value='window' vertical class='fill-height' touchless>
    <v-window-item value='main' class='fill-height'>
      <CardAndButton @change-window='changeWindow($event)' />
    </v-window-item>

    <v-window-item value='stats' class='fill-height'>

      <v-container class='d-flex justify-center align-center fill-height'>
        <v-btn @click='window = "main"'>
          вернуться назад
        </v-btn>
      </v-container>

    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      window: 'main'
    }
  },

  methods: {
    changeWindow(window) {
      this.window = window
    }
  }
}
</script>
