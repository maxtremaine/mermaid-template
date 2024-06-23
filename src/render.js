import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

for (const table of document.getElementsByTagName("pre")) {
  fetch(`/data/${table.id}.mermaid`)
    .then((response) => response.text())
    .then((text) => {
      table.innerHTML = text;
    })
    .then(() => {
      mermaid.run({
        nodes: [table],
      });
    });
}
