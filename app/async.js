exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    function handleResult(result) {
      return result.people.map(function (item) {
        return item.name;
      }).sort();
    }
    return fetch(url)
      .then(resp => resp.json())
      .then(handleResult);
  }
};
