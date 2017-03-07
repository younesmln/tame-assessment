exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((acc, item) => acc + item);
  },

  remove: function(arr, item) {
    return arr.filter(val => val !== item)
  },

  removeWithoutCopy: function(arr, item) {
    let position;
    while ((position = arr.indexOf(item)) > -1){
      arr.splice(position, 1)
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate: function(arr) {
    arr.pop();
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
  },

  count: function(arr, item) {
    return arr.reduce((acc, elem) => {
      if (elem === item) ++acc;
      return acc;
    }, 0);
  },

  duplicates: function(arr) {
    const filteredObject = _.pick(_.countBy(arr), (val, key) => val > 1 );
    return Object.keys(filteredObject).map(item => parseInt(item));
  },

  square: function(arr) {
    return arr.map(item => item * item );
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc, item, index) => {
      if (item === target) acc.push(index);
      return acc;
    }, []);
  }
};
