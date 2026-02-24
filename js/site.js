window.onload = function () {
  document.querySelector("form").reset();
};

const form = document.querySelector("form");

function showError(inputId, errorId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  if (inputElement) inputElement.classList.add("invalid-input");
  if (errorElement) errorElement.classList.add("show");
}

function clearError(inputId, errorId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  if (inputElement) inputElement.classList.remove("invalid-input");
  if (errorElement) errorElement.classList.remove("show");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isFormValid = true;

  const firstName = document.getElementById("firstName").value.trim();
  if (firstName === "") {
    showError("firstName", "firstName-error");
    isFormValid = false;
  } else {
    clearError("firstName", "firstName-error");
  }

  const lastName = document.getElementById("lastName").value.trim();
  if (lastName === "") {
    showError("lastName", "lastName-error");
    isFormValid = false;
  } else {
    clearError("lastName", "lastName-error");
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    showError("email", "email-error");
    isFormValid = false;
  } else {
    clearError("email", "email-error");
  }

  const queryTypes = document.querySelectorAll('input[name="queryType"]');
  let isRadioChecked = false;
  queryTypes.forEach((radio) => {
    if (radio.checked) isRadioChecked = true;
  });

  if (!isRadioChecked) {
    document.getElementById("queryType-error").classList.add("show");
    isFormValid = false;
  } else {
    document.getElementById("queryType-error").classList.remove("show");
  }

  const message = document.getElementById("message").value.trim();
  if (message === "") {
    showError("message", "message-error");
    isFormValid = false;
  } else {
    clearError("message", "message-error");
  }

  const consent = document.getElementById("consent");
  if (!consent.checked) {
    document.getElementById("consent-error").classList.add("show");
    isFormValid = false;
  } else {
    document.getElementById("consent-error").classList.remove("show");
  }

  if (isFormValid) {
    const successMessage = document.getElementById("success-message");
    successMessage.classList.add("show");

    form.reset();

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 10000);
  }
});
