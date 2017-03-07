exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    function sayIt() {
      return [this.greeting, this.name].join(', ');
    }
    return {
      sayIt: sayIt,
      name: str2,
      greeting: str1
    };
  }
};
