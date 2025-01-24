const input=document.querySelector("#inputText");
const enter=document.querySelector("#submit");
const display=document.querySelector("#display");

enter.addEventListener("click",()=>calculateAge(new Date(input.value)));

function calculateAge(dob){

    const dobDate=dob.getDate();
    const dobMonth=dob.getMonth();
    const dobYear=dob.getFullYear();

    const date= new Date();
    const currentDate=date.getDate();
    const currentMonth=date.getMonth();
    const currentYear=date.getFullYear();

   if(dob > date){
    alert("Invalid DOB");
    return;
   }
    let age=0;

    let ageYears=currentYear-dobYear;
    let ageMonths=currentMonth-dobMonth;
    let ageDays=currentDate-dobDate;

    if(ageDays<0){
        let prevMonthDays=new Date(currentYear,currentMonth,0).getDate();
        ageDays+=prevMonthDays;
        ageMonths--;
    }
    
    if(ageMonths<0){
        ageMonths+=12;
        ageYears--;
    }
    if(ageYears>0){
        age= `${ageYears} ${ageYears==1?"year":"years"}`;
    }
    else if(ageMonths>0){
        age=`${ageMonths} ${ageMonths==1?"month":"months"}`;
    }
    else {
        age=`${ageDays} ${ageDays==1?"day":"days"}`;
    }

    let birthday=currentDate===dobDate && currentMonth===dobMonth;
    displayAge(age,birthday);
}

function displayAge(age,birthday){
    display.textContent=`${age} ${birthday?"🎉 Happy Birthday!":""}`;

}