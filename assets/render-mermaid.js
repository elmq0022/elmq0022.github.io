mermaid.initialize({ startOnLoad: false });

let diagrams = document.querySelectorAll("script[type='mermaid']");

for (let i = 0; i < diagrams.length; i++) {
    let diagram = diagrams[i];

    let div = document.createElement("div");
    div.className = "mermaid";
    div.textContent = diagram.textContent;

    diagram.replaceWith(div);
}

mermaid.run();
