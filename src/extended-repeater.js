const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options) return str;

  const {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  const repeater = [];

  if (separator && addition) {
    separator.toString();
    addition.toString();
  }

  function getAddition(str) {
    if (!repeatTimes && !additionRepeatTimes) return str;

    const newStr = [];

    for (let i = 0; i < additionRepeatTimes; i++) {
      newStr.push(`${str}`);
    }

    return newStr.join(additionSeparator);
  }

  function getStr() {
    if (!repeatTimes && !additionRepeatTimes) return;

    for (let i = 0; i < repeatTimes - 1; i++) {
      repeater.push(repeater[0]);
    }
  }

  repeater.push(`${str}${getAddition(addition)}`);

  if (!repeatTimes && !additionRepeatTimes) return repeater.join("");

  getStr();

  return repeater.join(separator);
};
  