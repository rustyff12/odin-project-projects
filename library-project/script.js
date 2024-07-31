const displayBooks = document.querySelector(".display-books");
const newBookForm = document.querySelector("#new-book-form");
const submitBook = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-button");
const close = document.querySelector(".close-modal");

let nextId = 2;
displayBooks.addEventListener("click", (e) => {
    const div = e.target.closest("div");
    const divId = e.target.closest("div").id;
    const deleteId = e.target.id;
    // CHeck to see delete and div match
    if (divId.split("-")[1] === deleteId.split("-")[1]) {
        div.remove();
    }
    // If list is empty, reset id
    if (displayBooks.childElementCount === 0) {
        nextId = 1;
    }
});

modalBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

close.addEventListener("click", () => {
    modal.classList.remove("active");
});

const myLibrary = [];

function Book(name, author, pages, hasRead) {
    this.id = nextId++;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? true : false;
}

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get input values
    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const hasRead = document.getElementById("has-read").checked;

    // New instance of Book
    const newBook = new Book(title, author, pages, hasRead);
    addBookToLibrary(newBook);
    addToDisplay(newBook);
    modal.classList.remove("active");
    newBookForm.reset();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addToDisplay(book) {
    if (!document.getElementById(`book-${book.id}`)) {
        const bookCard = document.createElement("div");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-book");
        deleteButton.innerText = "Delete";
        bookCard.id = `book-${book.id}`;
        deleteButton.id = `delete-${book.id}`;
        const bookUl = document.createElement("ul");

        // Create li elements with span labels
        function createListItem(label, text) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = `${label}: `;
            li.appendChild(span);
            li.appendChild(document.createTextNode(text));
            return li;
        }

        // Create and append li items to ul
        bookUl.appendChild(createListItem("Title", book.name));
        bookUl.appendChild(createListItem("Author", book.author));
        bookUl.appendChild(createListItem("Pages", book.pages));
        bookUl.appendChild(createListItem("Read", book.hasRead ? "Yes" : "No"));

        // Append ul to book card
        bookCard.appendChild(bookUl);
        bookCard.appendChild(deleteButton);
        // append to displayBooks
        displayBooks.appendChild(bookCard);
    }
}
