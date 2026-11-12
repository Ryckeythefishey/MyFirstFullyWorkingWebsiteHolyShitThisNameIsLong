// 1. HTML-Elemente in Variablen speichern
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const checklist = document.getElementById('checklist');
const clearCheckedBtn = document.getElementById('clear-checked-btn');

// 2. Funktion: Neuen Eintrag hinzufügen
function addItem() {
    const text = itemInput.value.trim();
    if (text === '') return; // Wenn leer, mach nichts

    // Erstelle ein neues Listen-Element (li)
    const li = document.createElement('li');

    // Setze das HTML für die Checkbox, den Text und den Lösch-Button
    li.innerHTML = `
        <input type="checkbox" onchange="toggleCheck(this)">
        <span>${text}</span>
        <button onclick="this.parentElement.remove()" style="color: red; background: none; border: none;">X</button>
    `;

    // Füge das neue Element der Liste hinzu
    checklist.appendChild(li);
    itemInput.value = ''; // Eingabefeld leeren
}

// 3. Funktion: Text durchstreichen, wenn Checkbox geklickt wird
function toggleCheck(checkbox) {
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }
}

// 4. Funktion: Alle abgehakten Einträge löschen
clearCheckedBtn.addEventListener('click', () => {
    // Suche alle aktiven Checkboxen
    const checkedBoxes = checklist.querySelectorAll('input[type="checkbox"]:checked');

    // Lösche das jeweilige übergeordnete <li>-Element
    checkedBoxes.forEach(box => box.parentElement.remove());
});

// 5. Klick auf den Button oder "Enter"-Taste im Eingabefeld abfangen
addBtn.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});
