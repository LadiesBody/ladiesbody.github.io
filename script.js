let countdownTimer;
let countdownSeconds = 30;
let unlockClicked = false;

document.getElementById('unlockBtn').addEventListener('click', function() {
    // Open a new tab with the provided URL
    window.open('https://credentialstrapdoormagnet.com/v21pxv7tf?key=73d273a5458befd1561488542a3771bd', '_blank');

    // Reset countdown timer and start it again
    clearInterval(countdownTimer);
    countdownSeconds = 30;
    countdownTimer = setInterval(updateCountdown, 1000);

    // Enable Generate Image button
    document.getElementById('generateBtn').removeAttribute('disabled');
    unlockClicked = true;
});

document.getElementById('generateBtn').addEventListener('click', function() {
    // Perform actions when Generate Image button is clicked
    // Here, you can add logic to generate image or any other action
    // For now, let's just open a new tab with a dummy URL
    window.open('https://credentialstrapdoormagnet.com/xmvdgqx3js?key=ec0cf23ad1786d9c505faa0a34e9c2f9', '_blank');
});

function updateCountdown() {
    const btn = document.getElementById('generateBtn');
    if (countdownSeconds > 0 && unlockClicked) {
        btn.textContent = `Unlock Videos (${countdownSeconds}s)`;
        countdownSeconds--;
        btn.setAttribute('disabled', 'disabled'); // Disable button during countdown
    } else {
        // Perform actions when countdown reaches 0 or Unlock Image not clicked
        clearInterval(countdownTimer);
        countdownTimer = null;
        countdownSeconds = 30;
        btn.textContent = 'Unlock Videos';
        btn.removeAttribute('disabled'); // Re-enable button after countdown ends
        
        // Setelah countdown selesai, ubah src iframe
        //const iframe = document.getElementById('resultFrame');
        //iframe.style.display = "block";
        //iframe.src = 'https://null.perchance.org/pretty-ai';
    }
}

document.getElementById('unlockBtn').addEventListener('click', function() {
    // Open a new tab with the provided URL
    window.open('https://credentialstrapdoormagnet.com/sa6b1zda?key=0815c5716a238cfe9170ea906ec737ce', '_blank');

    // Reset countdown timer and start it again
    clearInterval(countdownTimer);
    countdownSeconds = 30;
    countdownTimer = setInterval(updateCountdown, 1000);

    // Enable Generate Image button
    document.getElementById('generateBtn').removeAttribute('disabled');
    unlockClicked = true;

    // Hide the iframe
    document.getElementById('resultFrame').style.display = 'none';
});

document.getElementById('generateBtn').addEventListener('click', function() {
    // Perform actions when Generate Image button is clicked
    // Here, you can add logic to generate image or any other action
    // For now, let's just open a new tab with a dummy URL
    window.open('https://credentialstrapdoormagnet.com/nc3uragc?key=e5e2c01fc3d74a48acb9794ab597d222', '_blank');

    // Hide the iframe
    document.getElementById('resultFrame').style.display = 'none';
});

