const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, tmp = []) {
    tmp.push(counter);

    arr.forEach((e) => {
      if (Array.isArray(e)) {
        this.calculateDepth(e, counter + 1, tmp);
      }
    });

    return Math.max.apply(null, tmp);
  }
};
