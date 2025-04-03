"use strict";

const output = document.querySelector(".output");
const localJsonFile = "updates.json";

window.addEventListener("DOMContentLoaded", () => {
    output.textContent = "Loading....";
    fetch(localJsonFile)
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = ""; // Clear loading text
            data.updates.forEach((update) => {
                createBubble(update);
            });
        });
});

function createBubble(update) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = `
        <h2>Update ${update.update_number}</h2>
        <p>Date: ${update.date}</p>
        <p>Description: ${update.description}</p>
        <p>Changes:</p>
        <ul>
            ${update.changes.map(change => `    <li>${change}</li>`).join('')}
        </ul>
    `;
    output.append(bubble);
}
