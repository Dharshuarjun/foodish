var div=document.createElement("div");
div.innerHTML=`
<h1>Foodish</h1>
<h3>Enter a food name:(idly,dosa,pizza,burger etc..)</h3>
<input type="text"id="txt">
<button type="button" onclick="getData()">Search</button>
<div id="food"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function getData(){
    
    let cc=document.getElementById("txt").value;
    let res= await fetch(` https://foodish-api.herokuapp.com/api/images/${cc}`);
    let res1= await res.json();
    result=res1.image;
    console.log(result);
    document.getElementById("food").innerText=`URL=${result}`;

}
