function main(input) {
    var num = input.split("\n")
    for(var i=0;i<num.length;i++){
        if(num[i] == 42){
            break;
        }
        else{
            process.stdout.write(num[i] + "\n")
        }
        
    }
}
