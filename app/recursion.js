exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    if (dirName){
      let queue = [data];
      let subTree = bfsTraverse(queue);
      return traverseAllSubtree(subTree)
    } else {
      return traverseAllSubtree(data)
    }

    // this method is for selecting the dirName subtree to avoid traversing all the directories
    function bfsTraverse(queue) {
      if (queue.length < 1) return;
      let currentNode = queue.shift();
      //console.log(currentNode.dir)
      if (currentNode.dir == dirName) return currentNode;
      for (let i = 0; i < currentNode.files.length; ++i){
        let toTraverse = currentNode.files[i];
        if (typeof toTraverse === 'object') queue.push(toTraverse)
      }
      return bfsTraverse(queue)
    }

    function traverseAllSubtree(data) {
      if (!data) return;
      if (typeof data === 'string') return data;
      let result = [];
      const files = data.files;
      for (let i = 0; i < files.length; ++i) {
        let subResult = traverseAllSubtree(files[i], dirName, files.dir);
        result = result.concat(subResult)
      }
      return result;
    }
  },

  permute: function(arr) {
    let size = arr.length;
    if (size < 2) return [arr];
    let results = [];
    for (let i = 0; i < size; ++i){
      let current = arr[i];
      let newArr = arr.slice();
      newArr.splice(i, 1);
      let subResult = this.permute(newArr);
      subResult.forEach((item) => {
        item.unshift(current);
        results.push(item)
      });
    }
    return results;
  },

  fibonacci: function(n) {
    // a space for storing old values to not recalculate them again
    const memoize = this.fibonacci.memoize  = this.fibonacci.memoize || {};
    if (n < 3) return 1;
    if (!memoize[n]){
      memoize[n] = this.fibonacci(n - 2) + this.fibonacci(n - 1)
    }
    return memoize[n]
  },

  // I have already solved this problem or a similar problem I think  in one of my university algorithms class
  validParentheses: function(n) {
    let results = [];
    (function generate(n, open, close, result, allResults) {
      if (open == n && close == n) return allResults.push(result);
      else {
        if (open < n) {
          generate(n, open + 1, close,  result + "(", allResults);
        }
        if (close < open) {
          generate(n, open, close + 1, result + ")", allResults);
        }
      }
    })(n, 0, 0, '', results);
    return results;
  }
};
