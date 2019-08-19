'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = [];
  for (var i = 0, v, l = collectionA.length; v = collectionA[i], i < l; i++) {
    var count = 0;
    var re = {};

    if (collectionA[i].length > 1 && collectionA[i].length == 3) {
      var a = collectionA[i];
      re.key = a.charAt(0);
      re.count = parseInt(a.charAt(2));
    } else {
      re.key = collectionA[i];
      for (var j = i; j < collectionA.length; j++) {
        if (collectionA[i] === collectionA[j]) {
          count++;
        }
      }
      re.count = count;
      i += count - 1;
    }
    arr.push(re);
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
