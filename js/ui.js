// ui.js
export function displayAPOD(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.date}</p>
        ${data.media_type === 'video' ? 
            `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>` :
            `<img src="${data.url}" alt="${data.title}">`}
        <p>${data.explanation}</p>
    `;
}

export function showError(message) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = `<p style="color: red;">${message}</p>`;
}
