function main(input) {
    let data = input.split(/\s+/);
    let L = parseInt(data.shift());
    let N = data.shift();
    console.log()
    for(let i=0;i<N;i++){
        uploadRoy(L,data)
    }
   return;
}

function uploadRoy(L,data){
    let w = parseInt(data.shift());
    let h = parseInt(data.shift());

    if(w<L || h<L){
        console.log("UPLOAD ANOTHER");
    }
    else if(L*L <= w*h){
        if(w==h){
        console.log("ACCEPTED");
        }
    
    else{
        console.log("CROP IT");
    }
    }
}
