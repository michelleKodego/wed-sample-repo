
function g(){

   let g_input = document.getElementById("num1").value;
   let kg_input = document.getElementById("num2");
   let mg_input = document.getElementById("num3");

   let kg = (  g_input / 1000);
   kg_input.value = kg;

   let mg = (g_input * 1000);
   mg_input.value = mg;

}

function kg(){

    let g_input = document.getElementById("num1");
    let kg_input = document.getElementById("num2").value;
    let mg_input = document.getElementById("num3");
 
    let g = (  kg_input * 1000);
    g_input.value = g;
 
    let mg = (kg_input * 1000000);
    mg_input.value = mg;
 
 }

function reset(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";

}
 