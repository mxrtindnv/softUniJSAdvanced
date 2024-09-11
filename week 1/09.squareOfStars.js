function starSquare(input){

    input = Number(input);

    let row = "";

    for(let i = 0; i < input; i++){
        row += "* "
    }

    for(let a = 0; a < input; a++){
        console.log(row);
        
    }
    



}
starSquare(4);