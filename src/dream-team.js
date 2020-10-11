const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .reduce((a, e) => {
      if (typeof e === "string") {
        a = a + e.trim().slice(0, 1).toUpperCase();
      }
      return a;
    }, "")
    .split("")
    .sort()
    .join("");
};
