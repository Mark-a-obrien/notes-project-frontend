const apiKey = "tqwvg4o8e9patu]gv32uy89gqweabcvsz";

            fetch("http://127.0.0.1:8000/api/notes", {
            method: "GET",
            headers: {
                "X-API-Key": apiKey,
                "Content-Type": "application/json"
            }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                data.forEach(element => {
                    const note = document.createElement("li");
                    // note.textContent = element;
                    note.classList.add("note");

                    const id = document.createElement("p");
                    const title = document.createElement("p");
                    const text = document.createElement("p");

                    id.textContent = element[0];
                    title.textContent = element[1];
                    text.textContent = element[2];

                    text.classList.add("text")

                    note.append(id, title, text)


                    document.getElementById("notes-list").appendChild(note);
                });
                
            })
            .catch(error => console.error("Error:", error));   