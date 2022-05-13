// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// I think I want to create a 2d array
// each cell will have 2 digit index
// Will generate random numbers that give the index
// image will be pushed to array index
// Although appending has been mentioned.

// I've canned the 2d array, couldn't quite figure out how to do nicely... 1 long array it is.

let cells = document.getElementsByTagName('td')
console.log(cells)

function randomNumber() {
  return Math.floor(Math.random() * cells.length)
}

// function playSound() {
//   let audio = document.getElementById("audio");
//   audio.play();
// }

let randomIndex = randomNumber()
let moleCell = cells[randomIndex]
let audio = new Audio()
audio.src = 'whack-audio.wav'

let moleyImage = document.createElement('img')
moleyImage.src = 'mole.PNG'
moleyImage.id = 'moley'

moleCell.appendChild(moleyImage)

// Below console logging was me figuring out the scope issue (inside/outside of function) in my head.
// console.log(moleCell)
// console.log(randomIndex)

function peekaMole() {
  randomIndex = randomNumber()
  moleCell = cells[randomIndex]
  // console.log(moleCell)
  // console.log(randomIndex)
  moleCell.appendChild(moleyImage)
  audio.play()
}

moleyImage.onclick = peekaMole
