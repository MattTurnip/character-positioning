function countLetters(string){
  var object = {};

  for (var i = 0; i < string.length ; i++) {

    var letter = string[i];

    if (object[letter] === undefined)
    {
      object[letter] = [i];
    }
    else
    {
      object[letter].push(i);
    }

  }


  delete object[" "];

  return object;
}



//test parameter
console.log(countLetters("lighthouse in the house"));
