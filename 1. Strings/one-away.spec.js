const expect = require('chai').expect
const oneAway = require('./one-away')

describe('One Character Away', () => {
  it('Should return true for "cat -> cat"', () => {
    expect(oneAway('cat', 'cat')).to.equal(true)
  })
  it('Should return true for "cat -> cot"', () => {
    expect(oneAway('cat', 'cot')).to.equal(true)
  })
  it('Should return true for "sloth -> slth"', () => {
    expect(oneAway('sloth', 'slth')).to.equal(true)
  })
  it('Should return true for "dog -> dogs"', () => {
    expect(oneAway('dog', 'dogs')).to.equal(true)
  })
  it('Should return false for "bazzle -> beezle"', () => {
    expect(oneAway('bazzle', 'beezle')).to.equal(false)
  })
  it('Should return false for "cup -> coffee"', () => {
    expect(oneAway('cup', 'coffee')).to.equal(false)
  })
})
