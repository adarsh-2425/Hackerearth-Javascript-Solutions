
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
    if(input == input.split("").reverse().join("")){
        process.stdout.write("YES")
    }
    else{
        process.stdout.write("NO")
    }
}