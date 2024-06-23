import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

// Expects a list of strings called "tables"
for (const table of tables) {
  // Expects file name to match the table name.
  fetch(`/data/${table}.mermaid`)
    .then((response) => response.text())
    .then((text) => {
      // Expects the pre tag id to match table name.
      document.getElementById(table).innerHTML = text;
    })
    .then(() => {
      // Runs mermaid for the specific table.
      mermaid.run({
        nodes: [document.getElementById(table)],
      });
    });
}
