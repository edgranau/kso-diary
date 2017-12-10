<template>
  <div class="layout-padding card-list row items-start">
    <q-card>
      <q-card-title>
        Add new seizure activity
      </q-card-title>
      <!-- <q-card-separator /> -->
      <q-card-main>
        <q-field label="Type">
          <seizureTypes />
        </q-field>
        <q-field label="Date">
          <q-datetime type="datetime" v-model="dateTime" />
        </q-field>
        <q-field label="Duration">
          <q-input v-model="duration" type="text"/>
        </q-field>
        <q-field label="Cluster">
          <q-radio v-model="cluster" val="yes" left-label label="Yes" />
          <q-radio v-model="cluster" val="no" left-label label="No" />
        </q-field>
        <q-field label="Medication">
          <q-radio v-model="medication" val="yes" left-label label="Yes" />
          <q-radio v-model="medication" val="no" left-label label="No" />
        </q-field>
        <q-field label="Notes">
          <q-input v-model="notes" type="textarea" :max-height="100" :min-rows="2"/>
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
import SeizureTypes from 'src/components/SeizureTypes'
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
    QRadio,
    Toast,
    SeizureTypes
  },
  data () {
    return {
      type: undefined,
      duration: undefined,
      dateTime: new Date(),
      cluster: undefined,
      medication: undefined,
      notes: undefined
    }
  },
  validations: {
    type: required,
    duration: required,
    dateTime: required,
    cluster: required,
    medication: required
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
