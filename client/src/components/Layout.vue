<template>
  <q-layout ref='layout' view='hHh LpR fFf' :reveal='false'>
    <q-toolbar slot='header'>
      <q-btn flat @click="go('home')">
        <q-icon name="fa-home" />
      </q-btn>
      <q-toolbar-title>
        Epilepsy KSO Diary
      </q-toolbar-title>
      <q-btn flat @click="go('user')">
        <q-icon name="fa-user" />
      </q-btn>
    </q-toolbar>
    <router-view />
    <q-fab class="fixed" color="secondary" style="bottom: 48px; right: 18px" icon="fa-plus" direction="left">
      <q-fab-action color="primary" icon="fa-user-md" @click="go('keto')"/>
      <q-fab-action color="primary" icon="fa-bolt" @click="go('seizures')"/>
      <q-fab-action color="primary" icon="fa-clipboard" @click="go('observations')"/>
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

<style lang="stylus">
.q-toolbar
  min-height: 0px
</style>
