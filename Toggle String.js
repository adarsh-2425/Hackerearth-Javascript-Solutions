function main(input) {
 
    let strtoggled=""; // variable to hold the toggled string and return
    let pattern=/^[a-z]$/; //regular expression literal to be matched for each character to figure out the lowercase letters.
    for (char of input){ // for loop to iterate of each character in the input string
     
    if(char.match(pattern)){ // using the match pattern of the String class to match lowercase letters
    strtoggled+=char.toUpperCase() // if match found for lowercase change it to upper
    }
    else{
    strtoggled+=char.toLowerCase()// else change it to lower
    }
    }
    process.stdout.write(strtoggled); // print the new String
    }

    /*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let s="";
    let lowercaseRegex = /^[a-z]$/;

    for(char of input){
        if(char.match(lowercaseRegex)){
            s+=char.toUpperCase()
        }
        else{
            s+=char.toLowerCase()
        }
    }
    console.log(s);
}

