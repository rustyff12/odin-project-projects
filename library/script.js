const displayBooks = document.querySelector(".display-books");
const newBookForm = document.querySelector("#new-book-form");
const submitBook = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-button");
const close = document.querySelector(".close-modal");

modalBtn.addEventListener("click", () => {
    console.log("button clicked");
    modal.classList.add("active");
});

close.addEventListener("click", () => {
    console.log("close clicked");
    modal.classList.remove("active");
});

const myLibrary = [
    {
        id: 1,
        name: "Sample Book",
        author: "Sample Author",
        pages: 200,
        hasRead: true,
    },
];
let nextId = 2;

function Book(name, author, pages, hasRead) {
    this.id = nextId++;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? true : false;
}
myLibrary.push(new Book("Sample Book", "Sample Author", 200, true));

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const hasRead = document.getElementById("has-read").checked;

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
