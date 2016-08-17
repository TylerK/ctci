/**
 * oneAway - Checks if one string is a single edit, or zero edits, away from another string.
 * Edits include: Adding a missing character, deleting an extra character, or editing a single character.
 * @param  {String} a - Base string
 * @param  {String} b - String to be checked
 * @return {Boolean}
 */
function oneAway (a, b) {
  let lengthDiff = Math.abs(a.length - b.length)

  // Returns based on difference in character lengths.
  if (a === b || lengthDiff === 1) {
    return true
  } else if (lengthDiff > 1) {
    return false
  }

  // Same length, look for single char edits
  const aSorted = a.split('').sort()
  const bSorted = b.split('').sort()

  let sum = 0

  for (var i = 0; i < aSorted.length; i++) {
    if (aSorted[i] !== bSorted[i]) {
      sum++
    }
  }

  return sum === 2
}

module.exports = oneAway
