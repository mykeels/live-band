<template>
  <div v-touch:swipe="changeInstrument">
    <WsRelay>
      <template>
        <DrumKit v-show="activeInstrument === 0"></DrumKit>
        <Piano v-show="activeInstrument === 1"></Piano>
      </template>
    </WsRelay>
  </div>
</template>

<script>
  import DrumKit from './DrumKit'
  import Piano from './Piano'
  import WsRelay from './WsRelay'

  export default {
    components: {
      WsRelay,
      DrumKit,
      Piano
    },
    data () {
      return {
        instruments: [ 'drumkit', 'piano' ],
        activeInstrument: 0
      }
    },
    methods: {
      changeInstrument (e) {
        if (e == 'swipeup') {
          this.activeInstrument = (this.activeInstrument + 1) % this.instruments.length
        }
      }
    }
  }
</script>

<style>

</style>
