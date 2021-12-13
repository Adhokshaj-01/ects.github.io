function input(){
    var max=document.getElementById("max-gpa").value;
    var min=document.getElementById("min-gpa").value;
    var gpa=document.getElementById("GPA").value;
    var ects = [max - gpa] / [max - min]*3+1;
    document.getElementById("ECTS").innerHTML=ects.toFixed(1); 
    
    
}