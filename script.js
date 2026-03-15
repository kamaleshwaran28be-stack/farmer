document.getElementById("profitForm").addEventListener("submit", function(e){

e.preventDefault();

let crop = document.getElementById("crop").value;
let cost = parseInt(document.getElementById("cost").value);
let price = parseInt(document.getElementById("price").value);

let profit = price - cost;
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("profitForm").addEventListener("submit", function(e){

e.preventDefault();

let crop = document.getElementById("crop").value;
let cost = parseInt(document.getElementById("cost").value);
let price = parseInt(document.getElementById("price").value);

let profit = price - cost;

document.getElementById("result").innerText = "Profit = ₹" + profit;

fetch("/  https://billi-extravertish-nondefectively.ngro/save", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
crop_name: crop,
cost: cost,
selling_price: price,
profit: profit
})
});

});

});
document.getElementById("result").innerText = "Profit = ₹" + profit;

fetch("/https://billi-extravertish-nondefectively.ngro/save",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
crop_name:crop,
cost:cost,
selling_price:price,
profit:profit
})
});

});