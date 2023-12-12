var cel=document.getElementById("cel");
var fen=document.getElementById("fen");

cel.addEventListener('input',function(){
    let c=cel.value;
    let f=(c*9/5)+32;
    if(!Number.isInteger(f)){
     f=f.toFixed(4);
    }
    fen.value=f;
})
 
fen.addEventListener('input',function(){
    let f=fen.value;
    let c=(f-32)*5/9;
    if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
    cel.value=c;
})