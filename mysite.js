function hiringValidation() {
  var radio = document.getElementById("hiring");
  var hiring_form = document.getElementById("hiring_form");

  if (radio.checked) {
    hiring_form.style.display = "block";
  } else {
    hiring_form.style.display = "none";
  }
}
function validateTextarea() {
  var obj1 = document.form1.textareaspace;
  if (trimfield(obj1.value) == "") {
    alert("Details Please!");
    obj1.focus();
    return false;
  } else return true;
}
function datalistValidator(cities) {
  var obj = $("#cities").find("option[value='" + cities + "']");
  if (obj != null && obj.length > 0) {
    return true;
  }
  return false;
}
$(document).ready(function () {
  $("#ItemEditForm").submit(function () {
    var cities = $("#form1").val();
    var existingcities = $("h2").text();
    if (datalistValidator(cities)) {
      alert(cities + " is valid");
      return true;
    }
    alert(cities + " is not a valid City");
    $("#form1")
      .val(existingcities)
      .focus()
      .select()
      .animate({
        right: "25px",
      })
      .animate({
        left: "25px",
      });
    return false;
  });
});

function resume() {
  document.getElementById("resume").innerHTML =
    "Please fill your contact info down below to get my resmue";
}

function trimfield(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

