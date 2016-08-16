const expect = require('chai').expect
const palindromePermutation = require('./palindrome-permutation')

describe('Palindrome Permutation', () => {
  it('"Taco Cat" should return true', () => {
    expect(palindromePermutation('Taco cat')).to.equal(true)
  })
  it('"abcdefg" should return false', () => {
    expect(palindromePermutation('abdefg')).to.equal(false)
  })
  it('"nooon" should return true', () => {
    expect(palindromePermutation('noon')).to.equal(true)
  })
  it('"aabbee" should return true', () => {
    expect(palindromePermutation('aabbee')).to.equal(true)
  })
  it('"gg" should return true', () => {
    expect(palindromePermutation('gg')).to.equal(true)
  })
  it('"x" should return true', () => {
    expect(palindromePermutation('x')).to.equal(true)
  })
  it('"aaba" should return false', () => {
    expect(palindromePermutation('aaba')).to.equal(false)
  })
})
