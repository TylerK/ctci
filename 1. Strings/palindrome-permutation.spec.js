const expect = require('chai').expect
const palindromePermutation = require('./palindrome-permutation')

describe('Palindrome Permutation', () => {
  it('Should return true for "Taco Cat"', () => {
    expect(palindromePermutation('Taco cat')).to.equal(true)
  })
  it('Should return true for "nooon"', () => {
    expect(palindromePermutation('noon')).to.equal(true)
  })
  it('Should return true for "aabbee"', () => {
    expect(palindromePermutation('aabbee')).to.equal(true)
  })
  it('Should return true for "gg"', () => {
    expect(palindromePermutation('gg')).to.equal(true)
  })
  it('Should return true for "x"', () => {
    expect(palindromePermutation('x')).to.equal(true)
  })
  it('Should return false for "aaba"', () => {
    expect(palindromePermutation('aaba')).to.equal(false)
  })
  it('Should return false for "abcdefg"', () => {
    expect(palindromePermutation('abdefg')).to.equal(false)
  })
})
