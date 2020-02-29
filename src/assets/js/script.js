function validate_paise() {
  var paise = document.getElementById("paise");
  var value = new String(paise.value);
  var min = document.getElementById('paise_min_iv')
  var max = document.getElementById('paise_max_iv')
  if (value < 0) {
    min.style.display = 'block';
  } else {
    min.style.display = 'none';
  }

  if (value > 100) {
    max.style.display = 'block';
  } else {
    max.style.display = 'none';
  }
}

function validate_first_name() {
  var name = document.getElementById("rec_fname");
  var value = new String(name.value);
  var div = document.getElementById('rec_fname_iv')
  if (value.match("[0-9]")) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function validate_last_name() {
  var name = document.getElementById("rec_lname");
  var value = new String(name.value);
  var div = document.getElementById('rec_lname_iv')
  if (value.match("[0-9]")) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function validate_pincode(){
  var pincode = document.getElementById("pincode");
  var value = new String(pincode.value);
  var div = document.getElementById('pincode_iv')
  if (value.length != 6 ) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function validate_buyer_first_name() {
  var name = document.getElementById("buyer_fname");
  var value = new String(name.value);
  var div = document.getElementById('buyer_fname_iv')
  if (value.match("[0-9]")) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function validate_buyer_last_name() {
  var name = document.getElementById("buyer_lname");
  var value = new String(name.value);
  var div = document.getElementById('buyer_lname_iv')
  if (value.match("[0-9]")) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}

function next(ele){
  ele.nextElementSibling.focus();
}

function last(ele){
  document.getElementById("email").focus();
}

function validate_number(element) {
  element.addEventListener("keydown", function (evt) {
    ascii = evt.which ? evt.which : evt.keyCode
    if (ascii == 48) {
      evt.preventDefault();
    }
  });
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();