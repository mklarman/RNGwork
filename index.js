var numString = "0210196810271974082920102411325773414208523811173568174333"


var digitFreq= function(numString){
    zeros = numString.split("0").length-1
    ones = numString.split("1").length-1
    twos = numString.split("2").length-1
    threes = numString.split("3").length-1
    fours = numString.split("4").length-1
    fives = numString.split("5").length-1
    sixes = numString.split("6").length-1
    sevens = numString.split("7").length-1
    eights = numString.split("8").length-1
    nines = numString.split("9").length-1
    numbers = numString.length;
    zeroPrcnt = zeros/numbers    
    onePrcnt = ones/numbers     
    twoPrcnt = twos/numbers     
    threePrcnt = threes/numbers     
    fourPrcnt = fours/numbers     
    fivePrcnt = fives/numbers     
    sixPrcnt = sixes/numbers     
    sevPrcnt = sevens/numbers     
    eightPrcnt = eights/numbers     
    ninePrcnt = nines/numbers     

    console.log(zeroPrcnt + onePrcnt + twoPrcnt + threePrcnt + fourPrcnt + fivePrcnt+ sixPrcnt + sevPrcnt + eightPrcnt + ninePrcnt)
  
}


function threeDigitNum(numString){
    num1 = numString[(Math.floor(Math.random() * numString.length ))];
    num2 = numString[(Math.floor(Math.random() * numString.length ))];
    num3 = numString[(Math.floor(Math.random() * numString.length ))];

    return (num1 + num2 + num3)
}

function fourDigitNum(numString){
    num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
    num2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
    num3 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
    num4 = numString.split('')[(Math.floor(Math.random() * numString.length ))];

    return (num1 + num2 + num3 + num4)
}

function numberType (max){
    var type = (Math.floor(Math.random() * max))
    return type
}

function repeat (arr, num){
    return (arr.indexOf(num) === -1) ? false : true
    
}

function firstFive (numString){
    let numbers = []
    let num = 0
    while (numbers.length < 5){
        let version = numberType(69)
        if (version < 9){
            do{
                num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
            }
            while (num == 0);
            num = "0" + num
        }
        if (version >= 9){
            do{
                digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
            }
            while (digit1 > 6 || digit1 == 0);
            digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
            num = digit1.concat(digit2)


        }
        if (repeat (numbers, num) == false){
            numbers.push(num)
        }
    }
    return numbers
}

function moneyBall(numString){
    let num = 0
    let version = numberType(26)
    if (version < 9){
        do{
         num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
        }
        while (num == 0);
        num = "0" + num

    }
    if (version >= 9){
        do{
            digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
        }
        while (digit1 > 2 || digit1 == 0);
        if( digit1 == 2){
            do{
                digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
            }
            while (digit2 > 6);
            num = digit1.concat(digit2)
        }else {
            digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
            num = digit1.concat(digit2)
         }

    }
    return num

}

function megaTicket(){
    return firstFive(numString) + "," + moneyBall(numString)
}


// function megaNum(numString){
//     numType1 = [(Math.floor(Math.random() * 6 ))];
//     if (numType1 == 0){
//         do{
//          num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
            
//     }

//     if (numType1 != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 > 6 || digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     numType2 = [(Math.floor(Math.random() * 6 ))];
//     if (numType2 == 0){
//         do{
//          num2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num2 == 0);
//         num2 = "0" + num2
        
//     }

//     if (numType2 != 0){
//         do{
//             digit3 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit3 > 6 || digit3 == 0);
//         digit4 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num2 = digit3.concat(digit4)
//     }
    
//     numType3 = [(Math.floor(Math.random() * 6 ))];
//     if (numType3 == 0){
//         do{
//          num3 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num3 == 0);
//         num3 = "0" + num3
            
//     }

//     if (numType3 != 0){
//         do{
//             digit5 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit5 > 6 || digit5 == 0);
//         digit6 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num3 = digit5.concat(digit6)
//     }
//     numType4 = [(Math.floor(Math.random() * 6 ))];
//     if (numType4 == 0){
//         do{
//          num4 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num4 == 0);
//         num4 = "0" + num4
            
//     }

//     if (numType4 != 0){
//         do{
//             digit7 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit7 > 6 || digit7 == 0);
//         digit8 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num4 = digit7.concat(digit8)
//     }
//     numType5 = [(Math.floor(Math.random() * 6 ))];
//     if (numType5 == 0){
//         do{
//          num5 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num5 == 0);
//         num5 = "0" + num5
            
//     }

//     if (numType5 != 0){
//         do{
//             digit9 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit9 > 6 || digit9 == 0);
//         digit10 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num5 = digit9.concat(digit10)
//     }
//     numType6 = [(Math.floor(Math.random() * 6 ))];
//     if (numType6 == 0){
//         do{
//          num6 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num6 == 0);
//         num6 = "0" + num6
            
//     }

