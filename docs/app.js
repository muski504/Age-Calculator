function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").innerHTML = "Please select your date of birth!";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let totalDays = Math.floor((today - dobDate) / (1000 * 60 * 60 * 24));

    // Next birthday
    let nextBirthday = new Date(today.getFullYear(), dobDate.getMonth(), dobDate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    let diff = nextBirthday - today;
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("result").innerHTML = `
        <b>Age:</b> ${years} years, ${months} months, ${days} days <br>
        <b>Total Days Lived:</b> ${totalDays} days <br>
        <b>Days Until Next Birthday:</b> ${daysLeft} days
    `;
}
