//your JS code here. If required.
var inputs = document.querySelectorAll('.code');

for(let i =0; i < inputs.length; i++){
	inputs[i].addEventListener('input', function() {
		this.value = this.value.replace(/[^0-9]/g, '')
		if(this.value != ''){
			if(i < inputs.length -1){
				inputs[i+1].focus();
			}
		}
	});

	inputs[i].addEventListener('keydown', function (e) {
		if (this.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            } else if (this.value.length > 0) {
                // If input has a value, clear it
                this.value = '';
            }
		}
	});
}