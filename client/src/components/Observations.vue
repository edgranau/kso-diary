<template>
  <div class="layout-padding card-list row items-start">
    <q-card>
      <q-card-title>
        Add new observation
      </q-card-title>
      <!-- <q-card-separator /> -->
      <q-card-main>
        <q-field label="Type">
          <q-input v-model="type" type="text"/>
        </q-field>
        <q-field label="Date">
          <q-datetime type="datetime" v-model="dateTime" />
        </q-field>
        <q-field label="title">
          <q-input v-model="title" type="text"/>
        </q-field>
        <q-field label="Details">
          <q-input v-model="details" type="text"/>
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
  Toast
} from 'quasar'
export default {
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
    Toast
  },
  data () {
    return {
      type: undefined,
      dateTime: new Date(),
      title: undefined,
      details: undefined
    }
  },
  validations: {
    type: required,
    dateTime: required,
    title: required
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
