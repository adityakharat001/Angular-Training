let nameNode = document.getElementById("fname");
let emailNode = document.getElementById("email");
let passNode = document.getElementById("password");
let c_passNode = document.getElementById("c_password");
let remarkNode = document.getElementById("remark");
let cityNode = document.getElementById("city");
let genderNode = document.getElementsByName("gender");
let hobbiesNode = document.getElementsByName("hobbies");

let errName = document.getElementById("name-error");
let errEmail = document.getElementById("email-error");
let errPass = document.getElementById("password-error");
let errCPass = document.getElementById("c_password-error");
let errGender = document.getElementById("gender-error");
let errHobby = document.getElementById("hobbies-error");
let errRemark = document.getElementById("remark-error");
let errCity = document.getElementById("city-error");

function validateName() {
  let fname = nameNode.value;
  let regex = new RegExp("^[A-Za-z]*$");
  errName.innerHTML = "";
  if (fname === "") {
    errName.innerHTML = "<small>First name is required</small>";
    nameNode.style.border = "2px solid red";
    return false;
  } else if (regex.test(fname) == false) {
    errName.innerHTML = "<small>First name must have only letters</small>";
    nameNode.style.border = "2px solid red";
    return false;
  } else {
    nameNode.style.border = "none";
    return true;
  }
}
function validateEmail() {
  let email = emailNode.value;
  errEmail.innerHTML = "";
  if (email === "") {
    errEmail.innerHTML = "<small>Email is required</small>";
    emailNode.style.border = "2px solid red";
    return false;
  } else if (!email.includes("@") || email.endsWith("@")) {
    errEmail.innerHTML = "<small>Enter a valid email</small>";
    emailNode.style.border = "2px solid red";
    return false;
  } else {
    emailNode.style.border = "none";
    return true;
  }
}
function validateRemarks() {
  let remark = remarkNode.value;
  errRemark.innerHTML = "";
  if (remark === "") {
    errRemark.innerHTML = "<small>Remarks is required</small>";
    remarkNode.style.border = "2px solid red";
    return false;
  } else if (remark.length > 20) {
    errRemark.innerHTML =
      "<small>Remarks must be maximum 20 characters</small>";
    remarkNode.style.border = "2px solid red";
    return false;
  } else {
    remarkNode.style.border = "none";
    return true;
  }
}
function validatePassword() {
  let pass = passNode.value;
  errPass.innerHTML = "";
  let regx = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$"
  );
  if (pass === "") {
    errPass.innerHTML = "<small>Password is required</small>";
    passNode.style.border = "2px solid red";
    return false;
  } else if (regx.test(pass) === false) {
    errPass.innerHTML =
      "<small>Password should be 8 to 20 characters long. Password should have atleast:</small>";
    let ulNode = document.createElement("ul");
    errPass.append(ulNode);
    ulNode.style.fontSize = "10px";
    let ar = [
      "One capital letter",
      "One small letter",
      "One digit",
      "One special symbol",
    ];
    for (let val of ar) {
      let liNode = document.createElement("li");
      liNode.textContent = val;
      ulNode.append(liNode);
    }
    passNode.style.border = "2px solid red";
    return false;
  } else {
    passNode.style.border = "none";
    return true;
  }
}
function validateC_Password() {
  let pass = passNode.value;
  let c_pass = c_passNode.value;

  errCPass.innerHTML = "";
  if (c_pass === "") {
    errCPass.innerHTML = "<small>Confirm password required</small>";
    c_passNode.style.border = "2px solid red";
    return false;
  } else if (c_pass != pass) {
    errCPass.innerHTML = "<small>Both passwords should match</small>";
    c_passNode.style.border = "2px solid red";
    return false;
  } else {
    c_passNode.style.border = "none";
    return true;
  }
}
function validateCity() {
  let city = cityNode.value;

  errCity.innerHTML = "";
  if (city === "0") {
    errCity.innerHTML = "<small>Please select a city</small>";
    cityNode.style.border = "2px solid red";
    return false;
  } else {
    cityNode.style.border = "none";
    return true;
  }
}
function validateHobby() {
  var hobbyValid = false;

  var i = 0;
  while (!hobbyValid && i < hobbiesNode.length) {
    if (hobbiesNode[i].checked) hobbyValid = true;
    i++;
  }

  if (!hobbyValid) {
    errHobby.innerHTML = "<br><small>Please select your hobby</small>";
  }
  return hobbyValid;
}
function validateGender() {
  var genderValid = false;

  var i = 0;
  while (!genderValid && i < genderNode.length) {
    if (genderNode[i].checked) genderValid = true;
    i++;
  }

  if (!genderValid) {
    errGender.innerHTML = "<br><small>Please select your gender</small>";
  }
  return genderValid;
}

function validateForm() {
  let v1 = validateName();
  let v2 = validateEmail();
  let v3 = validatePassword();
  let v4 = validateC_Password();
  let v5 = validateRemarks();
  let v6 = validateCity();
  let v7 = validateGender();
  let v8 = validateHobby();
  return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8;
}
