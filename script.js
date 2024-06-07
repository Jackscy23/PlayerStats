document.getElementById('updateForm').addEventListener('submit', updateSheet);

function updateSheet(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('updateForm'));
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbyyO57jz2-YDW4KmTA_PsOwWAGCcOX_z2EVOJS02a-PJzFGaQ0aWZ6ZABNd8HRRBaJb/exec', {
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
        setTimeout(() => {
            document.getElementById('message').innerText = ''; // Clear the message after 1 second
        }, 1000);
    }).catch((error) => {
        console.error('Error updating sheet', error);
        document.getElementById('message').innerText = 'Error updating sheet';
    });
}

let playerList = JSON.parse(localStorage.getItem('playerList')) || [
    "NoodlesGk", "Jackscy23", "Jenks", "Evo", "Jadon", "Nickie",
    "619hustle", "Phantom", "Jimmy T", "Chamber", "TinyP", "Rosstitute",
    "Virgil", "Cbarnes", "Hughes", "Pea", "Enty", "MrSparkle"
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
        localStorage.setItem('playerList', JSON.stringify(playerList)); // Save to local storage
        populatePlayerOptions();
        document.getElementById('newPlayer').value = ''; // Clear the input field
    }
}

function removePlayer() {
    const removePlayerSelect = document.getElementById('removePlayer');
    const playerToRemove = removePlayerSelect.value;
    const index = playerList.indexOf(playerToRemove);
    if (index !== -1) {
        playerList.splice(index, 1);
        localStorage.setItem('playerList', JSON.stringify(playerList)); // Save to local storage
        populatePlayerOptions();
    }
}


populatePlayerOptions();