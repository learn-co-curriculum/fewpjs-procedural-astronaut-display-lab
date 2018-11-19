const chai = require( 'chai' );
const spies = require( 'chai-spies' );
const path = require( 'path' )
const fs = require( 'file-system' )

chai.use( spies );

describe( 'index.js', () => {

  it( "adds event listener to document to call fetchAstronautInfo()", async () => {
    const js = await fs.readFileSync( path.resolve( __dirname, '..', 'index.js' ), "utf-8" )

    expect( js ).to.match( /document.addEventListener\(( |)"DOMContentLoaded"[\S\s]*fetchAstronautInfo()[\S\s]*/ )
  } )

  describe( 'fetchAstronautInfo', () => {

    it( "sends a fetch request to 'http://api.open-notify.org/astros.json'", () => {
      window.fetch = require( 'node-fetch' );
      chai.spy.on( window, 'fetch' );
      fetchAstronautInfo();

      expect( window.fetch, "A fetch to the API was not found" ).to.have.been.called.with( 'http://api.open-notify.org/astros.json' )
    } );
  } );

  describe( 'createAstronautElement', () => {
    it( 'creates an img element', () => {
      chai.spy.on( document, 'createElement' )
      createAstronautElement()
      expect( document.createElement, "createElement was not called" ).to.have.been.called()
      expect( document.createElement, "createElement did not create an img element" ).to.have.been.called.with( 'img' )
    } )

    it( 'returns the new img element with `src` attribute to "astronaut.png"', () => {
      expect( createAstronautElement().src ).to.equal( "astronaut.png" )
      // console.log( createAstronautElement() );

    } )

  } )

  describe( 'updateAstronautDisplay', () => {
    const testObject = {
      people: [ {
          name: 'Sergey Prokopyev',
          craft: 'ISS'
        },
        {
          name: 'Alexander Gerst',
          craft: 'ISS'
        },
        {
          name: 'Serena Aunon-Chancellor',
          craft: 'ISS'
        }
      ],
      message: 'success',
      number: 3
    }





    it( 'appends a new DOM element to the `main` element', () => {
      expect( document.querySelector( 'main' ).children.length ).to.equal( 0 )
      updateAstronautDisplay( testObject )
      expect( document.querySelector( 'main' ).children.length ).to.not.equal( 0 )
    } );

    it( 'appends the correct amount of DOM elements based on the number of astronauts in space', () => {
      document.querySelector( 'main' ).innerHTML = ""
      expect( document.querySelector( 'main' ).children.length ).to.equal( 0 )
      updateAstronautDisplay( testObject )
      expect( document.querySelector( 'main' ).children.length ).to.equal( 3 )
    } );
  } );

  describe( 'updateInfoBar', () => {
    const testObject = {
      people: [ {
          name: 'Sergey Prokopyev',
          craft: 'ISS'
        },
        {
          name: 'Alexander Gerst',
          craft: 'ISS'
        },
        {
          name: 'Serena Aunon-Chancellor',
          craft: 'ISS'
        }
      ],
      message: 'success',
      number: 3
    }


    it( 'triggers the update of the innerHTML of the `header` element', () => {
      document.querySelector( 'header' ).innerHTML = ""
      expect( document.querySelector( 'header' ).innerHTML ).to.not.include( '3' )
      updateInfoBar( testObject )
      expect( document.querySelector( 'header' ).innerHTML ).to.include( '3' )
    } );
  } );
} );