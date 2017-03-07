exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function (str2) {
      return [str, str2].join(", ")
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function (item) {
      function closure() {
        return fn(item)
      }
      return closure;
    })
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2)
  },

  useArguments: function() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce(function (acc, item) {
      return acc + item
    }, 0)
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
      return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)))
    }
  },

  curryIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function currying(arg) {
      args = args.concat(arg);
      if (args.length >= fn.length) return fn.apply(null, args);
      else return currying
    }
  }
};
