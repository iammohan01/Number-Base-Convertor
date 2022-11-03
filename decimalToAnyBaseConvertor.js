function decimalToNumberConvertor(nu,ba){
    let number = "";
    let num = BigInt(nu)
    let base = BigInt(ba)
    // base = BigInt(base);
    while (num>=1n){ 
        let temp  = 0n ;
        // temp = 9n
        temp = num % base
        // console.log(temp)
        // console.log(typeof(num % base))
        // break    
       
            if (temp < 10){
                number = temp + number ;
            }
            else if (temp == 10){
                number = "A" + number
            }
            else if (temp == 11){
                number = "B" + number
            }
            else if (temp == 12){
                number = "C" + number
            }
            else if (temp == 13){
                number = "D" + number
            }
            else if (temp == 14){
                number = "E" + number
            }
            else if (temp == 15){
                number = "F" + number
            }
            
           
        num =BigInt( (num/BigInt(base)))
        // console.log(num); 
    }
    return number;
}