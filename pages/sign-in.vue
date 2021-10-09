<template>
  <v-container fluid class='fill-height'>
    <v-row justify='center'>
      <v-col class='ma-8'>
        <v-img :src='logoPath' max-width='180px' class='mx-auto mb-12' />

        <v-alert v-show='error' type='error'>
          {{ error }}
        </v-alert>

        <v-text-field v-model='email' outlined label='Email' />

        <v-text-field v-model='password' type='password' outlined label='Пароль' />

        <v-btn block x-large color='primary' @click='signIn'>Войти</v-btn>

        <div class='text-center ma-4'>
          <NuxtLink to='/sign-up'>
            Создать аккаунт
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '@/assets/images/logo.png'

export default {
  layout: 'guest',

  data() {
    return {
      email: null,
      password: null,
      error: null,
      logoPath: logo
    }
  },

  methods: {
    signIn() {
      try {
        if (this.email === 'demo' && this.password === 'demo') {
          this.$store.state.user.token = 'demo-token'
          localStorage.setItem('user-token', this.$store.state.user.token)
          this.$router.push('/welcome')
        } else {
          throw new Error('signIn() method not implemented')
        }
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>

