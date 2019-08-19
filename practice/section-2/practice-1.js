'use strict';
function countSameElements(collection) {
  var arr = [];
  
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }   
    var object ={};
    object.key=collection[i];
    object.count = count;
    arr.push(object)
    i+=count;
  }
  
  return arr;
}
