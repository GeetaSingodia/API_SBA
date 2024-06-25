
// app.js
import { fetchAPOD } from './api.js';
import { displayAPOD, showError } from './ui.js';

document.getElementById('searchButton').addEventListener('click', async () => {
    const date = document.getElementById('dateInput').value;
    if (date) {
        try {
            const data = await fetchAPOD(date);
            displayAPOD(data);
        } catch (error) {
            showError('Failed to fetch data. Please try again later.');
        }
    } else {
        showError('Please select a date.');
    }
});

document.getElementById('prevPage').addEventListener('click', async () => {
    const date = new Date(document.getElementById('dateInput').value);
    if (!isNaN(date)) {
        date.setDate(date.getDate() - 1);
        try {
            const data = await fetchAPOD(date.toISOString().split('T')[0]);
            document.getElementById('dateInput').value = date.toISOString().split('T')[0];
            displayAPOD(data);
        } catch (error) {
            showError('Failed to fetch data. Please try again later.');
        }
    }
});

document.getElementById('nextPage').addEventListener('click', async () => {
    const date = new Date(document.getElementById('dateInput').value);
    if (!isNaN(date)) {
        date.setDate(date.getDate() + 1);
        try {
            const data = await fetchAPOD(date.toISOString().split('T')[0]);
            document.getElementById('dateInput').value = date.toISOString().split('T')[0];
            displayAPOD(data);
        } catch (error) {
            showError('Failed to fetch data. Please try again later.');
        }
    }
});
