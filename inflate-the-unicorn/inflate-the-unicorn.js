// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

// let unicorn1 = (document.getElementsByClassName('inflate-an-image').src =
//   '../images/unicorn-1.png')
// console.log(unicorn1)

function unicornClicked(e) {
  // create a variable for the clicked cell so I can do stuff with it
  let unicorn = e.target
  console.log(e.target)
  if (unicorn.src.match('./images/unicorn-0.png')) {
    unicorn.src = './images/unicorn-1.png'
  } else if (unicorn.src.match('./images/unicorn-1.png')) {
    unicorn.src = './images/unicorn-2.png'
  } else if (unicorn.src.match('./images/unicorn-2.png')) {
    unicorn.src = './images/unicorn-3.png'
    alert('Unicorn Number ' + unicorn.id + ' says thank you!')
    // Was trying to make this say thanks after unicorn 3 image assigned
  } else if (unicorn.src.match('./images/unicorn-3.png')) {
    alert('Unicorn Number ' + unicorn.id + ' says thank you!')
  }
}
// function sayHello() {
//   console.log('hello')
// }
// unicorns[1].onclick = sayHello

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}
