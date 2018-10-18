<template>
  <div v-show="isActive" id="p-wrapper">
    <ul>
      <li class="octave" :class="`octave-${index + 3} ${index == activeOctave && 'active'}`" v-for="(collection, index) in sounds" :key="index">
        <ul class="piano">
          <li v-for="(sound, soundIndex) in collection" :key="soundIndex">
            <div class="anchor" v-if="sound.key.length < 3" :class="{ active: sound.playing }"
              @mouseover="isMouseDown($event, () => playSound($event, sound))"
              @mousedown="playSound($event, sound)"
              v-ga="$ga.commands.trackClick.bind($ga, 'piano', sound.key)">
              {{ sound.key.toUpperCase() }}
            </div>
            <span v-if="sound.sharp" :class="{ active: keySounds[sound.sharp].playing }"
              @mouseover="isMouseDown($event, () => playSound($event, keySounds[sound.sharp]))"
              @mousedown="playSound($event, keySounds[sound.sharp])"
              v-ga="$ga.commands.trackClick.bind($ga, 'piano', keySounds[sound.sharp].key)">
              {{ keySounds[sound.sharp].key }}
            </span>
          </li>
        </ul>
      </li>
    </ul>

    <div v-for="(collection, index) in sounds" :key="index">
      <audio v-for="(sound, soundIndex) in collection" :key="soundIndex" :ref="sound.key" :src="sound.file()"></audio>
    </div>
  </div>
</template>

