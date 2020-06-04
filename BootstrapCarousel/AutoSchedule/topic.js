let topicsArray = [
    "梨泰院Class", 
    "哈囉掰掰，我是鬼媽媽", 
    "愛的迫降", 
    "期中考週", 
    "THE KING 永遠的君主",
    "機智醫生生活",
    "出門踏青"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);