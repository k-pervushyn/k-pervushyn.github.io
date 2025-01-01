document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".tree .node");

    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const childUl = node.nextElementSibling;

            if (childUl && childUl.tagName === "ul") {
                if (childUl.style.display === "none") {
                    childUl.style.display = "block";
                    node.classList.add("open");
                } else {
                    childUl.style.display = "none";
                    node.classList.remove("open");
                }
            }
        });
    });

    const allSubtrees = document.querySelectorAll(".tree ul");
    allSubtrees.forEach(subtree => {
        subtree.style.display = "none";
    });
});

