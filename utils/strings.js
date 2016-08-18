/**
 * Returns the reverse of a string
 * @param  {String} string
 * @return {String}
 */
function reverseString (string) {
  return string.split('').reverse().join('')
}

/**
 * countChars - Returns an object with character frequency
 * @param {String} string
 * @return {Object}
 */
function charCount (string) {
  const charCounts = {}

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (charCounts[char]) {
      charCounts[char]++
    } else {
      charCounts[char] = 1
    }
  }

  return charCounts
}

module.exports = {
  reverse: reverseString,
  charCount: charCount
}
