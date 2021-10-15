const checkPass = () => {
  let x = document.getElementById("password").value;
  if (x.length > 6 || x.length == 0) {
    document.getElementById("validation").innerHTML = "";
  } else if (x.length < 6) {
    document.getElementById("validation").innerHTML = " Too Short";
  }
  x.length > 6 ? checkConfirm() : "";
};

const checkConfirm = () => {
  let y = document.getElementById("passwordConfirm").value;
  let x = document.getElementById("password").value;
  if (x == y) {
    document.getElementById("confirmValidation").innerHTML = "";
    document.getElementById("submit").style.display = "block";
  } else if (y.length > 0) {
    document.getElementById("confirmValidation").innerHTML =
      "the tow password don't match";
    document.getElementById("submit").style.display = "none";
  }
};
