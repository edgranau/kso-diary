<template>
  <q-select chips v-model="type" :options="options" />
</template>

<script>
import {
  QSelect
} from 'quasar'
export default {
  name: 'seizureTypes',
  components: {
    QSelect
  },
  data () {
    return {
      type: '',
      options: [
        {
          label: 'Absence',
          value: 'absence',
          icon: 'fa-star'
        },
        {
          label: 'Myclonic',
          value: 'myclonic',
          icon: 'fa-circle'
        },
        {
          label: 'Tonic-Clonic',
          value: 'tonic-clonic',
          icon: 'fa-square'
        },
        {
          label: 'Head drops',
          value: 'head-drops',
          icon: 'fa-close'
        }
      ]
    }
  }
}
</script>

<style>

</style>