<script>
  function file() {
    return `./static/sounds/piano/${this.key}.mp3`
  }

  export default {
    props: {
      isActive: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        activeOctave: 1,
        blackKeyIndices: [ 2, 4, 7, 9, 11, 14, 16, 19, 21, 23 ],
        sounds: [
          [
            { key: 'Bb2', code: '8', playing: false, file },
            { key: 'A2', code: 'u', playing: false, file, sharp: 'Bb2' },
            { key: 'Ab2', code: '7', playing: false, file },
            { key: 'G2', code: 'y', playing: false, file, sharp: 'Ab2' },
            { key: 'Gb2', code: '6', playing: false, file },
            { key: 'F2', code: 't', playing: false, file, sharp: 'Gb2' },
            { key: 'E2', code: 'r', playing: false, file },
            { key: 'Eb2', code: '4', playing: false, file },
            { key: 'D2', code: 'e', playing: false, file, sharp: 'Eb2' },
            { key: 'Db2', code: '3', playing: false, file },
            { key: 'C2', code: 'w', playing: false, file, sharp: 'Db2' },
            { key: 'B1', code: 'q', playing: false, file },
            { key: 'Bb1', code: 'k', playing: false, file },
            { key: 'A1', code: 'm', playing: false, file, sharp: 'Bb1' },
            { key: 'Ab1', code: 'j', playing: false, file },
            { key: 'G1', code: 'n', playing: false, file, sharp: 'Ab1' },
            { key: 'Gb1', code: 'h', playing: false, file },
            { key: 'F1', code: 'b', playing: false, file, sharp: 'Gb1' },
            { key: 'E1', code: 'v', playing: false, file },
            { key: 'Eb1', code: 'f', playing: false, file },
            { key: 'D1', code: 'c', playing: false, file, sharp: 'Eb1' },
            { key: 'Db1', code: 'd', playing: false, file },
            { key: 'C1', code: 'x', playing: false, file, sharp: 'Db1' },
            { key: 'B0', code: 'z', playing: false, file },
          ],
          [
            { key: 'Bb4', code: '8', playing: false, file },
            { key: 'A4', code: 'u', playing: false, file, sharp: 'Bb4' },
            { key: 'Ab4', code: '7', playing: false, file },
            { key: 'G4', code: 'y', playing: false, file, sharp: 'Ab4' },
            { key: 'Gb4', code: '6', playing: false, file },
            { key: 'F4', code: 't', playing: false, file, sharp: 'Gb4' },
            { key: 'E4', code: 'r', playing: false, file },
            { key: 'Eb4', code: '4', playing: false, file },
            { key: 'D4', code: 'e', playing: false, file, sharp: 'Eb4' },
            { key: 'Db4', code: '3', playing: false, file },
            { key: 'C4', code: 'w', playing: false, file, sharp: 'Db4' },
            { key: 'B3', code: 'q', playing: false, file },
            { key: 'Bb3', code: 'k', playing: false, file },
            { key: 'A3', code: 'm', playing: false, file, sharp: 'Bb3' },
            { key: 'Ab3', code: 'j', playing: false, file },
            { key: 'G3', code: 'n', playing: false, file, sharp: 'Ab3' },
            { key: 'Gb3', code: 'h', playing: false, file },
            { key: 'F3', code: 'b', playing: false, file, sharp: 'Gb3' },
            { key: 'E3', code: 'v', playing: false, file },
            { key: 'Eb3', code: 'f', playing: false, file },
            { key: 'D3', code: 'c', playing: false, file, sharp: 'Eb3' },
            { key: 'Db3', code: 'd', playing: false, file },
            { key: 'C3', code: 'x', playing: false, file, sharp: 'Db3' },
            { key: 'B2', code: 'z', playing: false, file }
          ],
          [
            { key: 'Bb6', code: '8', playing: false, file },
            { key: 'A6', code: 'u', playing: false, file, sharp: 'Bb6' },
            { key: 'Ab6', code: '7', playing: false, file },
            { key: 'G6', code: 'y', playing: false, file, sharp: 'Ab6' },
            { key: 'Gb6', code: '6', playing: false, file },
            { key: 'F6', code: 't', playing: false, file, sharp: 'Gb6' },
            { key: 'E6', code: 'r', playing: false, file },
            { key: 'Eb6', code: '4', playing: false, file },
            { key: 'D6', code: 'e', playing: false, file, sharp: 'Eb6' },
            { key: 'Db6', code: '3', playing: false, file },
            { key: 'C6', code: 'w', playing: false, file, sharp: 'Db6' },
            { key: 'B5', code: 'q', playing: false, file },
            { key: 'Bb5', code: 'k', playing: false, file },
            { key: 'A5', code: 'm', playing: false, file, sharp: 'Bb5' },
            { key: 'Ab5', code: 'j', playing: false, file },
            { key: 'G5', code: 'n', playing: false, file, sharp: 'Ab5' },
            { key: 'Gb5', code: 'h', playing: false, file },
            { key: 'F5', code: 'b', playing: false, file, sharp: 'Gb5' },
            { key: 'E5', code: 'v', playing: false, file },
            { key: 'Eb5', code: 'f', playing: false, file },
            { key: 'D5', code: 'c', playing: false, file, sharp: 'Eb5' },
            { key: 'Db5', code: 'd', playing: false, file },
            { key: 'C5', code: 'x', playing: false, file, sharp: 'Db5' },
            { key: 'B4', code: 'z', playing: false, file }
          ],
          [
            { key: 'Bb7', code: '8', playing: false, file },
            { key: 'A7', code: 'u', playing: false, file, sharp: 'Bb7' },
            { key: 'Ab7', code: '7', playing: false, file },
            { key: 'G7', code: 'y', playing: false, file, sharp: 'Ab7' },
            { key: 'Gb7', code: '6', playing: false, file },
            { key: 'F7', code: 't', playing: false, file, sharp: 'Gb7' },
            { key: 'E7', code: 'r', playing: false, file },
            { key: 'Eb7', code: '4', playing: false, file },
            { key: 'D7', code: 'e', playing: false, file, sharp: 'Eb7' },
            { key: 'Db7', code: '3', playing: false, file },
            { key: 'C8', code: 'w', playing: false, file, sharp: 'Db7' },
            { key: 'B7', code: 'q', playing: false, file },
            { key: 'Bb7', code: 'k', playing: false, file },
            { key: 'A7', code: 'm', playing: false, file, sharp: 'Bb7' },
            { key: 'Ab7', code: 'j', playing: false, file },
            { key: 'G7', code: 'n', playing: false, file, sharp: 'Ab7' },
            { key: 'Gb7', code: 'h', playing: false, file },
            { key: 'F7', code: 'b', playing: false, file, sharp: 'Gb7' },
            { key: 'E7', code: 'v', playing: false, file },
            { key: 'Eb7', code: 'f', playing: false, file },
            { key: 'D7', code: 'c', playing: false, file, sharp: 'Eb7' },
            { key: 'Db7', code: 'd', playing: false, file },
            { key: 'C7', code: 'x', playing: false, file, sharp: 'Db7' },
            { key: 'B6', code: 'z', playing: false, file }
          ]
        ]
      }
    },
    computed: {
      keySounds () {
        return this.sounds.reduce((arr, collection) => {
          return arr.concat(collection)
        }, []).reduce((obj, sound) => {
          obj[sound.key] = sound;
          return obj;
        }, {})
      },
      blackKeys () {
        return this.blackKeyIndices.reduce((obj, index) => {
          obj[index] = index;
          return obj;
        }, {})
      }
    },
    methods: {
      isMouseDown (e, fn) {
        if (e.buttons) fn()
      },
      playSound(e, sound) {
        if (e && this.isActive) {
          const code = sound ? sound.code : e.key
          const sounds = this.sounds[this.activeOctave]
          sound = sound || sounds.find(s => s.code == code)
          const audio = (this.$refs[(sound || {}).key] || [])[0];
          if (!audio) return;
          if (sound) sound.playing = true;
          audio.currentTime = 0;
          audio.play();
          if (this.$parent) this.$parent.$emit('key:play', { instrument: 'piano', code: sound.key })
        }
      },
      playSoundWithoutEvent(key) {
        const sound = this.keySounds[key]
        if (!sound) return;
        const audio = (this.$refs[sound.key] || [])[0];
        if (!audio) return;
        sound.playing = true;
        audio.currentTime = 0;
        audio.play();
      },
      playBlackKey ($event, collection, index) {
        return this.playSound($event, collection[index + 1])
      },
      handleKey (e) {
        if (e) {
          switch (e.key) {
            case 'ArrowRight':
              this.activeOctave = Math.min(this.activeOctave + 1, 3);
              break;
            case 'ArrowLeft':
              this.activeOctave = Math.max(this.activeOctave - 1, 0);
              break;
            default:
              this.playSound(e)
          }
        }
      }
    },
    mounted () {
      document.addEventListener('keydown', this.handleKey.bind(this))
      if (this.$parent) {
        this.$parent.$on('ws:key:play', data => {
          if (data.instrument == 'piano') this.playSoundWithoutEvent(data.code)
        })
      }
      this.sounds.reduce((arr, collection) => arr.concat(collection), []).forEach(sound => {
        const audio = (this.$refs[sound.key] || [])[0];
        if (audio) {
          audio.onplay = function (e) {
            setTimeout(() => {
              sound.playing = false
            }, 300)
          }
          audio.onended = function () {
            sound.playing = false
          }
        }
      })
    }
  }
