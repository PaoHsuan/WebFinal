$(document).ready(function(){
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds); //毫秒
        //使用毫秒轉日期，日期為隔週，因此以7的倍數計算
        $("#courseTable").append(
            "<tr>"+
            "<td>"+ (x+1) +"</td>"+ //場次
            "<td>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+ //將豪秒轉為日期，使用.slice()去除前綴的年份。
            "<td>"+ topicsArray[x]+"</td>"+
            "</tr>"
        );
        $("tr:odd").css("background-color", "lightgray");
    }
});

$(function(){
    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
    });
}); 

// function showValue(){
//     var v = document.getElementById("datepicker").value; 
//     alert(v);
//     //document.write(typeof(v));
// };

// const submitBtn = document.querySelector('[data-action="submit"]');
// submitBtn.addEventListener("click", processFormData);
// $(function processFormData(e){
//     const date = element.name.date.value;
//     alert(date);
// });