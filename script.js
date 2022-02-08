function bookCar1(){
    document.getElementById('all-card').style.display = "none";
    document.getElementById('main-order').style.display = "block";
}
function bookCar2(){
    document.getElementById('all-card').style.display = "none";
    document.getElementById('main-order-1').style.display = "block";
}
function bookCar3(){
    document.getElementById('all-card').style.display = "none";
    document.getElementById('main-order-2').style.display = "block";
}
function bookCar4(){
    document.getElementById('all-card').style.display = "none";
    document.getElementById('main-order-3').style.display = "block";
}
function bookCar5(){
    document.getElementById('all-card').style.display = "none";
    document.getElementById('main-order-4').style.display = "block";
}
function hendelOrders(orders,isIncrease){
    const order = document.getElementById(orders);
    const orderInNumber = parseInt(order.innerText);
    let totalOrders = orderInNumber;
    if(isIncrease == true && totalOrders < 10){
        totalOrders = orderInNumber + 1;
    }
    order.innerText = totalOrders;
   calculator()
}
function calculator(){
    const model3 = parseInt(document.getElementById('order3').innerText);
    const modelY = parseInt(document.getElementById('orderY').innerText);
    const modelS = parseInt(document.getElementById('orderS').innerText);
    const modelX = parseInt(document.getElementById('orderX').innerText);
    const charger = parseInt(document.getElementById('charger').innerText);
    const totalAmount1 = model3 * 53940;
    document.getElementById('totalPriceMode-3').innerText = totalAmount1;
    const totalAmount2 = modelY * 58690;
    document.getElementById('totalPriceModel-y').innerText = totalAmount2;
    const totalAmount3 = modelS * 123740;
    document.getElementById('totalPriceMode-s').innerText = totalAmount3;
    const totalAmount4 = modelX * 120440;
    document.getElementById('totalPriceMode-x').innerText = totalAmount4;
    const totalAmountCharger = charger * 1389;
    document.getElementById('totalPriceCharger').innerText = totalAmountCharger;
}