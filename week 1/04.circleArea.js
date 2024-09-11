function circleCalculator(input){

    if(typeof(input) !== "number"){
        return console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
        
    }else{
        const circleArea = Math.PI * (input ** 2);
        console.log(circleArea.toFixed(2));
        
    }




}
circleCalculator('nigga')