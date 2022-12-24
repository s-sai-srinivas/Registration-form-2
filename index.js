let globalIsSubmitted = false 
function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let Country = document.getElementById('country').value
	let Mobile = document.getElementById('Mobile-Number').value
    let male=document.getElementById('male');
    let female=document.getElementById('female');
    let others=document.getElementById('others');
	let error = false

    if(isSubmitted) {``
		globalIsSubmitted = true
	}
    if(globalIsSubmitted) {

        let hasnumber= /\d/;

	if(firstName.length >= 3 && !(hasnumber.test(firstName))) {
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastName.length >= 3 && !(hasnumber.test(lastName))) {
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.length - email.lastIndexOf(".") >= 3
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
		error = true
  }
	if(Country != 'None') {
		document.getElementById('country-valid').style.display = 'block'
		document.getElementById('country-invalid').style.display = 'none'
	} else {
		document.getElementById('country-invalid').style.display = 'block'
		document.getElementById('country-valid').style.display = 'none'
		error = true
	}

	let MobileNumber = parseInt(Mobile)
	if(Mobile.length === 10 && !isNaN(MobileNumber)) {
		document.getElementById('Mobile-Number-valid').style.display = 'block'
		document.getElementById('Mobile-Number-invalid').style.display = 'none'
	} else {
		document.getElementById('Mobile-Number-invalid').style.display = 'block'
		document.getElementById('Mobile-Number-valid').style.display = 'none'
		error = true
	}

    if(male.checked==true || female.checked==true|| others.checked==true ){
        document.getElementById('Gender-valid').style.display = 'block'
        document.getElementById('Gender-invalid').style.display = 'none'
    } else {
        document.getElementById('Gender-invalid').style.display = 'block'
        document.getElementById('Gender-valid').style.display = 'none'
        error = true
    }


	if(!error && isSubmitted) {
		alert('Your details have been saved successfully!')

		document.getElementById('registration-form').reset()

		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
	}
}
}

