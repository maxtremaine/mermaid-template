import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

/**
 * This loop expects the following when imported into an html file:
 * - A list of strings to identify the tables.
 * - Corresponding .mermaid files in a data directory.
 * - Corresponding <pre> tags with id matching table name.
 */
for (const table of tables) {
  fetch(`/data/${table}.mermaid`)
    .then((response) => response.text())
    .then((text) => {
      document.getElementById(table).innerHTML = text;
    })
    .then(() => {
      mermaid.run({
        nodes: [document.getElementById(table)],
      });
    });
}
