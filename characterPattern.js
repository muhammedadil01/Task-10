var n = 5; 
var string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);

var n = 5;
var string = "";

for (let i = n; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}

console.log(string);