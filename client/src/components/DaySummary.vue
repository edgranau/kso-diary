<template>
  <div class="layout-padding card-list row items-start">
    <!-- style="width: 210px" -->
    <q-card inline v-for="(value, key) in payload" :key="key">
      <q-card-title>
        <span slot="subtitle">{{ key }}</span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="row">
          <div class="col-12">
            <q-list>
              <q-item>
                <q-item-side>
                  <q-item-tile color="yellow" icon="fa-sun-o" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{ payload[key]['keto']['am']['value'] }}</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item v-if="hasObservations(key) || hasSeizures(key)">
                <q-item-side/>
                <q-item-main>
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
          </div>
        </div>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  QCard,
  QCardMain,
  QCardSeparator,
  QCardTitle,
  QChip,
  QList,
  QItem,
  QItemSide,
  QItemTile,
  QItemMain
} from 'quasar'
export default {
  name: 'daySummary',
  props: {
    date: String,
    amValue: String,
    pmValue: String
  },
  components: {
    QCard,
    QCardMain,
    QCardSeparator,
    QCardTitle,
    QChip,
    QList,
    QItem,
    QItemSide,
    QItemTile,
    QItemMain
  },
  data () {
    return {
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
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.card-list
  .q-card
    width 400px
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
