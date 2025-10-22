function subscribe () {
    const subscribeElement = document.querySelector('.subscribe');

    if (subscribeElement.innerText === 'Subscribe') {
        subscribeElement.innerHTML = 'Subscribed' ;
        subscribeElement.classList.add('subscribed-style');
    } else {
        subscribeElement.innerHTML = 'Subscribe';
        subscribeElement.classList.remove('subscribed-style');
    }

}

function totalCost() {
    const inputElement = document.querySelector('.amount');
    let cost = Number(inputElement.value);
    if (cost === 0) {
        cost = cost;
        document.querySelector('.totalAmount').innerHTML = `Total Amount = $${cost}`;
    }
    else if (cost < 50) {
        cost = ((cost * 100) + 1000) / 100;
        document.querySelector('.totalAmount').innerHTML = `Total Amount = $${cost}`;
    }
    else if (cost >= 50) {
        cost = cost;
        document.querySelector('.totalAmount').innerHTML = `Total Amount = $${cost}`;
    }
}
function pressEnterKey(event) {
    if (event.key === 'Enter') {
        totalCost();
    }
}