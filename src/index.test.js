import { expect } from 'chai'
import dogBreedNames from '.'

describe('dog-breed-names', () => {
  it('should have a list of all available names', () => {
    expect(dogBreedNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(dogBreedNames.random()).to.satisfy(isIncludedIn(dogBreedNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
