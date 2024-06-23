import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

for (const graph of document.getElementsByTagName("pre")) {
  fetch(`/data/${graph.id}.mermaid`)
    .then((response) => response.text())
    .then((text) => {
      graph.innerHTML = text;
    })
    .then(() => {
      mermaid.run({
        nodes: [graph],
      });
    });
}
