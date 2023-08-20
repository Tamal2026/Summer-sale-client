function calculateHistory(history){
    const calculateHistoryAll = document.getElementById('calculate-history');
    const count = calculateHistoryAll.childElementCount; // Corrected line
    
    const p = document.createElement('p');
    p.innerHTML =  `${count + 1}. ${history}`; // Corrected line
    calculateHistoryAll.appendChild(p);
}



const calculateHistoryAll = document.getElementById('calculate-history');
const capElement = document.getElementById('cap');
const capTitleElement = document.getElementById('cap-title');
const calculateHistoryElement = document.getElementById('calculate-history');

capElement.addEventListener('click',function() {
    const historyElement = element.innerText;
    
});

const applyBtn = document.getElementById('apply');
if (totalElement > 200) {
    applyBtn.removeAttribute('disabled');
} else {
    applyBtn.setAttribute('disabled', 'true');
}
}

// document.getElementById('purchase-btn').addEventListener('click',function(event){

//     const totalTk = document.getElementById('total');
//     const makePurchase = document.getElementById('purchase-btn')
//     console.log("kk");
//     if(totalTk > 0){
// makePurchase.removeAttribute('disabled')
//     }
// })

}
}
