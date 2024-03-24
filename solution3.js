
// Challenge 3: Net Salary Calculator (Toy Problem)

// This function is for calculating NHIF deduction according to your gross salary.
// First we will subtract the nhIfDeduction from grossmonth (which represents monthly gross salary) then we will subtract taxes (PAYE) in a different function. 

function nhIfDeduction(grossmonth){  
    if(grossmonth >= 0 && grossmonth <= 5999){
       return grossmonth - 150 // 150 is the NHIF deduction for the specified salary group.
    }
    else if(grossmonth >= 6000 && grossmonth <= 7999){
        return grossmonth - 300
    }
    else if(grossmonth >= 8000 && grossmonth <= 11999){
        return grossmonth - 400
    }
    else if(grossmonth >= 12000 && grossmonth <=14999){
        return grossmonth - 500
    }
    else if(grossmonth >= 15000 && grossmonth <= 19999){
        return grossmonth - 600
    }
    else if(grossmonth >= 20000 && grossmonth <= 24999 ){
        return grossmonth - 750
    }
    else if(grossmonth >= 25000 && grossmonth <= 29999 ){
        return grossmonth - 850
    }
    else if(grossmonth >= 30000 && grossmonth <= 34999 ){
        return grossmonth - 900
    }
    else if(grossmonth >= 35000 && grossmonth <= 39999 ){
        return grossmonth - 950
    }
    else if(grossmonth >= 40000 && grossmonth <= 44999 ){
        return grossmonth - 1000
    }
    else if(grossmonth >= 45000 && grossmonth <= 49999 ){
        return grossmonth - 1100
    }
    else if(grossmonth >= 50000 && grossmonth <= 59999 ){
        return grossmonth - 1200
    }
    else if(grossmonth >= 60000 && grossmonth <= 69999 ){
        return grossmonth - 1300
    }
    else if(grossmonth >= 70000 && grossmonth <= 79999 ){
        return grossmonth - 1400
    }
    else if(grossmonth >= 80000 && grossmonth <= 89999 ){
        return grossmonth - 1500
    }
    else if(grossmonth >= 90000 && grossmonth <= 99999 ){
        return grossmonth - 1600
    }
    else if(grossmonth >= 100000 ){
        return grossmonth - 1700
    }
    
}
// In this second function we'll calculate the net salary by subtracting the tax percentage by 100% in order to remain with the net salary percentage, then we'll multiply it by the deductions variable

function payeTotal(nhIfDeduction){
    if( nhIfDeduction <= 24000 ){
        return deductions * 0.9  // tax is 10% and 100 - 10 is equal to 90% which is equal to 0.9 
   }
   else if( nhIfDeduction >= 24001 && nhIfDeduction <= 32333 ){
    return deductions * 0.75   // tax is 25% and 100 - 25 is equal to 75% which is equal to 0.75
   }
   else if(nhIfDeduction >= 32334 && nhIfDeduction <= 500000 ){
    return deductions * 0.7   // tax is 30% and 100 - 30 is equal to 70% which is equal to 0.7
   }
   else if(nhIfDeduction >= 500001 && nhIfDeduction <= 800000 ){
    return deductions * 0.675  // tax is 32.5% and 100 - 32.5 is equal to 67.5% which is equal to 0.675
   }
   else if(nhIfDeduction > 800000 ){
    return deductions * 0.65  // tax is 35% and 100 - 35 is equal to 65% which is equal to 0.65
   }

}

 
let deductions = nhIfDeduction(18000) // this is where you input your gross salary. Then the code will run and output your net salary. 
// console.log(deductions)
console.log(payeTotal(deductions)) // this is where you get your net salary





// console.log(`Input your basic salary here ${basicSalary()}`)
// console.log(`Input your total benefits here ${allBenefits()}`)

// grossSalary()
// console.log(grossSalary())