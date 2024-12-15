function form_submit(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    let checkboxes = document.querySelectorAll('input[name="box"]:checked');

    let isValid = true;

    if (name === '') {
        alert('Name cannot be empty');
        isValid = false;
    } else if (name.length < 2 || name.length > 100) {
        alert('Name must be between 2 and 100 characters');
        isValid = false;
    } else if (name.includes('  ')) {
        alert('Name cannot contain double spaces');
        isValid = false;
    } else if (name.indexOf(' ') === -1) {
        alert('Full name must contain at least two words');
        isValid = false;
    } else {
        for (let i = 0; i < name.length; i++) {
            let char = name[i];
            if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char !== ' ') {
                alert('Name can only contain letters and spaces');
                isValid = false;
                break;
            }
        }
    }

    if (email === '') {
        alert('Email cannot be empty');
        isValid = false;
    } else if (!email.includes('@')) {
        alert('Email must contain the "@" character');
        isValid = false;
    } else {
        let parts = email.split('@');
        if (parts[0].length === 0 || parts[1].length <= 4) {
            alert('Invalid email format');
            isValid = false;
        }
    }

    if (phone === '') {
        alert('Phone number cannot be empty');
        isValid = false;
    } else if (phone.length < 10 || phone.length > 12) {
        alert('Phone number must be between 10 and 12 digits');
        isValid = false;
    } else if (isNaN(phone)) {
        alert('Phone number must be numeric');
        isValid = false;
    }

    if (!selectedGender) {
        alert('Please select a gender');
        isValid = false;
    }

    if (checkboxes.length !== 3) {
        alert('Please select all boxes');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('myForm').submit();
    }
}