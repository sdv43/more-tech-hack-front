<template>
  <v-container class='fill-height d-flex flex-column align-stretch pb-8' :class='$style.root'>
    <top-bar />

    <v-card
      class='my-4 pa-4 flex-grow-1'
      elevation='2'
    >
      <v-container
        :class='$style.card'
        class='d-flex flex-column align-stretch'
      >
        <p>
          {{ step.text }}
        </p>

        <div>
          controls
        </div>
      </v-container>
    </v-card>

    <div
      v-touch='{
        up: () => $root.$emit("change-window", "stats")
      }'
    >
      <div class='d-flex mb-4' :class='$style.actions'>
        <div
          v-for='btn in step.actions'
          :key='btn.text'
          class='flex-grow-1'
          :class='$style.action'
        >
          <v-btn
            color='primary'
            block
          >
            {{ btn.text }}
          </v-btn>
        </div>
      </div>

      <div class='d-flex'>
        <v-btn class='flex-grow-1' color='secondary'>Пропустить ход</v-btn>
      </div>
    </div>

  </v-container>
</template>

<script>
export default {
  name: 'WindowGame',

  data() {
    return {
      step: {
        text: 'Step text',
        actions: [
          { text: 'Взять кредит' },
          { text: 'Не брать' }
        ]
      }
    }
  },

  fetch(ctx) {
  }
}
</script>

<style lang='scss' module>
@import "~vuetify/src/styles/settings/variables";

.root {
  gap: 4 * $spacer;
}

.card {
  gap: 4 * $spacer;
}

.actions {
  gap: 4 * $spacer;
}

.action {
  box-sizing: border-box;
  flex-basis: 50%;
}
</style>
