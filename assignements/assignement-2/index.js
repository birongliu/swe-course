document.getElementById('signInBtn').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
        document.getElementById('signUpBtn').style.color = "white"
    document.getElementById('signInBtn').style.color = "black"
});

document.getElementById('signUpBtn').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
       document.getElementById('signUpBtn').style.color = "black"
    document.getElementById('signInBtn').style.color = "white"
});