
var str = ''

for(let i= 1 ; i<=5 ;i++){
    for(let j=1; j<=i ; j++){
        str += j+' '
    }
   str += '\n'
}

console.log(str);

//----------------------------------------------------

for (let i = 5; i >= 1; i--) {
    var row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row);
  }

  //-------------------------------------------------------


var rows = 5

   for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= rows - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += k + " ";
    }
    console.log(row);
  }

//--------------------------------------------------------------


var rows = 5

for (let i = 1; i <= rows; i++) {
  var row = "";
  for (let j = 1; j <= rows - i; j++) {
    row += "  ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}