exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/.test(str))
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z])\1/.test(str))
  },

  endsWithVowel: function(str) {
    return (/.+[aeiouAEIOU]$/.test(str))
  },

  captureThreeNumbers: function(str) {
    let match = (/\d{3}/.exec(str));
    return match ? match[0] : false
  },

  matchesPattern: function(str) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(str)
  },

  isUSD: function(str) {
    const regex = /^\$\d{1,3}((,\d{3})*)?(\.\d{2})?$/;
    return regex.test(str)
  }
};
