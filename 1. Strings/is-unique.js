/**
 * isUnique -- Check a string for repeated characters
 * @param  {String}  string
 * @return {Boolean} Returns false if any character is repeated
 */
function isUnique (string) {
  string = string.split('').sort().join('').trim()

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return false
    }
  }

  return true
}

module.exports = isUnique
