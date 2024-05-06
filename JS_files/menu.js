

/* Menu navigation bar button(s)*/
const burgerbtn= document.querySelector("#burgerbtn");
const burgermenu = document.querySelector("#burgermenu");
const pastabtn= document.querySelector("#pastabtn");
const pastamenu = document.querySelector("#pastamenu");
const breakfastbtn= document.querySelector("#breakfastbtn");
const breakfastmenu = document.querySelector("#breakfastmenu");
const veganbtn= document.querySelector("#veganbtn");
const veganmenu = document.querySelector("#veganmenu");

/* Add to Order and Submit Order Form button(s)*/
const burritobtn = document.querySelector("#burritobtn");
const omelettebtn = document.querySelector("#omelettebtn");
const chickenwafflesbtn = document.querySelector("#chickenwafflesbtn");
const saladbtn = document.querySelector("#saladbtn");
const joebtn = document.querySelector("#joebtn");
const cheeseburgerbtn = document.querySelector("#cheeseburgerbtn");
const farmercharmbtn = document.querySelector("#farmercharmbtn");
const pizzabtn = document.querySelector("#pizzabtn");
const tofubtn = document.querySelector("#tofubtn");
const alfredobtn = document.querySelector("#alfredobtn");
const lasagnabtn = document.querySelector("#lasagnabtn");
const spaghettibtn = document.querySelector("#spaghettibtn");
const submitbtn = document.querySelector("#submitbtn");
const foodsubmitform = document.getElementById("foodsubmitform");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenum");
const debitCard = document.getElementById("debitcard");
const cash = document.getElementById("cash");

/* Variables to keep track of quantities of each food item for the order form*/
var cheeseborderquant=0, farmercharmorderquant=0, sloppyjoeorderquant=0, chickwafforderquant=0, 
burritoorderquant=0, omeletteorderquant=0, pizzaorderquant=0, tofuorderquant=0, saladorderquant=0,
 alfredoorderquant=0, lasagnaorderquant=0, spaghettiorderquant = 0;
/* Variables for the select quantity input of each food item for the order form*/
const burritoquantity = document.querySelector("#burritoquantity");
const omelettequantity = document.querySelector("#omelettequantity");
const chickenwafflesquantity = document.querySelector("#chickenwafflesquantity");
const saladquantity = document.querySelector("#saladquantity");
const joequantity = document.querySelector("#joequantity");
const cheeseburgerquantity = document.querySelector("#cheeseburgerquantity");
const farmercharmquantity = document.querySelector("#farmercharmquantity");
const pizzaquantity = document.querySelector("#pizzaquantity");
const tofuquantity = document.querySelector("#tofuquantity");
const alfredoquantity = document.querySelector("#alfredoquantity");
const lasagnaquantity = document.querySelector("#lasagnaquantity");
const spaghettiquantity = document.querySelector("#spaghettiquantity");

/* Variables for totals in order form*/
let orderTotal = 0;
let tax = 0;
let taxTotal=0;

const foodformdisplay = document.querySelector(".checkoutcontainer");
/*Function to check the quantity of a food item to remove from order form*/
function checkQuantity(quantity, eleid){
    if(quantity==0){
        document.getElementById(eleid).remove();
    }
}

foodsubmitform.addEventListener('submit', e => {


    validation();
});

function validation(){
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const phoneNumberValue = phoneNumber.value.trim();
   const debitCardValue = debitCard.value;
   const cashValue = cash.value;

   if (firstNameValue == "" || lastNameValue =="" || emailValue == "" || phoneNumberValue == "") {
    alert("Please fill in all blank fields in your contact info.")
    return false;
   }
else {
alert("Thank you for your order! Your food will be ready in 30-45 minutes.");
return true;
location.reload;
}}

