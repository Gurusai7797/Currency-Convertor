const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');

// fetch exchange rates from API & update the DOM

function cal() {
  // console.log('ran');
  const currency1 = currencyElOne.value;
  const currency2 = currencyElTwo.value;
  // console.log(currency1, currency2);
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency2];
      // console.log(data);
      // console.log(rate);
      rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;

      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
  // .then((data) => console.log(data));
}

// Event Listeners
currencyElOne.addEventListener('change', cal);
currencyElTwo.addEventListener('change', cal);
amountElOne.addEventListener('input', cal);
amountElTwo.addEventListener('input', cal);
swap.addEventListener('click', () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;

  cal();
});

cal();
