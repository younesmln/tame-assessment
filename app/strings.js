exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let arrayStr = str.split("");
    return arrayStr.reduce((acc, value) => {
        if (acc.length == 0) acc.push([value]);
        else {
          let lastEntry = acc[acc.length - 1];
          if (lastEntry[0] == value) lastEntry.push(value);
          else {
            acc.push([value])
          }
        }
        return acc
      }, [])
      .reduce((acc, item) =>
          acc += item.slice(0, amount).join("")
      , "");
  },

  wordWrap: function(str, cols) {
    let words = str.split(' '),
      formatted = words[0];

    for (let i = 1; i < words.length; i++) {
      let currentWord = words[i];
      if (formatted.length + currentWord.length > cols) {
        formatted += '\n' + currentWord;
      } else {
        formatted += ' ' + currentWord;
      }
    }
    return formatted;
  },

  reverseString: function(str) {
    // or simply: str.split("").reverse().join("");
    let result = "";
    for (let i = 0; i < str.length ; ++i){
      let reversedIndex = str.length - 1 - i;
      result += str[reversedIndex]
    }
    return result
  }
};
