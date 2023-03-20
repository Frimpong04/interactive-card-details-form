
// selectors
// form selector
const formElement = document.querySelector("form");

// thank you selector
const completedState = document.querySelector(".completed-state");
let formInputs = document.getElementsByTagName("input");
let formInputsArray = [...formInputs];

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
const cardNumberError = document.querySelector(".card-number-error");


// date input selectors
const expiryMonthInput = document.getElementById("month");
const expiryYearInput = document.getElementById("year");
const expiryMonthInputError = document.querySelector(".month-input-error");
const expiryYearInputError = document.querySelector(".year-input-error");

// button selectors
const submitButton = document.querySelector(".submit-button");


// const validRegex = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;
const validRegex = /[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;


// functions
function cardNumberValidator() {
    console.log(cardNumberInput.value);
    if(validRegex.test(cardNumberInput.value)) {
        return true;
    }
    return false;
}

function formSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    let nameInput = cardNameInput.value;
    let numberInput = cardNumberInput.value;
    let expiryMonthValue = Number(expiryMonthInput.value);
    let expiryYearValue = Number(expiryYearInput.value);
    let cvc = Number(cvcInput.value);

    function validInputs() {
        if (cardNameInput.value && cardNumberInput.value && expiryMonthInput.value && expiryYearInput.value && validRegex.test(cardNumberInput.value) && typeof (expiryMonthValue) === "number" && typeof (expiryYearValue) === "number" && typeof (cvc) === "number") {
            return true;
        };
        return false;
    }
    // validated card number
    let validatedCardNumber = cardNumberValidator();
    console.log(validatedCardNumber);

    if (!nameInput) {
        cardNameInput.style.border = "thin solid red";
        nameInputError.style.visibility = "visible";
        nameInput = cardName.innerText;
    }
    
    if (!numberInput) {
        cardNumberInput.style.border = "thin solid red";
        cardEmptyInputError.style.visibility = "visible";
        // wrongFormatError.style.visibility = "hidden";
        numberInput = cardNumber.innerText;
    }
    if (!validatedCardNumber) {
        cardNumberInput.style.border = "thin solid red";
        wrongFormatError.style.visibility = "visible";
        cardEmptyInputError.style.visibility = "visible";

        numberInput = cardNumber.innerText;
    }

    if (!expiryMonthValue) {
        expiryMonthInput.style.border = "thin solid red";
        expiryMonthInputError.style.visibility = "visible";
        expiryMonthValue = expiryMonth.innerText;
    }


    if (!expiryYearValue) {
        expiryYearInput.style.border = "thin solid red";
        expiryYearInputError.style.visibility = "visible";
        expiryYearValue = expiryYear.innerText;
    }


    if (!cvc) {
        cvcInput.style.border = "thin solid red";
        cvcInputError.style.visibility = "visible";
        // cvcInputError.innerText = "Can't be empty";
        cvc = cvcNumber.innerText;

    }



    cardName.innerText = nameInput;
    expiryMonth.innerText = expiryMonthValue;
    expiryYear.innerText = expiryYearValue;
    cvcNumber.innerText = cvc;
    cardNumber.innerText = numberInput;

    const validated = validInputs();
    if (validated) {
        formElement.style.display = "none";
        completedState.style.display = "block";
    }

    console.log(nameInput, numberInput, expiryMonthValue, expiryYearValue, cvc)

}
function clearErrors(event) {
    
    event.target.style.border = "none";
    let inputId = event.target.getAttribute("id");
    console.log(inputId);

    switch (inputId) {
        case "card-name-input":
            nameInputError.style.visibility = "hidden";

            break;

        case "card-number":
            // cardNumberError.style.visibility = "hidden";
            wrongFormatError.style.visibility = "hidden";
            cardEmptyInputError.style.visibility = "hidden";
            break;
        
        case "month":
            expiryMonthInputError.style.visibility = "hidden";
            break;

        case "year":
            expiryYearInputError.style.visibility = "hidden";
            break;
        
        case "cvc":
            cvcInputError.style.visibility = "hidden";
            break;
        default:
            console.log("Something is wrong");
            break;
    }

}
// event listeners
submitButton.addEventListener("click", formSubmit);
formInputsArray.map(input => input.addEventListener("focus", clearErrors));