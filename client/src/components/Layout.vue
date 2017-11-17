<template>
  <q-layout ref='layout' view='hHh LpR fFf' :reveal='true'>
    <q-toolbar slot='header'>
      <q-toolbar-title>
        Epilepsy KSO Diary
      </q-toolbar-title>
    </q-toolbar>
    <router-view />
    <q-toolbar slot='footer'>
      <q-toolbar-title>
        <div id='copyright'>© 2017</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QIcon,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'
export default {
  name: 'index-layout',
  components: {
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
