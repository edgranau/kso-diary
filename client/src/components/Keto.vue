<template>
  <div class="layout-padding card-list row items-start">
    <q-card>
      <q-card-title>
        Add new ketone level reading
      </q-card-title>
      <!-- <q-card-separator /> -->
      <q-card-main>
        <q-field label="Type">
          <q-radio v-model="type" val="blood" color="red" left-label label="Blood" />
          <q-radio v-model="type" val="urine" color="amber" left-label label="Urine" />
        </q-field>
        <q-field label="Value">
          <q-input v-model="value" type="number" :step="0.1" :autofocus="true" v-mask="'#.#'"/>
        </q-field>
        <q-field label="Date">
          <q-datetime type="datetime" v-model="dateTime" />
        </q-field>
      </q-card-main>
      <!-- <q-card-separator /> -->
      <q-card-actions>
        <q-btn color="primary" @click="submit">Submit</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import {
  QBtn,
  QCard,
  QCardActions,
  QCardMain,
  QCardSeparator,
  QCardTitle,
  QDatetime,
  QField,
  QIcon,
  QInput,
  QOptionGroup,
  QRadio,
  Toast
} from 'quasar'
import {mask} from 'vue-the-mask'
export default {
  directives: {mask},
  components: {
    QBtn,
    QCard,
    QCardActions,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QDatetime,
    QField,
    QIcon,
    QInput,
    QOptionGroup,
    QRadio,
    Toast
  },
  data () {
    return {
      type: 'blood',
      value: undefined,
      dateTime: new Date(),
      ratio: undefined,
      ratioDateTime: new Date()
    }
  },
  validations: {
    type: required,
    value: required,
    dateTime: required,
    ratio: required,
    ratioDateTime: required
  },
  methods: {
    submit () {
      Toast.create('Please review fields again.')
    },
    submitRatio () {
      Toast.create('Please review ratio fields again.')
    }
  }
}
</script>

<style lang='stylus'>
.card-list
  .q-card
    width 400px
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%

</style>
