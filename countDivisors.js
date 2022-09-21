const inputNumber = JSON.parse("["+input.split(/[ ,]+/).join(',')+"]"); // Use this in all the problems for specific inputs

var l = inputNumber[0];

var r = inputNumber[1];

var k = inputNumber[2];

var count = 0;

for(var i = l; i<=r; i++){

    if(i%k == 0){

       count++;

    }

}

console.log(count);


