'use strict';

function countSameElements(collection) {
  var result = [];
  var re = {};
  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
        re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  var keys = Object.getOwnPropertyNames(re);
  var item = {};
 
  for(var j=0;j<keys.length;j++){    
    var item = {};
    var key =  keys[j];
    item.name = keys[j];
    item.summary =  re[ keys[j]];   
    result.push(item);
  }
  return result;
}
