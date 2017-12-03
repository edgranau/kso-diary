<template>
  <div class="layout-padding card-list row items-start">
    <q-card inline v-for="(value, key) in payload" :key="key">
      <q-card-title>
        <span>{{ key }}</span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-list>
          <q-item>
            <q-item-side>
              <q-item-tile color="yellow" icon="fa-sun-o" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>{{ payload[key]['keto']['am']['value'] }}</q-item-tile>
            </q-item-main>
          </q-item>
          <!-- <q-collapsible icon="fa-bolt" label="Seizures">
            <q-item>
              <q-item-side>
                <q-item-tile color="secondary" icon="fa-bolt" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Absence</q-item-tile>
                <q-item-tile sublabel>5sec, no cluster, no medication</q-item-tile>
                <q-item-tile sublabel>no notes</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="secondary" icon="fa-bolt" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Absence</q-item-tile>
                <q-item-tile sublabel>5sec, no cluster, no medication</q-item-tile>
                <q-item-tile sublabel>no notes</q-item-tile>
              </q-item-main>
            </q-item>
          </q-collapsible> -->
          <q-item link @click="openModal(key)">
            <q-item-main inset>
              <q-chip v-if="hasSeizures(key)" icon="fa-bolt" color="secondary">
                {{ payload[key]['seizures'].length }}
              </q-chip>
              <q-chip v-if="hasObservations(key)" icon="fa-comment" color="tertiary">
                {{ payload[key]['observations'].length }}
              </q-chip>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side>
              <q-item-tile color="indigo" icon="fa-moon-o" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>{{ payload[key]['keto']['pm']['value'] }}</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
    <q-modal ref="DayDetailModal" >
      <div class="layout-padding card-list row items-start">
        <q-card>
          <q-card-title>
            <span>{{ modalData.date }}</span>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-list>
              <q-item>
                <q-item-side>
                  <q-item-tile color="yellow" icon="fa-sun-o" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{ modalData.amValue }}</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item-separator inset />
              <q-list-header>
                Seizures
              </q-list-header>
              <q-item v-for="(seizure, key) in modalData.seizures" :key="key">
                <q-item-side>
                  <q-item-tile color="secondary" icon="fa-bolt" />
                </q-item-side>
                <q-item-main sublabel-lines=5>
                  <q-item-tile label>{{ seizure.type }} @ {{ seizure.time }}</q-item-tile>
                  <q-item-tile sublabel>{{ seizureDetails(seizure) }}</q-item-tile>
                  <q-item-tile sublabel>{{ seizure.notes }}</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item-separator inset />
              <q-list-header>
                Observations
              </q-list-header>
              <q-item v-for="(observation, key) in modalData.observations" :key="key">
                <q-item-side>
                  <q-item-tile color="tertiary" icon="fa-comment" />
                </q-item-side>
                <q-item-main sublabel-lines=5>
                  <q-item-tile label>{{ observation.title }} @ {{ observation.time }}</q-item-tile>
                  <q-item-tile sublabel>{{ observation.details }}</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item-separator inset />
              <q-item>
                <q-item-side>
                  <q-item-tile color="indigo" icon="fa-moon-o" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{ modalData.pmValue }}</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-card-main>
          <q-card-actions>
            <q-btn color="primary" @click="closeModal()">Close</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  QBtn,
  QCard,
  QCardActions,
  QCardMain,
  QCardSeparator,
  QCardTitle,
  QChip,
  QCollapsible,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemTile,
  QItemMain,
  QModal,
  QModalLayout
} from 'quasar'
export default {
  name: 'daySummary',
  props: {
    date: String,
    amValue: String,
    pmValue: String
  },
  components: {
    QBtn,
    QCard,
    QCardActions,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QChip,
    QCollapsible,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemTile,
    QItemMain,
    QModal,
    QModalLayout
  },
  data () {
    return {
      modalData: {
        date: '',
        amValue: 0,
        pmValue: 0,
        seizures: [],
        observations: []
      }
    }
  },
  computed: {
    ...mapState({
      payload (state) {
        return state.entities.data
      }
    })
  },
  methods: {
    ...mapActions([
      'loadData'
    ]),
    hasObservations (key) {
      return (this.payload[key]['observations'].length > 0)
    },
    hasSeizures (key) {
      return (this.payload[key]['seizures'].length > 0)
    },
    openModal (key) {
      this.modalData.date = key
      this.modalData.amValue = this.payload[key]['keto']['am']['value']
      this.modalData.pmValue = this.payload[key]['keto']['pm']['value']
      this.modalData.seizures = this.payload[key]['seizures']
      this.modalData.observations = this.payload[key]['observations']
      this.$refs.DayDetailModal.open()
    },
    closeModal () {
      this.modalData.date = ''
      this.modalData.amValue = 0
      this.modalData.pmValue = 0
      this.modalData.seizures = []
      this.modalData.observations = []
      this.$refs.DayDetailModal.close()
    },
    seizureDetails (seizure) {
      return `${seizure.duration}, ${seizure.cluster}, ${seizure.medication}`
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.card-list
  .q-card
    width 400px
    .q-card-main
      min-height 178px
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
.kso-col-1
  width 165px
  flex: 0 0 14%
@media (max-width $breakpoint-xs-max)
  .kso-col-1
    width 359px
</style>
