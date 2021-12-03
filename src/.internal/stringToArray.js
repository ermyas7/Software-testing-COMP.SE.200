const asciiToArray = require('./asciiToArray.js');
const hasUnicode = require('./hasUnicode.js');
const unicodeToArray = require('./unicodeToArray.js');

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

module.exports = stringToArray;
