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
          icon: 'fa-adjust'
        },
        {
          label: 'Drug',
          value: 'drug',
          icon: 'fa-flask'
        },
        {
          label: 'General',
          value: 'general',
          icon: 'fa-comment'
        }
      ]
    }
  }
}
</script>

<style>

</style>
