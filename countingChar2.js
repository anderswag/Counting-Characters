function createKeys(str){
  var obj = {};
  var noSpaces = str.split(" ").join("");
  for (var i = 0; i < noSpaces.length; i++){
    if(obj[noSpaces[i]] === undefined){
      obj[noSpaces[i]] = 1;
    } else {
      obj[noSpaces[i]] += 1;
    }
  }
  return obj;
}
var string = "Lighthouse in the house";
console.log(createKeys(string));