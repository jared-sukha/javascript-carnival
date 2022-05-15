// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//  PLEASE NOTE: I know the code is very unDRY or WET (Words, Extra, Toomany - Sorry it's not a very clever acronym).
// I did find the video walkthrough during my travels on discord but didn't want to copy the streamlined answer, doing this way is pretty simple for me logically and I know it could probably be refactored a bit (and have some loose ideas of how to do so). I may try to do fix later in revision week.

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0

let bodyPartIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

function changeClothesUp() {
  if (bodyPartIndex == 0) {
    headIndex++
    console.log(headIndex)
    if (headIndex > 5) {
      headIndex = 0
    }
    // let headVariable = document.getElementById('head')
    // tested using concat method below, doesn't look that nice starting with a string...
    //  let headSrc = './images/head'.concat(headIndex, '.png')
    // headVariable.src = headSrc
    head.src = './images/head' + headIndex + '.png'
  } else if (bodyPartIndex == 1) {
    bodyIndex++
    console.log(bodyIndex)
    if (bodyIndex > 5) {
      bodyIndex = 0
    }
    body.src = './images/body' + bodyIndex + '.png'
  } else if (bodyPartIndex == 2) {
    shoesIndex++
    console.log('shoes index = ' + shoesIndex)
    if (shoesIndex > 5) {
      shoesIndex = 0
    }
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeClothesDown() {
  if (bodyPartIndex == 0) {
    console.log(headIndex)
    --headIndex
    if (headIndex < 0) {
      headIndex = 5
    }
    head.src = './images/head' + headIndex + '.png'
  } else if (bodyPartIndex == 1) {
    console.log(bodyIndex)
    --bodyIndex
    if (bodyIndex < 0) {
      bodyIndex = 5
    }
    body.src = './images/body' + bodyIndex + '.png'
  } else if (bodyPartIndex == 2) {
    console.log('shoes index = ' + shoesIndex)
    --shoesIndex
    if (shoesIndex < 0) {
      shoesIndex = 5
    }
    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeBodyPartUp() {
  ++bodyPartIndex
  if (bodyPartIndex > 2) bodyPartIndex = 0
  console.log(bodyPartIndex)
}

function changeBodyPartDown() {
  --bodyPartIndex
  if (bodyPartIndex < 0) bodyPartIndex = 2
  console.log(bodyPartIndex)
}

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      changeClothesDown()
      break
    case 'ArrowUp':
      changeBodyPartDown()
      break
    case 'ArrowRight':
      changeClothesUp()
      break
    case 'ArrowDown':
      changeBodyPartUp()

      break
  }
})

// function changeHorizontal(shift) {
//   headIndex += shift

//   if (headIndex < 0) headIndex = 5

//   if (headIndex > 5) headIndex = 0
//   head.src = './images/head' + headIndex + '.png'
// }
