let topicsArray=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "Canvas"
];

let startDate = new Date(); //將startDate宣告為一個Date物件

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay); //new Date中，月份從0開始，因此需-1。
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
var intmonth = 0;
var intday = 0;
var month;
var day;
//setMonthAndDay(intmonth,intday);
function showValue(){
    //document.write(intday);
    var v = document.getElementById("datepicker").value; 
    month = v.substr(0,2);
    day = v.substr(3,2);
    intmonth = parseInt(month, 10);
    intday = parseInt(day, 10);
    alert(v);  //03/17/2020
    //document.write(v.substr(0,2));
    //document.write(v.substr(3,2));
    //document.write(typeof(intmonth));
    //document.write(intday);
    //document.write(intmonth);
    setMonthAndDay(intmonth,intday);
};
//let a = 5;
document.write(intmonth);