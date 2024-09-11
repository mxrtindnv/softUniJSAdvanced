function aggregateElements(input){
    
    function sumElements(arr){
        let sum = 0;
        for(let num of arr){
            num = Number(num);
            sum += num;
        }
        return console.log(sum);
        ;
    }

    function inverseSum(arr){
        let sum = 0;
        for(let num of arr){
            num = Number(num);
            sum += 1/num;
        }
        return console.log(sum);
        
    }

    function concatElements(arr){
        let result = "";
        for(let num of arr){
            result += num;
        }
        return console.log(result);
        
    }

    sumElements(input);
    inverseSum(input);
    concatElements(input);




}
aggregateElements([1,2,3])