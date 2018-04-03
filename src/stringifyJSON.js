// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//EXAMPLE USE: 
// JSON.stringify({});                    // '{}'
// JSON.stringify(true);                  // 'true'
// JSON.stringify('foo');                 // '"foo"'
// JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
// JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
// JSON.stringify({ x: 5 });              // '{"x":5}'
var stringifyJSON = function(obj) {
  //need to check the type of argument we are given.
  //if string we return the value wrapped in a string.
  if (typeof obj === "string") { //this one is kind of weird.
    return ("\"" + obj + "\"");
  }
  //if null, undefined, infinity, NaN, etc return  null.
  var nullArray = [null, undefined, NaN, Infinity];
  if (nullArray.includes(obj)) {
    return ("null");
  }
  //if boolean return stringed boolean.
  if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  }
  //if array return stringed brackets with same values '[1,2,3]'.
  if (Array.isArray(obj)) { //check array before object because an array is technically an object.
    //var alteredArray = []
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
      //return ('[' + obj + ']');
    }
    return ('[' + obj + ']');
  }
  //if object return '{with keys modified to strings and values passed into recurse }'
  if (typeof obj === "object") {
    //do we want to construct a new object? can we?
    //var newObj = {}; can't it will become messy and we want to have a string not a new obj.
    var objArray = [];
    var objKeys = Object.keys(obj);
    for (var j = 0; j < objKeys.length; j++) {

      console.log(typeof obj[objKeys[j]])
      if (typeof obj[objKeys[j]] === "function" || obj[objKeys[j]] === undefined) {
        break;
      }
      objArray.push(stringifyJSON((objKeys[j])) + ":" + (stringifyJSON(obj[objKeys[j]])));
    }
    return "{" + (objArray).toString() + "}";
  }
};