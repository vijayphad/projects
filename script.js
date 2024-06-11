let balance = 0;
const balanceElement = document.getElementById('balanceAmount');
const transactionList = document.getElementById('transactionList');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance(amount) {
  balance += amount;
  balanceElement.textContent = `$${balance.toFixed(2)}`;
}

function addTransaction(type, amount) {
  const listItem = document.createElement('li');
  listItem.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: $${amount.toFixed(2)}`;
  transactionList.appendChild(listItem);
}

depositBtn.addEventListener('click', function() {
  const depositAmount = parseFloat(prompt('Enter deposit amount:'));
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert('Invalid amount!');
    return;
  }
  updateBalance(depositAmount);
  addTransaction('deposit', depositAmount);
});

withdrawBtn.addEventListener('click', function() {
  const withdrawAmount = parseFloat(prompt('Enter withdrawal amount:'));
  if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > balance) {
    alert('Invalid amount or insufficient funds!');
    return;
  }
  updateBalance(-withdrawAmount);
  addTransaction('withdrawal', withdrawAmount);
});
