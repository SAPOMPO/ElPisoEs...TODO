const formLink = "link(todavia-no-he-creado-el-google-form)";
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