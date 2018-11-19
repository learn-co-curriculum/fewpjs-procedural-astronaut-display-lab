function fetchAstronautInfo() {
  fetch( 'http://api.open-notify.org/astros.json' )
    .then( res => res.json() )
    .then( json => {
      updateAstronautDisplay( json )
      updateInfoBar( json )

    } )
}

function createAstronautElement() {
  let astroElement = document.createElement( 'img' )
  astroElement.src = 'astronaut.png'
  return astroElement
}

function updateAstronautDisplay( json ) {
  for ( let n = 0; n < json[ "people" ].length; n++ ) {
    let astronaut = createAstronautElement( json[ "people" ][ n ] )
    document.querySelector( 'main' ).appendChild( astronaut )
  }
}

function updateInfoBar( json ) {
  let header = document.querySelector( 'header' )
  header.innerHTML = `There are ${json["number"]} people currently in space`
}

document.addEventListener( "DOMContentLoaded", ( event ) => {
  fetchAstronautInfo()
} );