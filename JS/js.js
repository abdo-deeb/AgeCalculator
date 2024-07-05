function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    const dobDate = new Date(dob);
    const now = new Date();

    let age = now.getFullYear() - dobDate.getFullYear();
    const monthDiff = now.getMonth() - dobDate.getMonth();
    const dayDiff = now.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
