<template>
  <q-layout ref='layout' view='hHh LpR fFf' :reveal='true'>
    <q-toolbar slot='header'>
      <q-btn flat @click="go('home')">
        <q-icon name="home" />
      </q-btn>
      <q-toolbar-title>
        Epilepsy KSO Diary
      </q-toolbar-title>
      <q-btn flat @click="go('user')">
        <q-icon name="person" />
      </q-btn>
    </q-toolbar>
    <router-view />
    <q-fab class="fixed" color="secondary" style="bottom: 68px; right: 18px" icon="add circle outline" direction="left">
      <q-fab-action color="primary" icon="touch app" @click="go('keto')"/>
      <q-fab-action color="primary" icon="accessibility" @click="go('seizures')"/>
      <q-fab-action color="primary" icon="note" @click="go('observations')"/>
    </q-fab>
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
  QFab,
  QFabAction,
  QFixedPosition,
  QIcon,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'
export default {
  name: 'index-layout',
  components: {
    QBtn,
    QFab,
    QFabAction,
    QFixedPosition,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle
  },
  data () {
    return {}
  },
  methods: {
    go (route) {
      this.$router.replace(route)
    }
  }
}
</script>

<style>

</style>
