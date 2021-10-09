<template>
  <v-container class='fill-height d-flex flex-column align-stretch pb-8' :class='$style.root'>
    <top-bar />

    <v-card
      class='my-4 pa-4 flex-grow-1'
      elevation='2'
    >
      <v-container
        v-if='event'
        :class='$style.card'
        class='d-flex flex-column align-stretch'
      >
        <p>
          {{ event.text }}
        </p>

        <div v-if='event.controls' class='my-8'>
          <v-slider
            v-model='controls.value'
            label='Кол-во:'
            thumb-label="always"
            :min='event.controls.min'
            :max='event.controls.max'
          >
            <template #append>
              <v-text-field
                v-model="controls.value"
                hide-details
                single-line
                type="number"
                class="mt-0 pt-0"
                style="width: 30px"
              ></v-text-field>
            </template>
          </v-slider>
        </div>
      </v-container>

      <v-skeleton-loader v-else type='paragraph' />
    </v-card>

    <div
      v-touch='{
        up: () => $root.$emit("change-window", "stats")
      }'
    >
      <template v-if='event'>
        <div class='d-flex mb-4' :class='$style.actions'>
          <div
            v-for='btn in event.actions'
            :key='btn.text'
            class='flex-grow-1'
            :class='$style.action'
          >
            <v-btn
              block
              color='primary'
              :disabled='isActionsDisabled'
              @click='clickAction(btn)'
            >
              {{ btn.text }}
            </v-btn>
          </div>
        </div>

        <div class='d-flex'>
          <v-btn
            class='flex-grow-1'
            color='secondary'
            :disabled='isActionsDisabled'
          >
            Пропустить ход
          </v-btn>
        </div>
      </template>

      <v-skeleton-loader v-else type='actions' />
    </div>

  </v-container>
</template>

<script>
export default {
  name: 'WindowGame',

  data() {
    return {
      isActionsDisabled: false,
      event: null,
      controls: {
        value: 0
      }
    }
  },

  async mounted() {
    this.event = await this.pullEvent()
  },

  methods: {
    async clickAction(action) {
      try {
        this.isActionsDisabled = true
        await this.pushEventReaction(action)
        this.isActionsDisabled = false

        this.$root.$emit('update-status')

        this.event = null
        this.event = await this.pullEvent()
      } catch (e) {
        alert(e.message)
      }
    },

    pushEventReaction(action) {
      // try {
      //   let url
      //
      //   switch (action.text) {
      //     case 'понял':
      //       break
      //     case 'принять':
      //       url = '/api/event-ok'
      //       break
      //     case 'отклонить':
      //       url = '/api/event-cancel'
      //       break
      //     case 'продать':
      //       url = `/api/event-sell?value=${this.controls.value}`
      //       break
      //     case 'купить':
      //       url = `/api/event-buy?value=${this.controls.value}`
      //       break
      //     default:
      //       throw new Error('Unknown action')
      //   }
      //
      //   if (url) {
      //     await this.$axios.$get(url)
      //   }
      // } catch (e) {
      //   console.error(e)
      // }

      return new Promise(resolve => setTimeout(resolve, 1000))
    },

    pullEvent() {
      // try {
      //   return this.$axios.$get('/api/get-next-event')
      // } catch (e) {
      //   console.error(e)
      // }

      return new Promise(resolve => {
        setTimeout(() => resolve({
          text: 'Из новостей узнали что завтра будет пиздец',
          controls: {
            min: 10,
            max: 44,
          },
          actions: [
            {text: 'Жить дальше'},
            {text: 'Продать все'}
          ]
        }), 1000)
      })
    }
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
