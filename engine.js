/**
 * Archimedes Ghost Engine v2.1
 * Unleashed Plaintext Search for Linux Man-Pages
 */

const filePath = 'manpages6-9_for_transparent_plaintext_access.txt';
const contentArea = document.getElementById('content');
const statusDisplay = document.getElementById('status');

// 1. Fetch the Payload
fetch(filePath)
    .then(r => {
        if (!r.ok) throw new Error('File not found');
        return r.text();
    })
    .then(text => {
        contentArea.innerText = text;
        statusDisplay.innerText = '7MB LOADED | UNLEASHED';
        
        // Deep-link check: viewer.html?q=grep
        const params = new URLSearchParams(window.location.search);
        if (params.has('q')) {
            document.getElementById('searchTerm').value = params.get('q');
            lever();
        }
    })
    .catch(err => {
        contentArea.innerText = 'Error: Ensure ' + filePath + ' is in the same folder.';
        statusDisplay.innerText = 'ENGINE OFFLINE';
    });

// 2. The Archimedes Lever
function lever() {
    const val = document.getElementById('searchTerm').value;
    if (!val || val.length < 2) return;

    try {
        // We validate the Regex, but let the Browser's C++ engine do the find
        new RegExp(val, 'i'); 
        
        const found = window.find(val, false, false, true, false, true, false);
        
        if (!found) {
            // Automatic wrap-around to top if not found from current scroll
            window.scrollTo(0, 0);
            if (!window.find(val, false, false, true, false, true, false)) {
                statusDisplay.innerText = "NULL RESULT";
            }
        } else {
            statusDisplay.innerText = "TARGET ACQUIRED";
        }
    } catch (e) {
        statusDisplay.innerText = "REGEX ERROR - KEEP IT SIMPLE";
    }
}

// 3. Hotkeys
document.getElementById('searchTerm').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') lever();
});
