module.exports = function reverse (n) {
    let arr = [];
  let sNum = n.toString();
  for (letter of sNum) {
    arr.unshift(letter);
  }
  let r = arr.join("");
  let nn = parseInt(r, 10);
  return nn;
}
