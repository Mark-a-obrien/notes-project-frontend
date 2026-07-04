const apiKey = "tqwvg4o8e9patu]gv32uy89gqweabcvsz";

const addNoteBtn = document.getElementById("add-note");
const addNoteForm = document.getElementById("add-note-form");

function fetchNotes() {
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
}


function createNote(apiKey, formData) {
    
    console.log(formData.get("title"))

    fetch('http://127.0.0.1:8000/api/create/note', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            api_key : apiKey,
            note : {
                title: formData.get("title"),
                text: formData.get("text")
            }
        })
        })
        .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));   

}


addNoteForm.addEventListener("submit", (e) => 
    {
        e.preventDefault();
        const formData = new FormData(addNoteForm);
        createNote(apiKey, formData)
        addNoteForm.style.display = "none";
    }
)

addNoteBtn.addEventListener("click", () => 
    {
        addNoteForm.style.display = "flex";
    }
)



fetchNotes()