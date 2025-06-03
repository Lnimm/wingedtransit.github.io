// Loren Nimmo - ITC293 A4 portfolio website - 08/06/2025
// Display welcome message on form load
function welcomeMessage() {
  alert("Welcome to the Winged Transit Newsletter Signup");
}

// Validate form on submit
function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const ageRadios = document.getElementsByName("age");
  const servicesCheckboxes = document.getElementsByName("services");
  const comments = document.getElementById("comments").value.trim();

  // Check First Name
  if (!firstName) {
    alert("Please enter your First Name.");
    return false;
  }
  if (firstName.length > 60) {
    alert("First Name must not exceed 60 characters.");
    return false;
  }

  // Check Last Name
  if (!lastName) {
    alert("Please enter your Last Name.");
    return false;
  }
  if (lastName.length > 60) {
    alert("Last Name must not exceed 60 characters.");
    return false;
  }

  // Check Email
  if (!email) {
    alert("Please enter your Email Address.");
    return false;
  }
  if (email.length > 60) {
    alert("Email Address must not exceed 60 characters.");
    return false;
  }

  // Check Age Range selected
  let ageSelected = false;
  for (let i = 0; i < ageRadios.length; i++) {
    if (ageRadios[i].checked) {
      ageSelected = true;
      break;
    }
  }
  if (!ageSelected) {
    alert("Please select an Age Range.");
    return false;
  }

  // Check at least one Service selected
  let serviceSelected = false;
  for (let i = 0; i < servicesCheckboxes.length; i++) {
    if (servicesCheckboxes[i].checked) {
      serviceSelected = true;
      break;
    }
  }
  if (!serviceSelected) {
    alert("Please select at least one service.");
    return false;
  }

  // Check Comments length if provided
  if (comments.length > 0 && comments.length > 500) {
    alert("Comments must not exceed 500 characters.");
    return false;
  }

  // All validations passed
  return true;
}


