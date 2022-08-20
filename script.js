var div=document.createElement("div");
div.innerHTML=`<input type="text"id="txt">
<button type="button" onclick="foo()">Search</button>
<div id="food"></div>`;
document.body.append(div);

async function foo(){
    
    let cc=document.getElementById("txt").value;
    let res= await fetch(` https://foodish-api.herokuapp.com/api/images/${cc}`);
    let res1= await res.json();
    result=res1.image;
    console.log(result);
    document.getElementById("food").innerText=result;

}
foo();