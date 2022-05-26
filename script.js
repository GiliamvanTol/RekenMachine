document.getElementById("een").addEventListener("click", een);
document.getElementById("twee").addEventListener("click", twee);
document.getElementById("drie").addEventListener("click", drie);
document.getElementById("vier").addEventListener("click", vier);
document.getElementById("vijf").addEventListener("click", vijf);
document.getElementById("zes").addEventListener("click", zes);
document.getElementById("zeven").addEventListener("click", zeven);
document.getElementById("acht").addEventListener("click", acht);
document.getElementById("negen").addEventListener("click", negen);
document.getElementById("nul").addEventListener("click", nul);

document.getElementById("plus").addEventListener("click", plus);
document.getElementById("min").addEventListener("click", min);
document.getElementById("is").addEventListener("click", is);
document.getElementById("keer").addEventListener("click", keer);
document.getElementById("delen").addEventListener("click", delen);


document.getElementById("C").addEventListener("click", C);

function een(){
    display.value += '1';
}
function twee(){ 
        display.value += '2';
}
function drie(){ 
        display.value += '3'; 
}
function vier(){ 
       display.value += '4';  
}
function vijf(){  
        display.value += '5'; 
}
function zes(){ 
        display.value += '6';
}
function zeven(){ 
         display.value += '7';  
}
function acht(){ 
        display.value += '8';  
}
function negen(){  
        display.value += '9'; 
}
function nul(){   
       display.value += '0';  
}
function C(){  
       document.getElementById("display").value = null;
}  
function min(){ 
    display.value += "-";
} 
function plus() {
    display.value += "+";
}
function keer() {
    display.value += "*";
} 
function delen() {
    display.value += "/";
}    
    
function is (){ 
    display.value = eval(display.value);
}