const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const NATURAL_LOG = 0.693;;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || !sampleActivity) return false;
  const activity = parseFloat(sampleActivity);

  return (activity > 0 && activity < MODERN_ACTIVITY) ? Math.ceil(Math.log(MODERN_ACTIVITY / activity) /(NATURAL_LOG / HALF_LIFE_PERIOD)) : false
};
