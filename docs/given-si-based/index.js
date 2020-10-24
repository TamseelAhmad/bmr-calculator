 function calculate() {
      var age = document.forms["myForm"]["age"].value;
      var gender = document.forms["myForm"]["gender"].value;
      var height = document.forms["myForm"]["height"].value;
      var weight = document.forms["myForm"]["weight"].value;
      var bmr = 0;
      if (age == '' || gender == '' || height == '' || weight == '') {
        alert("All fields are required");
        return false;
      }

      if (gender == 1) {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
      } else {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
      }

      document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day';
      document.getElementById("result").style.display = "block";

      return false;

    }
