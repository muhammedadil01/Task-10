
var str = ''

for(let i= 1 ; i<=5 ;i++){
    for(let j=1; j<=i ; j++){
        str += j+' '
    }
   str += '\n'
}

console.log(str);



for (let i = 5; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row);
  }


