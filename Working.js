// Specifies the working of the program

let totalAmount = 0;

// Program Elements
let Category = document.getElementById("category-input");
let Amount = document.getElementById("Amount-input");
let DateIn = document.getElementById("date-input");
let Add = document.getElementById("add_btn");
let ExpenseBody = document.getElementById("Expenses-body");
let TotalAmountCell = document.getElementById("total-amount");

// Add Btn Work
const onAdd = () => {
  let category = Category.value;
  let amount = Number(Amount.value);
  let date = DateIn.value;

  if (category === "") {
    alert("Enter a Valid Category");
    return;
  }
  if (amount === "" || amount <= 0) {
    alert("Enter a Valid Amount");
    return;
  }
  if (date === "") {
    alert("Enter a Valid Date");
    return;
  }
  totalAmount += amount;
  TotalAmountCell.textContent = totalAmount;

  let newRow = ExpenseBody.insertRow();

  let categoryCell = newRow.insertCell();
  let amountCell = newRow.insertCell();
  let dateCell = newRow.insertCell();

  categoryCell.textContent = category;
  amountCell.textContent = amount;
  dateCell.textContent = date;
};

Add.addEventListener("click", onAdd);

// END
