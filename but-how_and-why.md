# Archimedes Toolset: Usage Guide

This repository is designed to be used without a database, without telemetry, and without a complex UI. It is raw data + a simple lens.

## How to Consult the Manual (Android/Desktop)
1. **Download**: Keep the `.txt` and `viewer.html` in the same folder.
2. **Open**: Use any browser (Chrome Dev, Firefox Focus, etc.) to open `viewer.html`. 
3. **Search**: Use the input box at the top. 

### The "Regex" Power Moves
Since this is a raw text stream, use these patterns to jump exactly where you need:
- `^NAME ls` — Jumps directly to the definition of the `ls` command.
- `^DESCRIPTION` — Jumps to the detailed explanation of the current page.
- `^EXAMPLES` — Jumps straight to the usage examples.

## Deep-Linking (The "No-Menu" Shortcut)
If your device hides menus (looking at you, Samsung), you can "force" a search by adding a query to the URL in your address bar:
`viewer.html?q=NAME grep`

This will open the manual and immediately pull the "lever" to find the `grep` documentation.

## But why this exists
In Android in particular, but in general, the userland app sources had been infested with manuals that require internet access, tracking permissions, or heavy database engines. Plus fckery hidden, obfuscated or you name it, manuals are prime for the picking, unfortunately implying the lack of a knowledge base from their users: check those APKs, decompile and begin, you'll be fine. This setup returns the documentation to the user. It is local, it is plaintext, and it is yours.

