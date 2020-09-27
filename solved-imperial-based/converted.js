 function calculate() {
      var age = document.forms["myForm"]["age"].value;
      var gender = document.forms["myForm"]["gender"].value;
      var heightft = document.forms["myForm"]["heightft"].value;
      var heightin = document.forms["myForm"]["heightin"].value;
      var weightlb = document.forms["myForm"]["weight"].value;
      var bmr = 0;
      var height = ((heightft * 30.48) + (heightin * 2.54));
      var weightkg = weightlb / 2.20462262185;
      if (age == '' || gender == '' || heightft == '' || heightin == '' || weightlb == '') {
        alert("All fields are required");
        return false;
      }

      if (gender == 1) {
        bmr = 66.47 + (13.75 * weightkg) + (5.003 * height) - (6.755 * age);
      } else {
        bmr = 655.1 + (9.563 * weightkg) + (1.85 * height) - (4.676 * age);
      }

      document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day';
      document.getElementById("result").style.display = "block";

      return false;

    }
