$(document).ready(function(){
    setTable();
 
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
 
});

function setTable(){
    $("#courseTable").empty();
 
    $("#courseTable").append(
        "<tr><th>周次</th><th>時間</th><th>劇名</th></tr>"
    );
    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;
 
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]=="不上課"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }else if(topicsArray[x]=="期中考週"){
            trSpecial = "<tr style='background-color:lightgray'>";
        }else if(topicsArray[x]=="出門踏青"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial +
            "<td>"+ (x+1) +"</td>"+
            "<td>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>" + topicsArray[x]+"</td>"+
            "</tr>"
        ); 
    }
}
 
function showAlert(){
    let myVar = setInterval(() => {
        let currentTime = new Date(); 
        document.getElementById("showTime").innerHTML=currentTime.toLocaleTimeString();
        },1000 );  
    }
