let utilityList = require("./../utilities/utils/index.js");
let countryList = require("./../country/state/city/index.js");

function getPeopleInCity(countryList) {
  return utilityList(countryList);
}
console.log(utilityList);
//console.log(getPeopleInCity);
module.exports = getPeopleInCity;
