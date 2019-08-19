'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var keys = objectB.value;
  var result = [];
  for(var i = 0; i < collectionA.length; i++){
    var item = collectionA[i];
    var key = collectionA[i].key;
    var count = collectionA[i].count;
    for(var j=0; j<keys.length ; j++){
      if(key === keys[j]){
        count --;
        break;
      }
    }
    item.key = key;
    item.count = count;
    result.push(item);
  }
  return result;
}