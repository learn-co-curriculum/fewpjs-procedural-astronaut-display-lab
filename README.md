# Procedural Code Before Object Orientation

## Learning Goals

- Review and apply previous concepts for manipulating the DOM
- Review and apply previous concepts for creating events
- Review and apply previous concepts for communicating with a server
- Prepare code example for conversion to Object Orientated JavaScript

## Introduction

One of the best ways to understand something is by analogy, and learning Object
Oriented JavaScript is no different. OO JavaScript requires a different way of
thinking about our code. Before we go into detail on the syntax, structure and
usage of OO code, its important to understand how it changes our perspective on
the code we write.

So far in this track, you've used [procedural][procedural] code to build out
your solutions, and you will need to use your skills once more. In this lesson,
you will be building out the JavaScript for setting up an event, fetching
data from a server and displaying that data to the DOM.

After you've completed this lab, we will take our solution and convert
it to Object Oriented code.

## Instructions

You are tasked with building a simple display for the number of astronauts
currently in space. For this lab, you will need to write:

1.  `createAstronautElement()` - a function that creates an `img` element and
    returns it
2.  `updateInfoBar(json)` - a function that updates HTML to display the current
    number of astronauts in space.
3.  `updateAstronautDisplay(json)` - a function that appends an `img` element
    for every astronaut currently in space
4.  `fetchAstronautInfo()` - a function that fetches data from
    'http://api.open-notify.org/astros.json' and passes the returned JSON data to `updateInfoBar` and `updateAstronautDisplay`.
5.  An event listener that fires when the DOM content is loaded and calls
    `fetchAstronautInfo()`

Run `learn` to see your progress.

## Conclusion

With a working example of procedural code, its time to see how we can convert
it to Object Oriented code!

[procedural]: https://en.wikipedia.org/wiki/Procedural_programming
