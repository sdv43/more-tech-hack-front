export default function({ store, redirect, route }) {
  console.log(
    'user',
    store.state.user,
    route
  )

  if (!store.state.user.token) {
    redirect('/sign-in')
  }
}
