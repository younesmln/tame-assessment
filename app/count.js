exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let returnObject = {
      cancel: function () {
        return clearInterval(intervalId)
      }
    };
    function repeated() {
      if (start > end) return returnObject;
      console.log(start);
      ++start
    }
    let intervalId = setInterval(repeated, 100);
    repeated();
    return returnObject
  }
};
