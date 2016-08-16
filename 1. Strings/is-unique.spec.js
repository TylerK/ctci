const expect = require('chai').expect
const isUnique = require('./is-unique')

describe('Unique Characters in a string', () => {
  it('Should return true, all characters are unique', () => {
    expect(isUnique('abc def ghijk')).to.equal(true)
  })
  it('Should return false due to duplicates', () => {
    expect(isUnique('abcd efghi jka')).to.equal(false)
  })
})
