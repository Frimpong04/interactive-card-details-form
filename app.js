// selectors
// card selectors
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const expiryMonth = document.querySelector(".expiry-month");
const expiryYear = document.querySelector(".expiry-year");
const cvcNumber = document.querySelector(".cvc-number");

// form selectors
const cardNameInput = document.getElementById("card-name-input");
const nameInputError = document.querySelector(".name-error");
const cardNumberInput = document.getElementById("card-number");
const cardEmptyInputError = document.querySelector(".empty-input-error");
const wrongFormatError = document.querySelector(".wrong-format-error");
const cvcInput = document.getElementById("cvc");
const cvcInputError = document.querySelector(".cvc-input-error");

// date input selectors
const expiryMonthInput = document.getElementById("month");
const expiryYearInput = document.getElementById("year");
const expiryMonthInputError = document.querySelector(".month-input-error");
const expiryYearInputError = document.querySelector(".year-input-error");

// button selectors
const submitButton = document.querySelector(".submit-button");




// functions
function formSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    const nameInput = cardNameInput.value;
    const numberInput = cardNumberInput.value;
    const expiryMonthValue = expiryMonthInput.value;
    const expiryYearValue = expiryYearInput.value;
    const cvc = cvcInput.value;

    cardName.innerText = nameInput;
    cardNumber.innerText = numberInput;
    expiryMonth.innerText = expiryMonthValue;
    expiryYear.innerText = expiryYearValue;
    cvcNumber.innerText = cvc; 
    console.log(nameInput, numberInput, expiryMonthValue, expiryYearValue, cvc);
}

// event listeners
submitButton.addEventListener("click", formSubmit);