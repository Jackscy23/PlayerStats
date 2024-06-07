document.getElementById('updateForm').addEventListener('submit', updateSheet);

function updateSheet(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('updateForm'));
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbwyLZ4HEkeNyBtQHBdJcWFIq-pvzItO7B45BYoYYwA7wsb_Tq96EjAFHhakvde26Im0/exec', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formDataObj)
    }).then((response) => {
        return response.text(); // Expecting plain text response from the server
    }).then((text) => {
        console.log('Response from server:', text);
        document.getElementById('message').innerText = 'Sheet updated successfully!';
    }).catch((error) => {
        console.error('Error updating sheet', error);
        document.getElementById('message').innerText = 'Error updating sheet';
    });
}

const playerList = [
    "NoodlesGk", "Jackscy23", "Jenks", "Evo", "Jadon", "Nickie",
    "619hustle", "Phantom", "Jimmy T", "Chamber", "TinyP", "Rosstitute",
    "Virgil", "Cbarnes", "Hughes", "Pea", "Enty", "MrSparkle", "Jackscy23"
];

function populatePlayerOptions() {
    const playerSelect = document.getElementById('player');
    const removePlayerSelect = document.getElementById('removePlayer');
    playerSelect.innerHTML = '';
    removePlayerSelect.innerHTML = '';

    playerList.forEach(player => {
        const option = document.createElement('option');
        option.value = player;
        option.text = player;
        playerSelect.add(option);

        const removeOption = document.createElement('option');
        removeOption.value = player;
        removeOption.text = player;
        removePlayerSelect.add(removeOption);
    });
}

function addPlayer() {
    const newPlayer = document.getElementById('newPlayer').value;
    if (newPlayer && !playerList.includes(newPlayer)) {
        playerList.push(newPlayer);
        populatePlayerOptions();
        document.getElementById('newPlayer').value = ''; // Clear the input field
    }
}

function removePlayer() {
    const playerToRemove = document.getElementById('removePlayer').value;
    const index = playerList.indexOf(playerToRemove);
    if (index !== -1) {
        playerList.splice(index, 1);
        populatePlayerOptions();
    }
}

populatePlayerOptions();
