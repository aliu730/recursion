// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //className is what we are looking for and OUTPUT is an array.
  //You should use document.body, element.childNodes, and element.classList
  // your code here
  var elementArray = [];
  //var childArray = [];
  nodeSearch(document.body);
  function nodeSearch(element) { //check for elements which contain className
    //if ((element.classList).contains(className) && (element.classList !== undefined)) { //reads left to right so it runs into an error if we use this.
    if ((element.classList !== undefined) && (element.classList).contains(className)) {
      elementArray.push(element);
    }
    //check if has children to repeat process.
    if (element.hasChildNodes()) {
      var childArray = [];
      for (var i = 0; i < element.childNodes.length; i++) {
        nodeSearch(element.childNodes[i]);
      }
    }
  }
  return elementArray;
};
