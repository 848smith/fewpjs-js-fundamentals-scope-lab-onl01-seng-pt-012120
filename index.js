let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  const animal = "cat"
  return animal
}

function add2(n) {
  // Feel free to move things around!
  let two = 2
  return n + two
}