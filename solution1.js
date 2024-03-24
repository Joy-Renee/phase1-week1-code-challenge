
// Challenge 1: Student Grade Generator (Toy Problem)

function studentMarks(mark){
    if(mark > 79 && mark <= 100){
        return 'A'
    }
    else if(mark >= 60 && mark <= 79){
        return 'B'
    }
    else if(mark > 49 && mark <= 59){
        return 'C'
    }
    else if(mark >= 40 && mark <= 49){
        return 'D'
    }
    else if(mark >= 0 && mark < 40 ){
        return 'E'
    }
}

studentMarks(99) // This is where you input student marks

console.log(studentMarks(99))
