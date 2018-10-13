<template>
  <div>
    <WsRelay>
      <template>
        <DrumKit :is-active="activeInstrument === 0"></DrumKit>
        <Piano :is-active="activeInstrument === 1"></Piano>
      </template>
    </WsRelay>
    <BottomMenu :inactive-items="[ instruments[activeInstrument] ]" :click-handler="switchView"></BottomMenu>
  </div>
</template>

<script>
  import DrumKit from './DrumKit'
  import Piano from './Piano'
  import WsRelay from './WsRelay'
  import BottomMenu from './BottomMenu'

  export default {
    components: {
      WsRelay,
      DrumKit,
      Piano,
      BottomMenu
    },
    data () {
      return {
        instruments: [ 'drumkit', 'piano' ],
        activeInstrument: 0
      }
    },
    methods: {
      switchView (action) {
        if (action == 'jam') {

        }
        else {
          this.activeInstrument = this.instruments.findIndex(item => item == action) || 0
        }
      }
    }
  }
</script>

<style>

</style>
