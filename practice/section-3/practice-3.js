'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = [];
  
  for (var i = 0; i < collectionA.length;) {
    var count = 0;
    for (var j = i; j < collectionA.length; j++) {
      if (collectionA[i] === collectionA[j]) {
        count++;
      }
    }   
    var object ={};
    object.key=collectionA[i];
    object.count = count;
    arr.push(object)
    i+=count;
  }

  var keys = objectB.value;
  var result = [];
  for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    var key = arr[i].key;
    var count = arr[i].count;
    for(var j=0; j<keys.length ; j++){
      if(key === keys[j]){
        var k = parseInt(count/3);
        count -= k;
        break;
      }
    }
    item.key = key;
    item.count = count;
    result.push(item);
  }
  return result;
}
