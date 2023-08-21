
function applyDiscount(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount.toFixed(2) +"Tk";
}

function calculateHistory(history){
    const calculateHistoryAll = document.getElementById('calculate-history');
    const count = calculateHistoryAll.childElementCount; 
    const p = document.createElement('p');
    p.innerHTML =  `${count + 1}. ${history}`; 
    calculateHistoryAll.appendChild(p);
}

function updateTotal() {
    const totalElement = document.getElementById('total');
    totalElement.innerText = totalPrice.toFixed(2) + "TK";
}

function updateTotalElementWithTk(id, amount) {
    const totalElement = document.getElementById(id);
    totalElement.innerText = amount.toFixed(2) + "TK";
}

function resetAll() {
    totalPrice = 0;
    updateTotal();
    document.getElementById('calculate-history').innerHTML = '';
    setTheTotal('total-price', '0.00');
    document.getElementById('discount-price').innerText = '0.00';
    document.getElementById('total').innerText = '0.00Tk';
    const makePurchaseButton = document.getElementById('purchase-btn');
    makePurchaseButton.setAttribute('disabled', 'true');
}
function textArea(textInput){
    const text = document.getElementById(textInput);
    const textString = text.innerText;
    const textValue = parseFloat(textString);
    return textValue;
}
function setTheTotal(totalAmount,total){
    const finalTotal =document.getElementById(totalAmount);
    finalTotal.innerText = total;
}
// function updateMakePurchaseButton() {
//     const totalValue = textArea('total-price');
//     const makePurchaseButton = document.querySelector('#purchase-btn'); 
//     if (totalValue > 0) {
//         makePurchaseButton.removeAttribute('disabled');
//     } else {
//         makePurchaseButton.setAttribute('disabled', 'true');
//     }
// }
let totalPrice = 0;
document.getElementById('cap').addEventListener('click',function(){
    const capValue =  textArea('cap-price');
    const currentTotalPrice =  textArea('total-price'); 
     totalPrice += capValue; 
    const capPrice = currentTotalPrice + capValue
    currentTotalPrice.innerText = capPrice;
    setTheTotal('total-price', capPrice);
    updateTotal();
    calculateHistory('Sports Black Cap');
    updateTotalElementWithTk('total-price',capPrice);
});

document.getElementById('jursey').addEventListener('click', function() {
    const jurseyValue = textArea('jursey-price');
    const currentTotalPrice =  textArea('total-price'); 
    totalPrice += jurseyValue;
    const jurseyPrice = jurseyValue + currentTotalPrice; 
    jurseyPrice.innerText = jurseyPrice;
    setTheTotal('total-price', jurseyPrice);
    updateTotal();
    calculateHistory('Full Jursey Set');
    updateTotalElementWithTk('total-price',jurseyPrice);
});

document.getElementById('shoe').addEventListener('click', function() {
    const shoeValue = textArea('shoe-price');
    const currentTotalPrice =  textArea('total-price'); 
    totalPrice += shoeValue;
    const shoePrice = shoeValue + currentTotalPrice;
    shoePrice.innerText =shoePrice;
    setTheTotal('total-price', shoePrice);
    updateTotal();
    calculateHistory('Sports Cates');
    updateTotalElementWithTk('total-price',shoePrice);
});

document.getElementById('chair').addEventListener('click',function(){
    const chairValue = textArea('chair-price');
    let totalPrice = textArea('total-price');
    totalPrice += chairValue;
    const chairPrice = chairValue + totalPrice;
    chairPrice.innerText = chairPrice;
    setTheTotal('total-price', chairPrice);
    updateTotal();
    calculateHistory('Single Relax Chair')
    updateTotalElementWithTk('total-price',chairPrice);
});
document.getElementById('childern').addEventListener('click', function() {
    const childernValue = textArea('childern-price');
    const currentTotalPrice =  textArea('total-price'); 
    totalPrice += childernValue;
    const childeren = childernValue + currentTotalPrice;
    childeren.innerText = childeren;
    setTheTotal('total-price',  childeren);
    updateTotal();
    calculateHistory('Childern Play');
    updateTotalElementWithTk('total-price', childeren);
});

document.getElementById('sofa').addEventListener('click', function() {
    const sofaValue = textArea('sofa-price');
    const currentTotalPrice =  textArea('total-price'); 
    totalPrice += sofaValue;
    const sofa = sofaValue + currentTotalPrice;
    sofa.innerText = sofa;
    setTheTotal('total-price', sofa);
    updateTotal();
    calculateHistory('Flexible Sofa');
    updateTotalElementWithTk('total-price',sofa);
});
document.getElementById('apply').addEventListener('click',function() {
    
    const originalPrice = textArea('total-price');
    
    const discountedPrice = applyDiscount(originalPrice, 20);
    
    const discountPriceElement = document.getElementById('total');
    discountPriceElement.innerText = discountedPrice + "TK"; 
    
    const totalElement = document.getElementById('discount-price');
    totalElement.innerText = (originalPrice - discountedPrice).toFixed(2);
});

document.getElementById('apply').addEventListener('click', function() {
    const originalPrice = textArea('total-price');
    const discountedPrice = applyDiscount(originalPrice, 20);
    const totalElement = document.getElementById('total');
    totalElement.innerText = discountedPrice;
});

document.getElementById('apply').addEventListener('click', function() {
    const originalPrice = textArea('total-price');
    const discountedPrice = applyDiscount(originalPrice, 20);
    const discountAmount = (originalPrice - parseFloat(discountedPrice));
    const totalElement = document.getElementById('total');
    totalElement.innerText = discountedPrice;
    const discountPriceElement = document.getElementById('discount-price');
    discountPriceElement.innerText = discountAmount.toFixed(2) + "Tk";
});
document.getElementById('apply-coupon').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyBtn = document.getElementById('apply');
    const totalTk = textArea('total-price');
    
    if (totalTk > 200 && text === 'SELL200') {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', 'true');
    }
});
document.getElementById('total-price').addEventListener('input', function(event) {
    const totalValue = parseFloat(event.value);
    const purchaseBtn = document.getElementById('purchase-btn');
    if (totalValue > 0) {
        purchaseBtn.removeAttribute('disabled');
    } else {
        purchaseBtn.setAttribute('disabled', 'true');
    }
});
