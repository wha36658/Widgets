import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content:
      "React is a Javascript front-end library. It is used to show content to users and handle user events. Engineers use React to create reusable components",
  },
  {
    title: "How do we show content",
    content: "To show content you create components",
  },
  { title: "Why is React useful", content: "Engineers like React" },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
