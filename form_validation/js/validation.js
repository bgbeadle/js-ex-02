function validateForm() {
  var form = document.forms["inputForm"];
  var text = "";
  if (!validateName(form)) text += "Invalid name.\n";
  if (!validateEmail(form)) text += "Invalid email.\n";
  if (!validatePhone(form)) text += "Invalid phone number.\n";
  if (!validateAddress(form)) text += "Address is required.\n";
  alert(text.length > 0 ? text : "Good input!");
}

function validateName(form) {
  return /^[a-z0-9]+$/i.test(form["nameInput"].value);
}

function validateAddress(form) {
  return form["addressInput"].value.length > 0;
}

function validateEmail(form) {
  return /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i.test(form["emailInput"].value);
}

function validatePhone(form) {
  return /^\d{3}\-\d{3}\-\d{4}$/i.test(form["phoneInput"].value);
}
