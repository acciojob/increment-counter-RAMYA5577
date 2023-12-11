//your JS code here. If required.
var text=document.getElementById(para);
var button=document.getElementById(btn);

function incrementFun(){
	
      var counterValue = document.getElementById('para').innerText;

      var newCounterValue = parseInt(counterValue) + 1;

      // Update the counter value on the webpage
      document.getElementById('para').innerText = newCounterValue;

      // Display an alert with the un-incremented value
      alert(counterValue);
    }

