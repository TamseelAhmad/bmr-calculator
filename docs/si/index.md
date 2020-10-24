<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,600;0,800;0,900;1,700&display=swap"
    rel="stylesheet">
    
   <style>
      
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}
body {
    padding: 0px;
    margin: 0px;
    background: #F4F1F1;
    font-family: 'Nunito Sans', sans-serif;
}

div#bmrcalc {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

form {
    width: 300px;
    background: white;
    padding: 20px;
    border: 1px solid #ffc5c5;
    box-shadow: 0 1px 9px #cdb3b3;
    border-radius: 5px;
}

h2 {
    margin: 0px;
    text-align: center;
    font-size: 21px;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.inputwrap {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}

.inputwrap label {
    display: block;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 4px;
}

input[type="text"] {
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    padding: 6px 10px;
}

input[type="submit"] {
    width: 100%;
    display: block;
    background: black;
    color: white;
    text-transform: uppercase;
    padding: 10px 0px;
    border: none;
}


div#result {
    background: red;
    color: white;
    text-align: center;
    padding: 10px 0px;
    font-weight: bold;
    display: none;
}

</style>

</head>


<body>
  <script>
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

  </script>
    
  <div id="bmrcalc">


   <form name="myForm" onSubmit="return calculate()">
      <h2>BMR Calculator</h2>

   <div class="inputwrap">
        <label class="label">Age</label>
        <input type="text" name="age" class="">
      </div>

  <div class="inputwrap">
        <label class="label">Gender</label>
        <label><input type="radio" name="gender" value="1">Male</label>
        <label><input type="radio" name="gender" value="2">Female</label>
      </div>

   <div class="inputwrap">
        <label class="label">Height (cm)</label>
        <input type="text" name="height">
      </div>

   <div class="inputwrap">
        <label class="label">Weight (kg)</label>
        <input type="text" name="weight">
      </div>
      <div class="inputwrap">
        <input type="submit" value="Calculate">
      </div>
      <div id="result">
      </div>
    </form>

  </div>
</body>
</html>
