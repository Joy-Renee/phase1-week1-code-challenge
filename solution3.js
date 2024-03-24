
// Challenge 3: Net Salary Calculator (Toy Problem)

// function basicSalary(salary){}
// function allBenefits(benefits){}

// let grossmonth = salary + benefits


//nhIfDeduction(payeTotal);
//console.log(nhIfDeduction(payeTotal))

function nhIfDeduction(grossmonth){
    if(grossmonth >= 0 && grossmonth <= 5999){
       return grossmonth - 150 
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




function payeTotal(nhIfDeduction){
    if( nhIfDeduction <= 24000 ){
        return deductions * 0.1
   }
   else if( nhIfDeduction >= 24001 && grossmonth <= 32333 ){
    return deductions * 0.25
   }
   else if(nhIfDeduction >= 32334 && grossmonth <= 500000 ){
    return deductions * 0.3
   }
   else if(nhIfDeduction >= 500001 && grossmonth <= 800000 ){
    return deductions * 0.325
   }
   else if(nhIfDeduction > 800000 ){
    return deductions * 0.35
   }

}

console.log(nhIfDeduction(5000))

let deductions = nhIfDeduction(5000)

console.log(payeTotal(5000))


function netSalary(nhIfDeduction, payeTotal){
    let resulsts = nhIfDeduction() - payeTotal()
    return resulsts
} 

console.log(netSalary())


// console.log(`Input your basic salary here ${basicSalary()}`)
// console.log(`Input your total benefits here ${allBenefits()}`)

// grossSalary()
// console.log(grossSalary())