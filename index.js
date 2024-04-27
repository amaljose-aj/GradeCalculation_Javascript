const tempbutton = document.getElementById("gradebutton")
const grade = document.getElementById("grade")
const outstanding = '❤️';
const failingGrade = '😄';
const belowAverageGrade = '😕';
const averageGrade = '😐';
const aboveAverageGrade = '🙂';
const excellentGrade = '😃';
function getTemp()
 {
    const GradeId = document.getElementById("marksInput");
    const inputMarks = GradeId.value;
    console.log(inputMarks);
    if(inputMarks>100 || inputMarks<0)
    {
        grade.innerHTML = `Out of Bound, Please Enter Valid Mark`
    }
    else if(inputMarks == 100)
    {
     grade.innerHTML = `Outstanding ${outstanding}`
    }
    else if(inputMarks<100 && inputMarks>90)
    {
        grade.innerHTML = `You passed with A+ Grade ${excellentGrade}`
    }
    else if(inputMarks>80)
    {
        grade.innerHTML = `You passed with B Grade ${aboveAverageGrade}`
    }
    else if(inputMarks>70)
    {
        grade.innerHTML = `You passed with C Grade ${averageGrade}`
    }
    else if(inputMarks>60)
    {
        grade.innerHTML = `You passed with D Grade ${belowAverageGrade}`
    }
    else
    {
        grade.innerHTML = `Congrats, You Failed! ${failingGrade}`
    }


}
tempbutton.addEventListener('click',getTemp)

