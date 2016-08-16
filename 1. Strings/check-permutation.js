/**
 * checkPermutation -- Returns true if string A is a permutation of string B
 * @param  {String} a
 * @param  {String} b
 * @return {Boolean}
 */
function checkPermutations (a, b) {
  if (a.length !== b.length) return false
  return sortString(a) === sortString(b)
}

function sortString (string) {
  return string.split('').sort().join('').trim()
}

module.exports = checkPermutations
