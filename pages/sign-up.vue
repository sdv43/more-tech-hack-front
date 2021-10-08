<template>
  <v-container fluid class='fill-height'>
    <v-row justify='center'>
      <v-col class='ma-8'>
        <v-alert v-show='error' type='error'>
          {{ error }}
        </v-alert>

        <v-text-field v-model='name' outlined label='Имя'/>

        <v-text-field v-model='email' outlined label='Email'/>

        <v-text-field v-model='password' type='password' outlined label='Пароль'/>

        <v-btn block x-large color='primary' @click='signUp'>Создать аккаунт</v-btn>

        <div class='text-center ma-4'>
          <NuxtLink to='/sign-in'>
            У меня есть аккаунт
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'guest',

  data() {
    return {
      name: null,
      email: null,
      password: null,
      error: null
    }
  },

  methods: {
    signUp() {
      try {
        // todo make request to backend and save returned token

        throw new Error('signUp() method not implemented')

      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>


