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
          <div class="col-4">
            <div class="column">
              <div style="font-size: 18px">{{ payload[key]['keto']['am']['value'] }}</div>
              <div style="font-size: 18px">{{ payload[key]['keto']['pm']['value'] }}</div>
            </div>
          </div>
          <div class="col-8">
            <q-list v-if="hasObservations(key)">
              <q-item>
                <q-item-side>
                  <q-item-tile color="red" icon="note" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{ payload[key]['observations'][0]['title'] }}</q-item-tile>
                  <q-item-tile sublabel>{{ payload[key]['observations'][0]['details'] }}</q-item-tile>
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
