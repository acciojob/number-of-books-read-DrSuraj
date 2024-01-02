const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Filter the books with readingStatus as true and get the count
  const readBooks = library.filter(book => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
};

// Alert the number of books read
alert(numberOfBooksRead());
