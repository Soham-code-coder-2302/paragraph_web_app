function p_1() {
var array_1=[];

for ( i = 1; i <= 6; i++) {
 array_1.push(document.getElementById(i+"_text").value);

}
document.getElementById("output_p1").innerHTML=array_1.join(" ");
}

function p_2() {
    var array_1=[];
    
    for ( i = 7; i <= 12; i++) {
     array_1.push(document.getElementById(i+"_text").value);
    
    }
    document.getElementById("output_p2").innerHTML=array_1.join(" ");
    }