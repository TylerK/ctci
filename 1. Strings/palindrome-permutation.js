/**
 * palindromePermutation - Given a string, checks if it is a permutation of a palindrome.
 * Will only strip numbers and spaces for the purposes of brevity.
 * @param  {String} string
 * @return {Boolean}
 */
function palindromePermutation (string) {
  const charCounts = {}
  const trimmedString = string.replace(/\d+| /g, '').toLowerCase()

  let sum = 0

  for (let i = 0; i < trimmedString.length; i++) {
    const char = trimmedString[i]

    if (charCounts[char]) {
      charCounts[char]++
    } else {
      charCounts[char] = 1
    }
  }

  for (let char in charCounts) {
    sum += charCounts[char] % 2
  }

  return sum < 2
}

module.exports = palindromePermutation

