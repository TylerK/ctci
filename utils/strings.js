/**
 * Returns the reverse of a string
 * @param  {String} string
 * @return {String}
 */
function reverseString (string) {
  return string.split('').reverse().join('')
}

module.exports = {
  reverse: reverseString
}
