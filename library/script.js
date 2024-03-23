const displayBooks = document.querySelector(".display-books");
const newBookForm = document.querySelector("#new-book-form");
const submitBook = document.querySelector("#submit");
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
// myLibrary.push(new Book("Sample Book", "Sample Author", 200, true));
newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const hasRead = document.getElementById("has-read").checked;

    const newBook = new Book(title, author, pages, hasRead);
    addBookToLibrary(newBook);
    addToDisplay(newBook);

    newBookForm.reset();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addToDisplay(book) {
    if (!document.getElementById(`book-${book.id}`)) {
        const bookCard = document.createElement("div");
        bookCard.id = `book-${book.id}`;

        const bookUl = document.createElement("ul");
        const titleLi = document.createElement("li");
        const authorLi = document.createElement("li");
        const pagesLi = document.createElement("li");
        const readLi = document.createElement("li");

        // Set text content for each list item
        titleLi.textContent = `Title: ${book.name}`;
        authorLi.textContent = `Author: ${book.author}`;
        pagesLi.textContent = `Pages: ${book.pages}`;
        readLi.textContent = `Read: ${book.hasRead ? "Yes" : "No"}`;

        // Append list items to the UL
        bookUl.appendChild(titleLi);
        bookUl.appendChild(authorLi);
        bookUl.appendChild(pagesLi);
        bookUl.appendChild(readLi);

        // Append UL to the book card
        bookCard.appendChild(bookUl);

        // Append the book card to the displayBooks
        displayBooks.appendChild(bookCard);
    }
}
