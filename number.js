var items = document.querySelectorAll(".items");
var count = 20;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(numbers);

for (var i = 0; i < items.length; i++) {
  items[i].textContent = numbers[i];
}

for (var i = 0; i < 40; i++) {
  items[i].addEventListener("click", function () {

    if (count < 40) {
      count++;
      this.textContent = count;
    }
    else
    {
     this.style.color = "lightSkyBlue";
    }
  });
}