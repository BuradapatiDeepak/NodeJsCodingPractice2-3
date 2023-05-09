let list = require("/home/workspace/coding-practices/coding-practice-2c/country/state/city/index.js");
//console.log(list);
const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};
//console.log(getFirstNames(list));
module.exports = getFirstNames;
