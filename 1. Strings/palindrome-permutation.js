const charCounts = require('../utils/strings').charCounts

/**
 * palindromePermutation - Given a string, checks if it is a permutation of a palindrome.
 * Assuming letters and spaces only.
 * @param  {String} string
 * @return {Boolean}
 */
function palindromePermutation (string) {
  const trimmedString = string.replace(' ', '').toLowerCase()
  const counts = charCounts(trimmedString)

  let sum = 0

  for (let char in counts) {
    sum += counts[char] % 2
  }

  return sum < 2
}

module.exports = palindromePermutation

