<template>
  <div ref="drum" class="keys">
    <div v-for="sound in sounds" :key="'sound' + sound.key" @mousedown="playSound($event, sound)"
      :data-key="sound.code" class="key" :class="{ playing: sound.playing }">
      <kbd>{{sound.key}}</kbd>
      <span class="sound">{{sound.name}}</span>
    </div>
    <audio v-for="sound in sounds" :key="sound.key" :ref="sound.code" :src="sound.file"></audio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sounds: [
        { key: 'A', code: 65, playing: false, name: 'clap', file: './static/sounds/clap.wav' },
        { key: 'S', code: 83, playing: false, name: 'hihat', file: './static/sounds/hihat.wav' },
        { key: 'D', code: 68, playing: false, name: 'kick', file: './static/sounds/kick.wav' },
        { key: 'F', code: 70, playing: false, name: 'openhat', file: './static/sounds/openhat.wav' },
        { key: 'G', code: 71, playing: false, name: 'boom', file: './static/sounds/boom.wav' },
        { key: 'H', code: 72, playing: false, name: 'ride', file: './static/sounds/ride.wav' },
        { key: 'J', code: 74, playing: false, name: 'snare', file: './static/sounds/snare.wav' },
        { key: 'K', code: 75, playing: false, name: 'tom', file: './static/sounds/tom.wav' },
        { key: 'L', code: 76, playing: false, name: 'tink', file: './static/sounds/tink.wav' }
      ]
    }
  },
  methods: {
    playSound(e, sound) {
      if (e) {
        const code = sound ? sound.code : e.keyCode
        const audio = (this.$refs[code] || [])[0];
        const key = this.$refs.drum.querySelector(`div[data-key="${code}"]`);
        if (!audio) return;
        sound = sound || this.sounds.find(s => s.code == code)
        if (sound) sound.playing = true;
        audio.currentTime = 0;
        audio.play();
        if (this.$parent) this.$parent.$emit('key:play', sound)
      }
    },
    playSoundWithoutEvent (code) {
      const audio = (this.$refs[code] || [])[0];
      if (!audio) return;
      const sound = this.sounds.find(s => s.code == code)
      if (sound) sound.playing = true;
      audio.currentTime = 0;
      audio.play();
    }
  },
  mounted () {
    document.addEventListener('keydown', this.playSound.bind(this))
    if (this.$parent) {
      this.$parent.$on('ws:key:play', code => {
        this.playSoundWithoutEvent(code)
      })
    }
    this.sounds.forEach(sound => {
      const audio = (this.$refs[sound.code] || [])[0];
      if (audio) {
        audio.onended = function (e) {
          sound.playing = false
        }
      }
    })
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

@media (max-width:768px) {

}

.keys {
  min-height:100vh;
  align-items: center;
  justify-content: center;
  background: #333;
  cursor: pointer;
  padding-top: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.key {
  border:4px solid black;
  border-radius:5px;
  margin:0.4rem;
  font-size: 1.5rem;
  padding:1rem .5rem;
  transition:all .07s;
  width:35%;
  text-align: center;
  color:white;
  background:rgba(0,0,0,0.4);
  text-shadow:0 0 5px black;
  display: inline-block;
}

.playing {
  transform:scale(1.1);
  border-color:#ffc600;
  box-shadow: 0 0 10px #ffc600;
}

kbd {
  display: block;
  font-size: 40px;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color:#ffc600;
}
</style>
