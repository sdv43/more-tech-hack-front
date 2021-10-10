<template>
  <v-container class='d-flex flex-column align-stretch fill-height'>
    <top-bar />

    <div class='flex-grow-1 d-flex flex-column justify-center pa-4'>
      <p class='text-h3'>
        Ура! Вы прошли игру до конца!
      </p>

      <p>
        Теперь пора переходить от игр к реальным делам с приложением
        <a href='https://www.vtb.ru/personal/investicii/' target='_blank'>«ВТБ Мои Инвестиции»</a>
      </p>
    </div>

    <div class='d-flex'>
      <v-btn x-large color='primary' class='ma-4 flex-grow-1' @click='start'>Хочу еще раз сыграть</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    start() {
      window.location.href="/welcome"
    },
  }
}
</script>

