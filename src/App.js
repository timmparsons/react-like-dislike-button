import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LikeButton />
        <DislikeButton />
      </div>
    );
  }
}

function LikeButton() {
  const [count, setCount] = React.useState(100);
  const [toggle, setToggle] = React.useState(false);
  const toggleTrueFalse = () => {
    setToggle(toggle => !toggle);
    setCount(prevCount => (prevCount === 101 ? 100 : 101));
  };
  return (
    <button
      className={`like-button ${toggle ? "liked" : ""}`}
      onClick={() => toggleTrueFalse()}
    >
      Like | {count}
    </button>
  );
}

function DislikeButton() {
  const [count, setCount] = React.useState(25);
  const [toggle, setToggle] = React.useState(false);
  const toggleTrueFalse = () => {
    setToggle(toggle => !toggle);
    setCount(prevCount => (prevCount === 25 ? 26 : 25));
  };
  return (
    <button
      className={`dislike-button ${toggle ? "disliked" : ""}`}
      onClick={() => toggleTrueFalse()}
    >
      Dislike | {count}
    </button>
  );
}
