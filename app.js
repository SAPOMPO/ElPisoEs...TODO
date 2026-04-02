const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSceKVjw7OWtf-bXgWfIpbK075ZfJJmlS4LLAWe_-8Rvp-LxTA/viewform?usp=sharing&ouid=114770524459196804223";
document.getElementById("voteBtn").href = formLink;

fetch("ideas.json")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("content");

    Object.keys(data).forEach(section => {

        const sectionDiv = document.createElement("div");
        sectionDiv.className = "section";

        const title = document.createElement("h2");
        title.innerText = section;

        sectionDiv.appendChild(title);

        data[section].forEach((idea, index) => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `#${index+1} - ${idea}`;

            sectionDiv.appendChild(card);
        });

        container.appendChild(sectionDiv);
    });

});
