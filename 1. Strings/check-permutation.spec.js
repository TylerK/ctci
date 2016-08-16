const expect = require('chai').expect
const checkPermutation = require('./check-permutation')

describe('Check Permutation', () => {
  it('Should return true if string A is a permutation of string B', () => {
    expect(checkPermutation('abcdefg', 'gbefacd')).to.equal(true)
  })
  it('Should return false if the two strings are not the same length', () => {
    expect(checkPermutation('abc', 'abcdef')).to.equal(false)
  })
})
