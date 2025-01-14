const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipcodeInput = document.querySelector("#zipcode");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#password-confirmation");
const form = document.querySelector("#form");
const loginButton = document.querySelector("#login");
const emailErrorMessage = document.querySelector("#emailErrorMessage");
const countryErrorMessage = document.querySelector("#countryErrorMessage");
const zipcodeErrorMessage = document.querySelector("#zipcode-error");
const passwordErrorMessage = document.querySelector("#password-error-message");
const passwordConfirmationErrorMessage = document.querySelector(
  "#password-confirm-error"
);

function containsNumber(str) {
  return /\d/.test(str);
}

loginButton.addEventListener("click", () => {
  let isValid = true;

  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordConfirmationErrorMessage.textContent = "passwords dont match :(";
    isValid = false;
  }

  if (emailInput.validity.valueMissing) {
    emailErrorMessage.textContent = "⚠️ pls enter an email here :)";
    isValid = false;
  }
  if (countryInput.validity.valueMissing) {
    countryErrorMessage.textContent = "⚠️ pls select a country bruh :)";
    isValid = false;
  }

  if (zipcodeInput.validity.valueMissing) {
    zipcodeErrorMessage.textContent = "⚠️ pls enter your zipcode bruh :)";
    isValid = false;
  }
  if (passwordInput.validity.valueMissing) {
    console.log(`from pass ${passwordInput.validity.valueMissing}`);
    isValid = false;

    passwordErrorMessage.textContent = "⚠️ pls enter your password bruh :)";
  }

  if (isValid) {
    window.location.href = "https://www.youtube.com/shorts/cQpfmMnMRso";
  }
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  if (emailInput.validity.valid) {
    emailErrorMessage.textContent = "";
    return;
  }

  if (emailInput.validity.tooShort) {
    emailErrorMessage.textContent = "⚠️ low characters in the email id lol :)";
  } else if (!emailInput.validity.patternMismatch) {
    emailErrorMessage.textContent = "⚠️ Please enter valid email id :)";
  } else if (emailInput.validity.tooLong) {
    emailErrorMessage.textContent =
      "⚠️ the email has too many characters lol :)";
  }
});

countryInput.addEventListener("input", () => {
  if (countryInput.validity.valid) {
    countryErrorMessage.textContent = "";
    return;
  }
});

if (countryInput.value == "") {
  countryErrorMessage.textContent = "";
}

zipcodeInput.addEventListener("input", () => {
  if (zipcodeInput.validity.valid) {
    zipcodeErrorMessage.textContent = "";
    return;
  }

  if (zipcodeInput.validity.tooShort) {
    zipcodeErrorMessage.textContent = "⚠️ pls enter more characters:)";
  } else if (zipcodeInput.validity.tooLong) {
    zipcodeErrorMessage.textContent =
      "⚠️ pls enter less characters in the zipcode :)?";
  }
});

confirmPasswordInput.disabled = true;

passwordInput.addEventListener("input", () => {
  if (passwordInput.validity.valid) {
    if (passwordInput.value == confirmPasswordInput.value) {
      passwordConfirmationErrorMessage.textContent = "";
      confirmPasswordInput.setCustomValidity("");
    }
    confirmPasswordInput.disabled = false;
    confirmPasswordInput.classList.remove("password-invalid-not-entered-yet");
    passwordErrorMessage.textContent = "";
  }
  if (
    confirmPasswordInput.value !== passwordInput.value &&
    confirmPasswordInput.value !== ""
  ) {
    passwordConfirmationErrorMessage.textContent = "passwords dont match :(";
  }

  if (passwordInput.validity.tooShort) {
    passwordErrorMessage.textContent = "⚠️ the password is too short lol :)";
  } else if (
    !containsNumber(passwordInput.value) &&
    passwordInput.value !== ""
  ) {
    passwordErrorMessage.textContent = "⚠️ password must have a number:)";
  } else if (
    containsNumber(passwordInput.value) &&
    passwordInput.value !== ""
  ) {
  } else if (passwordInput.validity.tooLong) {
    passwordErrorMessage.textContent = "⚠️ the password is too long lol :)";
  }
});
// Check password confirmation input field for matches
confirmPasswordInput.addEventListener("input", () => {
  confirmPasswordInput.setCustomValidity("");

  if (passwordInput.value === confirmPasswordInput.value) {
    passwordConfirmationErrorMessage.textContent = "";
    confirmPasswordInput.setCustomValidity("");
    confirmPasswordInput.classList.remove("password-invalid-not-entered-yet");
  } else {
    passwordConfirmationErrorMessage.textContent =
      "⚠️ passwords do not match lol :)";
    confirmPasswordInput.setCustomValidity("idk");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

//im using setcustomvalidity method to make sure that im turning of the validity true and false manually thats it :)
