if (navigator.requestMIDIAccess) {

    navigator.requestMIDIAccess({
        sysex: false // this defaults to 'false' and we won't be covering sysex in this article. 
    }).then(onMIDISuccess, onMIDIFailure)
} else {

    alert("No MIDI support in your browser.")
}

function onMIDISuccess(midiAccess) {
    
    console.log('MIDI Access Object', midiAccess)
}

function onMIDIFailure(e) {

    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e)
}