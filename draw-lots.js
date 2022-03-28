const people = ['ni', 'rosanna', 'irina', 'kerry', 'cristina'];
// Durstenfeld shuffle
const shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    //
    var j = Math.floor(Math.random() * (i + 1));
    //ES6 provides this new way to switch array elements' positions
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const drawLots = () => {
  shuffle(people);
  let result = {};
  for (let i = 0; i < people.length; i++) {
    //assign the person to the one next to him/she as a pair to do the interview
    result[people[i]] = people[(i + 1) % people.length];
  }
  return result;
};

console.log(drawLots());
