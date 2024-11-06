// Import the 'prompt-sync' module to enable user input from the console.
const prompt = require("prompt-sync")();

// Define a class named 'Book' with a constructor that initializes 'title', 'category', 'author', 'genre', and 'price'.
class Book {
  constructor(title, category, author, genre, price) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
}

// Initialize an empty array named 'books' to store book objects.
const books = [];

// Define a function 'addBook' that takes 'title', 'category', 'author', 'genre', and 'price' as parameters and adds a new book to the 'books' array.
function addBook(title, category, author, genre, price) {
  const book = new Book(title, category, author, genre, price);
  books.push(book);
  console.log(`Buku dengan judul '${title}' telah ditambah.`);
}

// Define a function 'searchBook' that takes 'title' as a parameter and searches for a book by its title in the 'books' array.
function searchBook(title) {
  const book = books.find((book) => book.title === title);
  if (book) {
    console.log(book);
  } else {
    console.log(`Buku dengan judul '${title}' tidak ditemukan.`);
  }
}

// Define a function 'deleteBook' that takes 'title' as a parameter and deletes a book by its title from the 'books' array.
function deleteBook(title) {
  const index = books.findIndex((book) => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    console.log(`Buku dengan judul '${title}' telah dihapus.`);
  } else {
    console.log(`Buku dengan judul '${title}' tidak ditemukan.`);
  }
}

// Define a function 'showBooks' that logs all books in the 'books' array to the console.
function showBooks() {
  if (books.length === 0) {
    console.log("Tidak ada buku :(");
  } else {
    books.forEach((book) => console.log(book));
  }
}

// Define a function 'searchBookByPrice' that takes 'price' as a parameter and searches for a book by its price in the 'books' array.
function searchBookByPrice(price) {
  const book = books.find((book) => book.price === price);
  if (book) {
    console.log(book);
  } else {
    console.log(`No book found with price '${price}'.`);
  }
}

// Fungsi 'getValidPrice' untuk memastikan user menginput angka yang valid.
function getValidPrice() {
  let price;
  while (true) {
    price = parseFloat(prompt("Enter price: "));
    if (!isNaN(price) && price > 0) {
      return price;
    } else {
      console.log("Invalid price. Please enter a positive number.");
    }
  }
}

// Define a function 'displayMenu' that displays a menu of options and handles user input to perform different actions.
function displayMenu() {
  while (true) {
    console.log("\nMenu:");
    console.log("1. Add book");
    console.log("2. Search book by title");
    console.log("3. Delete book by title");
    console.log("4. Show all books");
    console.log("5. Search book by price");
    console.log("6. Exit");

    // Prompt the user to enter a choice and perform the corresponding action, save the input in a variable 'choice'.
    const choice = prompt("Enter your choice: ");

    switch (choice) {
      case "1":
        const title = prompt("Enter title: ");
        const category = prompt("Enter category: ");
        const author = prompt("Enter author: ");
        const genre = prompt("Enter genre: ");
        const price = getValidPrice();
        addBook(title, category, author, genre, price);
        break;

      case "2":
        const searchTitle = prompt("Enter the title of the book to search: ");
        searchBook(searchTitle);
        break;

      case "3":
        const deleteTitle = prompt("Enter the title of the book to delete: ");
        deleteBook(deleteTitle);
        break;

      case "4":
        showBooks();
        break;

      case "5":
        const searchPrice = getValidPrice(); // Get a validated price for search
        searchBookByPrice(searchPrice);
        break;

      case "6":
        console.log("Exiting the application.");
        return;

      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

// Call 'displayMenu' to start the application.
displayMenu();
