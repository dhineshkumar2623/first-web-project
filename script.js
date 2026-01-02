  
 const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');
    const displayData = document.getElementById('displayData');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (name === "" || email === "") {
            message.style.color = "red";
            message.innerText = "❌ Please fill all required fields";
            displayData.style.display = "none";
        } else {
            message.style.color = "green";
            message.innerText = "✅ Registration Successful";

            displayData.style.display = "block";
            document.getElementById('resName').innerText = "Name: " + name;
            document.getElementById('resEmail').innerText = "Email: " + email;
            document.getElementById('resCourse').innerText = "Course: " + course;
            document.getElementById('resGender').innerText = "Gender: " + gender;
        }
    });