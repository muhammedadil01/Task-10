var n = 5; 
var string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);

//---------------------------------------------

var n = 5;
var string = "";

for (let i = n; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}

console.log(string);
 
//-----------------------------------------------------

var size = 5

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size; j++) {
    const char = String.fromCharCode(65 + i); 
    line += char + ' ';
  }
  console.log(line);
}

//------------------------------------------------------

var size = 5

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size - i - 1; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    const char = String.fromCharCode(65 + i);
    line += char;
  }
  console.log(line);
}

for (let i = size - 2; i >= 0; i--) {
  let line = '';
  for (let j = 0; j < size - i - 1; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    const char = String.fromCharCode(65 + i);
    line += char;
  }
  console.log(line);
}