<template>
  <v-container class='d-flex justify-center align-center fill-height'>
    <v-btn @click='$root.$emit("change-window", "main")'>
      вернуться назад
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'WindowStats'
}
</script>


