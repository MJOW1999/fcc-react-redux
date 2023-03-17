import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    id: 2,
  },
];

export const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} getBook={getBook} />
      ))}
    </section>
  );
};

const Book = (book) => {
  const { title, author, getBook, id } = book;

  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Click me!</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