//     if (numType6 != 0){
//         do{
//             digit11 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit11 > 2 || digit11 == 0);
//         if( digit11 == 2){
//             do{
//                 digit12 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (digit12 > 6);
//             num6 = digit11.concat(digit12)
//         }else {
//             digit12 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             num6 = digit11.concat(digit12)
//          }
//     }   
//     return (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "-" + num5 + "-" + num6)

    
// }
// num1 = ""
// num2 = ""
// num3 = ""
// num4 = ""
// num5 = ""
// num6 = ""



// function megaDraw(numString){
//     megaTicket = []

//     function firstNum(){
//         num1 = ""
//         numType1 = [(Math.floor(Math.random() * 6 ))];
//         if (numType1 == 0){
//             do{
//                 num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (num == 0);
//             num1 = "0" + num1
//             megaTicket.push(num1)
//             console.log(megaTicket)
//         }
//         if (numType1 != 0){
//             do{
//                 digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (digit1 > 6 || digit1 == 0);
//             digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             num1 = digit1.concat(digit2)
//             megaTicket.push(num1)
//             console.log(megaTicket)
        
//         }
        

//     }

// }










// function mega(numString){
//     var i = 0
//     var megaTicket = []
    
//     numType1 = [(Math.floor(Math.random() * 6 ))];
//     if (numType1 == 0){
//         do{
//         num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num == 0);
//         num = "0" + num
//         console.log(num)
//         megaTicket += num
//         console.log(megaTicket)
//         i++
//     }
//     if (numType1 != 0){
//         do{
//         digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 > 6 || digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num = digit1.concat(digit2)
//         console.log(num)
//         megaTicket.push(num)
//         megaTicket += num
//         i++
//     }
//     if(i < 6){
//         mega(numString)
//     } else {
//     return megaTicket
//     }   
    
// }


    









//     // numType2 = [(Math.floor(Math.random() * 6 ))];
//     // numType3 = [(Math.floor(Math.random() * 6 ))];
//     // numType4 = [(Math.floor(Math.random() * 6 ))];
//     // numType5 = [(Math.floor(Math.random() * 6 ))];
//     // numType6 = [(Math.floor(Math.random() * 6 ))];
    
//     // num2 = ""
//     // num3 = ""
//     // num4 = ""
//     // num5 = ""
//     // num6 = ""

    
//     //     megaTicket.push(num)
//     // }
//     // if (numType1 != 0){
//     //     do{
//     //         digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     //     }
//     //     while (digit1 > 6 || digit1 == 0);
//     //     digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     //     num = digit1.concat(digit2)
//     // }

    




// // do{
// //     var num = ""
// //     
// //     if(numType == 0){
// //         do{
// //         num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// //         }
// //         while (num == 0);
// //         num = "0" + num
// //     }
// //     if (numType != 0){
// //         do{
// //             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// //         }
// //         while (digit1 > 6 || digit1 == 0);
// //         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
// //         num = digit1.concat(digit2)
// //     }

// //     function uniqueNum(num){
// //       return (megaTicket.indexOf(num) === -1) ? false : true
// //     }

// //     if (uniqueNum(num) == false){
// //         megaTicket.push(num)
// //     }

// // }

// // while (megaTicket.length < 6);
    

// // console.log(megaTicket)



// num1 = ""
// num2 = ""
// num3 = ""
// num4 = ""
// num5 = ""
// num6 = ""

// var numString = "0210196810271974082920102411325773414208523811173568174333"

// for(i=0;i<6; i++){
//     function firstNumber (numString){

//         numType = [(Math.floor(Math.random() * 6 ))];
//         if (numType == 0){
//             do{
//                 num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (num1 == 0);
//             num1 = "0" + num1
//         }
        
//         if (numType != 0){
//             do{
//                 digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (digit1 > 6 && digit1 == 0);
//             digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             num1 = digit1.concat(digit2)
//         }
//         return num1

//     }

// }
   


// function secNumber (numString){
// numType = [(Math.floor(Math.random() * 6 ))];
//     if (numType == 0){
//         do{
//             num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
//         console.log(num1)
//         }
//     if (numType != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 >= 7 && digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     return num1
// }
// function thirdNumber (numString){
// numType = [(Math.floor(Math.random() * 6 ))];
//     if (numType == 0){
//         do{
//             num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
//         console.log(num1)
//         }
//     if (numType != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 >= 7 && digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     return num1
// }
// function fourthNumber (numString){
// numType = [(Math.floor(Math.random() * 6 ))];
//     if (numType == 0){
//         do{
//             num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
//         console.log(num1)
//         }
//     if (numType != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 >= 7 && digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     return num1
// }
// function fifthNumber (numString){
// numType = [(Math.floor(Math.random() * 6 ))];
//     if (numType == 0){
//         do{
//             num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
//         console.log(num1)
//         }
//     if (numType != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 >= 7 && digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     return num1
// }
// function sixNumber (numString){
// numType = [(Math.floor(Math.random() * 6 ))];
//     if (numType == 0){
//         do{
//             num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (num1 == 0);
//         num1 = "0" + num1
//         console.log(num1)
//         }
//     if (numType != 0){
//         do{
//             digit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while (digit1 >= 7 && digit1 == 0);
//         digit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num1 = digit1.concat(digit2)
//     }
//     return num1
// }
    
