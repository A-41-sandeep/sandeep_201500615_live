var Student=document.getElementById("name");
var roll=document.getElementById("rollno");
var college=document.getElementById("college");
var date=document.getElementById("date");

setTimeout(addText,5000);

function addText(){
Student.innerText="[Sandeep kumar]";
roll.innerText="[201500615]";
college.innerText="GLA University,Mathura";
var Todaydate=new Date();
var td=Todaydate.getDate()+'-'+Todaydate.getMonth() +'-'+Todaydate.getFullYear();
date.innerText=td;
}