let books = [];

function addBook() {
  let bookname = document.getElementById("bookName").value;
  let authorname = document.getElementById("authorName").value;
  let bookdescription = document.getElementById("bookDescription").value;
  let pagesnumber = document.getElementById("pagesNumber").value;

  if (bookname && authorname && bookdescription && !isNaN(pagesnumber)) {
    let book = {
      name: bookname,
      authorName: authorname,
      bookDescription: bookdescription,
      pagesNumber: pagesnumber,
    };
    books.push(book);
    showbooks();
    clearInputs();
  } else {
    alert("please fill in all fields correctly.");
  }
}

function showbooks() {
  let booksDisplay = books.map(function (book, index) {
    return `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`;
  });

  document.getElementById("books").innerHTML = booksDisplay.join("");
}

function editbook(index) {
  let book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;

  books.splice(index, 1);
  showbooks();
}

function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}