// function megaNum(numString){
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var type1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//     var firstNumber =
        
//             if (numType1 == 0){
//         // if single digit number
//                 do{
//                     num1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//                 }
//                 while(num1 == 0);
//         // keep drawing numbers till ranNum is not 0
//                 num1 = "0" + num1
//         // inserts a "0" in front of ranNum
//             }
//             if (numType1 != 0){
//         // if double digit number
//                 firstDigit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//                     while(firstDigit1 >= 7 && firstDigit1 == 0){
//                         firstDigit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//                     }
//             secondDigit1 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             num1 = firstDigit1.concat(secondDigit1)
//             }
            
//             return (num1)
    
// }






// function megaNum(){
// var ticket = ""
// var num = ""
//     while (ticket.length <= 6){
//         var numType = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//         if (numType == 0){
//         // if single digit number
//             do{
//                 num = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while(num == 0);
//         // keep drawing numbers till ranNum is not 0
//             num = "0" + num
//         // inserts a "0" in front of ranNum
//         }

        

//     ticket += num
//     }
//     return ticket
// }

// var numType2 = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//     if (numType2 == 0){
//         // if single digit number
//         do{
//         num2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while(num2 == 0);
//         // keep drawing numbers till ranNum is not 0
//         num2 = "0" + num2
//         // inserts a "0" in front of ranNum
//     }


//         if (numType2 != 0){
//         // if double digit number
//         firstDigit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         while(firstDigit >= 7 && firstDigit == 0){
//             firstDigit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         secondDigit2 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num2 = firstDigit2.concat(secondDigit2)

//     }
//     return (num2)

// var numType3 = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//     if (numType3 == 0){
//         // if single digit number
//         do{
//         num3 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while(num3 == 0);
//         // keep drawing numbers till ranNum is not 0
//         num3 = "0" + num3
//         // inserts a "0" in front of ranNum
//     }


//     if (numType3 != 0){
//         // if double digit number
//         firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         while(firstDigit >= 7 && firstDigit == 0){
//             firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         secondDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num3 = firstDigit.concat(secondDigit)

//     }
//     return (num3)

// var numType4 = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//     if (numType4 == 0){
//         // if single digit number
//         do{
//         num4 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while(num4 == 0);
//         // keep drawing numbers till ranNum is not 0
//         num4 = "0" + num1
//         // inserts a "0" in front of ranNum
//     }


//     if (numType4 != 0){
//         // if double digit number
//         firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         while(firstDigit >= 7 && firstDigit == 0){
//             firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         secondDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num4 = firstDigit.concat(secondDigit)

//     }
//     return (num4)

// var numType5 = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//     if (numType5 == 0){
//         // if single digit number
//         do{
//         num5 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while(num5 == 0);
//         // keep drawing numbers till ranNum is not 0
//         num5 = "0" + num5
//         // inserts a "0" in front of ranNum
//     }


//     if (numType5 != 0){
//         // if double digit number
//         firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         while(firstDigit >= 7 && firstDigit == 0){
//             firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         secondDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num5 = firstDigit.concat(secondDigit)

//     }
//     return (num5)

// var numType6 = Math.floor(Math.random() * 6)
//     // one out of seven chance to be a single digit number
//     if (numType6 == 0){
//         // if single digit number
//         do{
//         num6 = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         while(num6 == 0);
//         // keep drawing numbers till ranNum is not 0
//         num6 = "0" + num6
//         // inserts a "0" in front of ranNum
//     }


//     if (numType6 != 0){
//         // if double digit number
//         firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         while(firstDigit >= 7 && firstDigit == 0){
//             firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         }
//         secondDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//         num6 = firstDigit.concat(secondDigit)

//     }
//     return (num6)
//     return (num1 + "-" + num2 + "-" + num3 + "-" + num4 + "-" + num5 + '-' + num6)
// }



//     num1 = function firstNumber(){
//         var numType = Math.floor(Math.random() * 6)
        
//             do {
//                 getNum = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while (getNum == 0);
//             num1 = "0" + getNum
//         }
//         if (numType > 0){
//             firstDigit = ""
//             secondDigit = ""
//             do{
//                 firstDigit = numString.split('')[(Math.floor(Math.random() * numString.length ))];
//             }
//             while(firstDigit>=7);

//         secondDigit = ranNum
//         num1 = firstDigit.concat(secondDigit) 
//         }
//         return (num1)
//     }
// }




// var emptyString = "";
// var numString = "737328293048463535555282930405857826161711829203049848347362626171192190203948576767574738383920201101010929383484757576765646454535354343434444444444444444444444444444444444444736262796345690602935069823598326590862350968235896235098632596346509"

// emptyString += numString[Math.floor(Math.random() * numString.length)];
// } 
// console.log(emptyString);
// var arrayOfNum = ["28907656782987651111452525266666", "248984982987498249824"]
// console.log(arrayOfNum)
// var digits = arrayOfNum.split(' ')
// console.log(digits)

// function findFrequency(x) {
//  digits = x.split('')
//  for(i=0; i<digits.length; i++){
//      console.log(i)
//  } 
// }