let minute=document.getElementById("min")
let second=document.getElementById("sec")
let hour=document.getElementById("hr")
let play=document.getElementById("play")
// ##################################################
let date=document.getElementById("date")
let month=document.getElementById("month")
let year=document.getElementById("year")
// #########################################################
let AMPM=document.getElementById("AMPM")

function datetime(){
    let datetime=new Date();
    let curr_min=datetime.getMinutes()
    minute.innerHTML=curr_min
    let curr_sec=datetime.getSeconds()
    second.innerHTML=curr_sec
    let curr_hour=datetime.getHours()
    if (curr_hour>12){
        hour.innerHTML=curr_hour-12
        
    }
    let curr_date=datetime.getDay()
    date.innerHTML=curr_date
    let curr_month=datetime.getMonth()
    month.innerHTML=curr_month
    let curr_year=datetime.getFullYear()
    year.innerHTML=curr_year
    if (curr_hour>12){
        AMPM.innerHTML="PM"
        
    }
}


