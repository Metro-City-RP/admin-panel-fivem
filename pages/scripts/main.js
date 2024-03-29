// Function to send request to TXAdmin API
async function sendRequestToTXAdmin(endpoint, method) {
    try {
        const response = await fetch(`http://51.195.89.221:25746/${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Failed to connect to TXAdmin.' };
    }
}

// Function to update server status
async function updateServerStatus() {
    const serverStatusElement = document.getElementById('serverStatus');
    const data = await sendRequestToTXAdmin('status', 'GET');
    if (data.success) {
        const statusText = data.serverStatus ? 'Running' : 'Stopped';
        serverStatusElement.textContent = `Server Status: ${statusText}`;
    } else {
        serverStatusElement.textContent = `Error: ${data.message}`;
    }
}

// Event listeners for start and stop server buttons
document.getElementById('startServerBtn').addEventListener('click', async function () {
    const data = await sendRequestToTXAdmin('start', 'POST');
    if (data.success) {
        updateServerStatus();
        alert('Server started.');
    } else {
        alert(`Error: ${data.message}`);
    }
});

document.getElementById('stopServerBtn').addEventListener('click', async function () {
    const data = await sendRequestToTXAdmin('stop', 'POST');
    if (data.success) {
        updateServerStatus();
        alert('Server stopped.');
    } else {
        alert(`Error: ${data.message}`);
    }
});

// Update server status on page load
updateServerStatus();
