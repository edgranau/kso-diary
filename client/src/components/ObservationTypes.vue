<template>
  <q-select chips v-model="type" :options="options" />
</template>

<script>
import {
  QSelect
} from 'quasar'
export default {
  name: 'observationTypes',
  components: {
    QSelect
  },
  data () {
    return {
      type: '',
      options: [
        {
          label: 'Ratio change',
          value: 'ratio',
          icon: 'fa-star'
        },
        {
          label: 'Drug',
          value: 'drug',
          icon: 'fa-circle'
        },
        {
          label: 'General',
          value: 'general',
          icon: 'fa-square'
        }
      ]
    }
  }
}
</script>

<style>

</style>
