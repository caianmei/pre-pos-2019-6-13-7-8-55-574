'use strict';

function countSameElements(collection) {

  var result = [];
  for (var i = 0, v, l = collection.length; v = collection[i], i < l; i++) {
    var count = 0;
    var re = {};

    if (collection[i].length > 1 && collection[i].length == 3) {
      var a = collection[i];
      re.key = a.charAt(0);
      re.count = parseInt(a.charAt(2));
    } else {
      re.key = collection[i];
      for (var j = i; j < collection.length; j++) {
        if (collection[i] === collection[j]) {
          count++;
        }
      }
      re.count = count;
      i += count - 1;
    }
    result.push(re);
  }
  return result;
}

