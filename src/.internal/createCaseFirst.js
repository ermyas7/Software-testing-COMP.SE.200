const castSlice = require('./castSlice.js');
const hasUnicode = require('./hasUnicode.js');
const stringToArray = require('./stringToArray.js');

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return (string) => {
    if (!string) {
      return ''
    }

    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined

    const chr = strSymbols
      ? strSymbols[0]
      : string[0]

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1)

    return chr[methodName]() + trailing
  }
}

module.exports = createCaseFirst;