/* Event listeners and functions for the add to order buttons which get the quantity from the quantity select input,
then calculate the cost and tax and add that to the total before sending values to function to add text to order form display*/
cheeseburgerbtn.addEventListener('click', () => {
    var cheeseburgerquantity = document.querySelector("#burgerquantity");
    var quantity = cheeseburgerquantity.value;
    cheeseborderquant= cheeseborderquant + Number(quantity);
    tax+=((quantity * 14.99)* .0625);
    orderTotal+=(quantity * 14.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(cheeseborderquant, "Amazing Cheeseburger $14.99","itemsInCart1");
});

joebtn.addEventListener('click', () => {
    var joequantity = document.querySelector("#joequantity");
    var quantity = joequantity.value;
    sloppyjoeorderquant = sloppyjoeorderquant + Number(quantity);
    tax+=((quantity * 10.99)* .0625);
    orderTotal+=(quantity * 10.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(sloppyjoeorderquant, "The Joe $10.99","itemsInCart2");
});


lasagnabtn.addEventListener('click', () => {
    var lasagnaquantity = document.querySelector("#joequantity");
    var quantity = lasagnaquantity.value;
    lasagnaorderquant = lasagnaorderquant + Number(quantity);
    tax+=((quantity * 11.99)* .0625);
    orderTotal+=(quantity * 11.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(lasagnaorderquant, "Lasagna $10.99","itemsInCart12");
});


farmercharmbtn.addEventListener('click', () => {
    var farmercharmquantity = document.querySelector("#farmercharmquantity");
    var quantity = farmercharmquantity.value;
    farmercharmorderquant+=Number(quantity);
    tax+=((quantity * 13.99)* .0625);
    orderTotal+=(quantity * 13.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(farmercharmorderquant, "Farmer Charmer $13.99","itemsInCart3");
});

pizzabtn.addEventListener('click', () => {
    var pizzaquantity = document.querySelector("#pizzaquantity");
    var quantity = pizzaquantity.value;
    pizzaorderquant+= Number(quantity);
    tax+=((quantity * 14.99)* .0625);
    orderTotal+=(quantity * 14.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(pizzaorderquant, "Pizza $14.99","itemsInCart4");
});

tofubtn.addEventListener('click', () => {
    var tofuquantity = document.querySelector("#tofuquantity");
    var quantity = tofuquantity.value;
    tofuorderquant+= Number(quantity);
    tax+=((quantity * 11.79)* .0625);
    orderTotal+=(quantity * 11.79)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(tofuorderquant, "Tofu $11.79","itemsInCart5");
});

saladbtn.addEventListener('click', () => {
    var saladquantity = document.querySelector("#saladquantity");
    var quantity = saladquantity.value;
    saladorderquant+= Number(quantity);
    tax+=((quantity * 9.50)* .0625);
    orderTotal+=(quantity * 9.50)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(saladorderquant, "Salad $9.50","itemsInCart6");
});

alfredobtn.addEventListener('click', () => {
    var alfredoquantity = document.querySelector("#alfredoquantity");
    var quantity = alfredoquantity.value;
    alfredoorderquant+= Number(quantity);
    tax+=((quantity * 12.99)* .0625);
    orderTotal+=(quantity * 12.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(alfredoorderquant, "Fettuccine Alfredo $12.99","itemsInCart7");
});

spaghettibtn.addEventListener('click', () => {
    var spaghettiquantity = document.querySelector("#spaghettiquantity");
    var quantity = spaghettiquantity.value;
    spaghettiorderquant+= Number(quantity);
    tax+=((quantity * 12.99)* .0625);
    orderTotal+=(quantity * 12.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(spaghettiorderquant, "Spaghetti $12.99","itemsInCart8");
});

burritobtn.addEventListener('click', () => {
    var burritoquantity = document.querySelector("#burritoquantity");
    var quantity = burritoquantity.value;
    burritoorderquant+= Number(quantity);
    tax+=((quantity * 8.99)* .0625);
    orderTotal+=(quantity * 8.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(burritoorderquant, "Breakfast Burrito $8.99","itemsInCart9");
});

omelettebtn.addEventListener('click', () => {
    var omelettequantity = document.querySelector("#omelettequantity");
    var quantity = omelettequantity.value;
    omeletteorderquant+= Number(quantity);
    tax+=((quantity * 10.99)* .0625);
    orderTotal+=(quantity * 10.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 
    displayFood(omeletteorderquant, "4 Egg Omelette $10.99","itemsInCart10");
});

chickenwafflesbtn.addEventListener('click', () => {
    var chickenwafflesquantity = document.querySelector("#chickenwafflesquantity");
    var quantity = chickenwafflesquantity.value;
    chickwafforderquant+= Number(quantity);
    tax+=((quantity * 13.99)* .0625);
    orderTotal+=(quantity * 13.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 
    displayFood(chickwafforderquant, "Chicken & Waffles $13.99","itemsInCart11");
});

veganbtn.addEventListener('click', () => {

    if (veganmenu.style.display === "none") {
        veganmenu.style.display = "grid";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="none";
        pastamenu.style.display ="none";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="underline";
        document.getElementById("pastabtn").style.textDecoration="none";
        document.getElementById("breakfastbtn").style.textDecoration="none";
    }
    else {
        veganmenu.style.display = "none";
    }
});

pastabtn.addEventListener('click', () => {

    if (pastamenu.style.display === "none") {
        pastamenu.style.display = "grid";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="none";
        veganmenu.style.display ="none";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="underline";
        document.getElementById("breakfastbtn").style.textDecoration="none";
    }
    else {
        pastamenu.style.display = "none";
    }
});

breakfastbtn.addEventListener('click', () => {

    if (breakfastmenu.style.display === "none") {
        veganmenu.style.display = "none";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="grid";
        pastamenu.style.display ="none";
        document.getElementById("breakfastbtn").style.textDecoration="underline";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="none";
    }
    else {
        breakfastmenu.style.display = "none";
    }
});

burgerbtn.addEventListener('click', () => {

    if (burgermenu.style.display === "none") {
        burgermenu.style.display = "grid";
        veganmenu.style.display ="none";
        breakfastmenu.style.display ="none";
        pastamenu.style.display ="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="none";
        document.getElementById("breakfastbtn").style.textDecoration="none";
        document.getElementById("burgerbtn").style.textDecoration="underline";
    }
    else {
        burgermenu.style.display = "grid";
    }
});

/* Takes quantity, food item and price, and where to display in order form*/
function displayFood(foodquantity, foodstring, itemsCart) {
        var outputString = "(" + foodquantity + ") " + foodstring;
        document.getElementById(itemsCart).innerHTML = outputString;
        document.getElementById(itemsCart).style.display="block";
        foodformdisplay.style.display="block";
}

/* Content to hide and load in when page is loaded*/
document.addEventListener('DOMContentLoaded',()=>{
    console.log("content loaded");
    veganmenu.style.display ="none";
    burgermenu.style.display ="grid";
    breakfastmenu.style.display ="none";
    pastamenu.style.display ="none";
    document.getElementById("burgerbtn").style.textDecoration="underline";
    document.getElementById("veganbtn").style.textDecoration="none";
    document.getElementById("pastabtn").style.textDecoration="none";
    document.getElementById("breakfastbtn").style.textDecoration="none";
});