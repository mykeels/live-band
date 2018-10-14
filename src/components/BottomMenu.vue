<template>
  <div class="menu">
    <div class="menu-item" :class="{ active: active == 'drumkit' }"
      @click="clickHandler('drumkit')">
      <kbd>Drums</kbd>
      <span class="sound">Drums</span>
    </div>
    <div class="menu-item" :class="{ active: active == 'piano' }"
      @click="clickHandler('piano')">
      <kbd>Piano</kbd>
      <span class="sound">Piano</span>
    </div>
    <!-- <div class="menu-item inactive" @click="clickHandler('jam')">
      <kbd>Jam</kbd>
      <span class="sound">Jam</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'BottomMenu',
  props: {
    clickHandler: {
      type: Function,
      default: () => ({})
    },
    inactiveItems: {
      type: Array,
      default: []
    },
    active: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .menu {
    align-items: center;
    justify-content: center;
    background: #333;
    padding-top: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .menu-item {
    border:4px solid black;
    border-radius:5px;
    margin:0.4rem;
    font-size: 1.5rem;
    padding:1rem .5rem;
    transition:all .07s;
    width:25%;
    text-align: center;
    color:white;
    background:rgba(0,0,0,0.4);
    text-shadow:0 0 5px black;
    display: inline-block;
    cursor: pointer;
  }

  .menu-item.greyed {
    opacity: 0.4;
  }

  .menu-item.active {
    border-color: white;
  }

  .playing {
    transform:scale(1.1);
    border-color:#ffc600;
    box-shadow: 0 0 10px #ffc600;
  }

  kbd {
    display: block;
    font-size: 30px;
  }

  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color:#ffc600;
  }
</style>
