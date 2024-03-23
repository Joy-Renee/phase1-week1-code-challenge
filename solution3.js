
// Challenge 3: Net Salary Calculator (Toy Problem)

// function basicSalary(salary){}
// function allBenefits(benefits){}

// let grossmonth = salary + benefits

function nhIfDeduction(grossmonth){
    if(grossmonth <= 5999){
        grossmonth - 150 
    }
    else if(grossmonth >= 6000 && grossmonth <= 7999){
        grossmonth - 300
    }
    else if(grossmonth >= 8000 && grossmonth <= 11999){
        grossmonth - 400
    }
    else if(grossmonth >= 12000 && grossmonth <=14999){
        grossmonth - 500
    }
    else if(grossmonth >= 15000 && grossmonth <= 19999){
        grossmonth - 600
    }
    else if(grossmonth >= 20000 && grossmonth <= 24999 ){
        grossmonth - 750
    }
    else if(grossmonth >= 25000 && grossmonth <= 29999 ){
        grossmonth - 850
    }
    else if(grossmonth >= 30000 && grossmonth <= 34999 ){
        grossmonth - 900
    }
    else if(grossmonth >= 35000 && grossmonth <= 39999 ){
        grossmonth - 950
    }
    else if(grossmonth >= 40000 && grossmonth <= 44999 ){
        grossmonth - 1000
    }
    else if(grossmonth >= 45000 && grossmonth <= 49999 ){
        grossmonth - 1100
    }
    else if(grossmonth >= 50000 && grossmonth <= 59999 ){
        grossmonth - 1200
    }
    else if(grossmonth >= 60000 && grossmonth <= 69999 ){
        grossmonth - 1300
    }
    else if(grossmonth >= 70000 && grossmonth <= 79999 ){
        grossmonth - 1400
    }
    else if(grossmonth >= 80000 && grossmonth <= 89999 ){
        grossmonth - 1500
    }
    else if(grossmonth >= 90000 && grossmonth <= 99999 ){
        grossmonth - 1600
    }
    else if(grossmonth >= 100000 ){
         grossmonth - 1700
    }
    
}

console.log(nhIfDeduction(90001))

/*
function payeTotal(grossmonth){
    if(grossmonth <= 24000 ){
        let tax = nhIf * 0.1
   }
   else if(grossmonth >= 24001 && grossmonth <= 32333 ){

   }
   else if(grossmonth >= 32334 && grossmonth <= 500000 ){

   }
   else if(grossmonth >= 500001 && grossmonth <= 800000 ){

   }
   else if(grossmonth > 800000 ){

   }

}
*/









// console.log(`Input your basic salary here ${basicSalary()}`)
// console.log(`Input your total benefits here ${allBenefits()}`)

// grossSalary()
// console.log(grossSalary())