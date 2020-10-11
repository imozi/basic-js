const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;

  matrix.map((e) => {
    e.reduce((a, e) => {
      if (e === "^^") {
        a = countCats++;
      }
      return a;
    }, countCats);
  });

  return countCats;
};
