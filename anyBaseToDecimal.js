function anyNumberToDecimal(number,base){ 
    let count = 0;
    let sum =0n;
    for (let i= number.length-1;i>=0;i--){
        
        let alpha = (number[i]) ;
        if (Number.isNaN(Number(alpha)) && 16 != base){
            console.log("Enter a valid input !" );
            return false;
        }
        
        if (Number.isNaN(Number(alpha)) && base == 16){
            if (alpha == "A" || alpha == "a"){
                alpha = 10 ;
            }
            else if (alpha == "B" || alpha == "b"){
                alpha = 11 ;
            }
            else if (alpha == "C" || alpha == "c"){
                alpha = 12 ;
            }
            else if (alpha == "D" || alpha == "d"){
                alpha = 13 ;
            }
            else if (alpha == "E" || alpha == "e"){
                alpha = 14 ;
            }
            else if (alpha == "F" || alpha == "f"){
                alpha = 15 ;
            }
        }
        else if (alpha >= base){
            return ("Not a valid number");
        }
        sum += BigInt(Math.pow(base,count++))*BigInt(alpha);
    }
    return(sum)
}
// console.log(anyNumberToNumber("102010101",2));
