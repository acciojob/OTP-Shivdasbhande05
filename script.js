//your JS code here. If required.
var inputs = document.querySelectorAll('.code');

for(let i =0; i < inputs.length; i++){
	inputs[i].addEventListener('input', function() {
		if(this.value != ''){
			if(i < inputs.length -1){
				inputs[i+1].focus();
			}
		}
	});

	inputs[i].addEventListener('keydown', function (e) {
		if(e.key === 'Backspace' && this.value.length === 0){
			if (i > 0){
				inputs[i-1].focus();
			}
		}
	});
}

inputs[0].focus();
