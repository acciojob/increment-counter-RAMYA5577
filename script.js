//your JS code here. If required.
var text=document.getElementById(counter);
var button=document.getElementById(incrementBtn);

function incrementFun(){
	
      var counterValue = document.getElementById('counter').innerText;

      var newCounterValue = parseInt(counterValue) + 1;
      document.getElementById('counter').innerText = newCounterValue;
      alert(counterValue);
    }

