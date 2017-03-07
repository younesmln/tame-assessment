exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let binary = num.toString(2).split("").reverse().join("");
    return parseInt(binary.charAt(bit - 1))
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    return ("0000000" + num.toString(2)).substr(-8)
  },

  multiply: function(a, b) {
    return +(a * b).toFixed(8)
  }
};
