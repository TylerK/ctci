/**
 * urlify - Replace spaces with %20, and trim whitespace.
 * @param  {String} string
 * @return {String}
 */
function urlify (string) {
  return string
  .trim()
  .split('')
  .map(char => char === ' ' ? '%20' : char)
  .join('')
}

module.exports = urlify
