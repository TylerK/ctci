const expect = require('chai').expect
const oneAway = require('./one-away')

describe('One Character Away', () => {
  it('"cat -> cat" should return true', () => {
    expect(oneAway('cat', 'cat')).to.equal(true)
  })
  it('"cat -> cot" should return true', () => {
    expect(oneAway('cat', 'cot')).to.equal(true)
  })
  it('"sloth -> slth" should return true', () => {
    expect(oneAway('sloth', 'slth')).to.equal(true)
  })
  it('"bazzle -> beezle" should return false', () => {
    expect(oneAway('bazzle', 'beezle')).to.equal(false)
  })
  it('"cup -> coffee" should return false', () => {
    expect(oneAway('cup', 'coffee')).to.equal(false)
  })
  it('"dog -> dogs" should return true', () => {
    expect(oneAway('dog', 'dogs')).to.equal(true)
  })
})
