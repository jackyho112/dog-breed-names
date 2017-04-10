import uniqueRandomArray from 'unique-random-array'
const dogBreedNames = require('./dog-breed-names.json')

const mainExport = {
  all: dogBreedNames,
  random: uniqueRandomArray(dogBreedNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
