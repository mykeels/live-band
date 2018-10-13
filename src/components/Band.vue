<template>
  <WsRelay>
    <template>
      <DrumKit></DrumKit>
      <Piano></Piano>
    </template>
  </WsRelay>
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
        activeInstrument: 'drumkit'
      }
    }
  }
</script>

<style>

</style>
