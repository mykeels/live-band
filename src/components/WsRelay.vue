<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {

    },
    computed: {

    },
    data () {
      return {
        ws: null
      }
    },
    components: {

    },
    methods: {
      connect () {
        this.ws = new WebSocket(process.env.WS_URL)

        this.ws.onerror = (err) => console.error(`ws:${ws.key}`, err)
        this.ws.onopen = () => {
          console.log('WebSocket connection opened')
        }
        this.ws.onclose = () => {
          console.error('WebSocket connection closed')
          setTimeout(this.connect, 2000)
        }
        this.ws.onmessage = (message) => {
          if (Number(message.data)) {
            this.$emit('ws:key:play', Number(message.data))
          }
        }

        return this.ws
      },
      send (data) {
        if (this.ws && this.ws.readyState == WebSocket.OPEN) {
          if (typeof(data) == 'object') this.ws.send(JSON.stringify(data))
          else this.ws.send(data)
        }
        else console.error('ws:send', 'could not send message', data)
      }
    },
    mounted () {
      this.connect()

      this.$on('key:play', (data) => {
        this.send(data.code)
      })
    }
  }
</script>

<style>

</style>
