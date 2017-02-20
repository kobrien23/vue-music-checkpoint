import Vue from 'vue'
import itunesService from './itunes-service'

let myTunes = []

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()


let myTunesService = {

  getTracks() { 
    return myTunes
  },
  addTrack(track) {
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
    Vue.set(myTunes, track.trackId, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },
  removeTrack(song) { 
      Vue.delete(myTunes, song.trackId, song)
    saveMytunes()
    // delete myTunes[song.trackId]
    // saveMytunes()
    // loadMytunes()
    //  myTunes[song.trackId]= song
  },
  promoteTrack(song) {
     console.log(Object.keys(this.songs))
     let x = this.songs.indexOf(this.song)
     console.log(x)
     let songx = this.song[x]
     console.log(x)
     let temp = songs.slice(x,1)
     console.log(x)
     this.songs=temp.splice(x-1,0,songx)
     console.log(this.songs)
    // saveMytunes()
   },
  demoteTrack(song) { 
     Vue.set(myTunes, song.id-1, song)
    saveMytunes()
  }
}

export default myTunesService