</script>

<style>
  /**
  * Pure CSS3 Piano by Taufik Nurrohman
  * On: 1 December 2011
  * URL: http://hompimpaalaihumgambreng.blogspot.com/
  * Note: This experiment is under the God Almighty License.
  * Please do not replace or remove the attribution above if you want to save/modify this project legally.
  * Good luck!
  */

  * {
    margin:0px;
    padding:0px;
    list-style:none;
  }

  :focus {
    outline:none !important;
  }

  body {
    background:#666;
    background:-webkit-radial-gradient(bottom left,cover,#999,#666);
    background:-moz-radial-gradient(bottom left,cover,#999,#666);
    background:-ms-radial-gradient(bottom left,cover,#999,#666);
    background:-o-radial-gradient(bottom left,cover,#999,#666);
    background:radial-gradient(bottom left,cover,#999,#666);
    height:500px;
  }

  li.octave {
    width: calc(25% - 5px);
    float: left;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    li.octave.octave-3, li.octave.octave-6 {
      display: none;
    }
    li.octave {
      width: calc(50% - 5px);
    }
  }

  a {
    color:indigo;
    text-decoration:none;
  }

  a:hover {
    text-decoration:underline;
  }

  /* Piano Wrapper */
  #p-wrapper {
    background:#000;
    position:relative;
    left:-20px;
    -webkit-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
    -moz-box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
    box-shadow:0 2px 0px #666,0 3px 0px #555,0 4px 0px #444,0 6px 6px #000,inset 0 -1px 1px rgba(255,255,255,0.5),inset 0 -4px 5px #000;
    border:2px solid #333;
    -webkit-border-radius:0 0 5px 5px;
    -moz-border-radius:0 0 5px 5px;
    border-radius:0 0 5px 5px;
    -webkit-animation:taufik 2s;
    -moz-animation:taufik 2s;
    animation:taufik 2s;
  }

  /* Tuts */
  ul.piano {
    display:block;
    border-top:2px solid #222;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ul.piano li {
    list-style:none;
    background:#aaa;
    width:100%;
    position:relative;
  }

  ul.piano li a,ul.piano li div.anchor {
    display:block;
    cursor: pointer;
    height:50px;
    background:#fff;
    background:-webkit-linear-gradient(-30deg,#f5f5f5,#fff);
    background:-moz-linear-gradient(-30deg,#f5f5f5,#fff);
    background:-ms-linear-gradient(-30deg,#f5f5f5,#fff);
    background:-o-linear-gradient(-30deg,#f5f5f5,#fff);
    background:linear-gradient(-30deg,#f5f5f5,#fff);
    border:1px solid #ccc;
    -webkit-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
    -moz-box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
    box-shadow:inset 0 1px 0px #fff,inset 0 -1px 0px #fff,inset 1px 0px 0px #fff,inset -1px 0px 0px #fff,0 4px 3px rgba(0,0,0,0.7);
    -webkit-border-radius:0 0 3px 3px;
    -moz-border-radius:0 0 3px 3px;
    border-radius:0 0 3px 3px;
    font-size: 18px;
    color: white;
    text-align: right;
  }

  li.octave.active ul.piano li div.anchor {
    color: #aaa;
  }

  ul.piano li div.anchor.active {
    -webkit-box-shadow:0 2px 2px rgba(0,0,0,0.4);
    -moz-box-shadow:0 2px 2px rgba(0,0,0,0.4);
    box-shadow:0 2px 2px rgba(0,0,0,0.4);
    position:relative;
    top:2px;
    background: linear-gradient(-330deg,#f5f5f5,#0af);
  }

  ul.piano li a:active,ul.piano li div.anchor:active {
    -webkit-box-shadow:0 2px 2px rgba(0,0,0,0.4);
    -moz-box-shadow:0 2px 2px rgba(0,0,0,0.4);
    box-shadow:0 2px 2px rgba(0,0,0,0.4);
    position:relative;
    top:2px;
    background: linear-gradient(-330deg,#f5f5f5,#0af);
  }

  ul.piano li a:active:before,ul.piano li div.anchor:active:before {
    content:"";
    width:0px;
    height:0px;
    border-width:216px 5px 0px;
    border-style:solid;
    border-color:transparent transparent transparent rgba(0,0,0,0.1);
    position:absolute;
    left:0px;
    top:0px;
  }

  ul.piano li a:active:after,ul.piano li div.anchor:active:after {
    content:"";
    width:0px;
    height:0px;
    border-width:216px 5px 0px;
    border-style:solid;
    border-color:transparent rgba(0,0,0,0.1) transparent transparent;
    position:absolute;
    right:0px;
    top:0px;
  }

  /* Black Tuts */
  ul.piano li span {
    position:absolute;
    left: 0px;
    top: -12px;
    height: 30px;
    width: 53%;
    background:#333;
    background:-webkit-linear-gradient(-20deg,#333,#000,#333);
    background:-moz-linear-gradient(-20deg,#333,#000,#333);
    background:-ms-linear-gradient(-20deg,#333,#000,#333);
    background:-o-linear-gradient(-20deg,#333,#000,#333);
    background:linear-gradient(-20deg,#333,#000,#333);
    z-index:10;
    border-width: 1px 7px 2px;
    border-style:solid;
    border-color:#666 #222 #111 #555;
    -webkit-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
    -moz-box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
    box-shadow:inset 0px -1px 2px rgba(255,255,255,0.4),0 2px 3px rgba(0,0,0,0.4);
    -webkit-border-radius:0 0 2px 2px;
    -moz-border-radius:0 0 2px 2px;
    border-radius:0 0 2px 2px;
    color: black;
  }

  ul.piano li span.active {
    border-right-width: 2px;
    background: linear-gradient(-330deg,#f5f5f5,#fa0);
    width: 54%;
    height: 28px;
  }

  ul.piano li span:active {
    border-right-width: 2px;
    -webkit-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
    -moz-box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
    box-shadow:inset 0px -1px 1px rgba(255,255,255,0.4),0 1px 0px rgba(0,0,0,0.8),0 2px 2px rgba(0,0,0,0.4),0 -1px 0px #000;
    background: linear-gradient(-330deg,#f5f5f5,#fa0);
    width: 54%;
    height: 28px;
  }

  li.octave.active ul.piano li span {
    color: white;
    text-align: right;
    font-size: 12px;
  }

  .clear {
    clear:both;
  }


  /* Animation */
  @-webkit-keyframes taufik {
    from {opacity:0;}
    to {opacity:1;}
  }
  @-moz-keyframes taufik {
    from {opacity:0;}
    to {opacity:1;}
  }
  @keyframes taufik {
    from {opacity:0;}
    to {opacity:1;}
  }
</style>
