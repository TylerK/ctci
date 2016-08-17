/**
 * compressString - Compresses repeating characters to a letter and count combo
 * Returns the compressed string, if the compressed length is less than the supplied string's length
 * Assume no empty strings and all strings contain only letters
 * @param  {String} string | Example: "dogggiess"
 * @return {String} Example: "dog3ies2"
 */
function compressString (string) {
  const sortedString = string.toLowerCase().split('').sort()
  const charCounts = {}

  sortedString.forEach(c => {
    if (!charCounts[c]) {
      charCounts[c] = 1
    } else {
      charCounts[c]++
    }
  })

  let compressed = []
  for (let char in charCounts) {
    compressed.push(`${char}${charCounts[char]}`)
  }

  compressed = compressed.join('')

  return compressed.length < string.length ? compressed : string
}

module.exports = compressString
