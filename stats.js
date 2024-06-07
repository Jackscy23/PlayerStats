document.addEventListener('DOMContentLoaded', loadStats);

function loadStats() {
    fetch('https://script.google.com/macros/s/AKfycbzun9ZJtWxmheykhrCgdft-V6eKPQdbrT2Vsv-joC6kkEDrKnzF50pWt-V1NOBeCirA/exec', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Expecting JSON response from the server
    }).then((data) => {
        console.log('Data from server:', data);
        populateStatsTable(data);
    }).catch((error) => {
        console.error('Error loading stats:', error);
        document.getElementById('message').innerText = 'Error loading stats: ' + error.message;
    });
}

function populateStatsTable(data) {
    const tableBody = document.getElementById('statsTable').querySelector('tbody');
    tableBody.innerHTML = '';

    if (!Array.isArray(data)) {
        console.error('Data is not in the expected format:', data);
        document.getElementById('message').innerText = 'Data format error';
        return;
    }

    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}
