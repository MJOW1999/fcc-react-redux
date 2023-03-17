import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
};

export const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      <Book author={firstBook.author} title={firstBook.title} />
      <Book author={secondBook.author} title={secondBook.title} />
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle form input");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
    </section>
  );
};

const Book = (author, title) => {
  return (
    <article className="book">
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
