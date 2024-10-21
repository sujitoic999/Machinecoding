import { useState } from "react";
import "./StarRating.css";

function StarRating(props) {
  const [rating, setRating] = useState(props.rating || 2);
  function handleClick(e) {
    setRating(e.target.getAttribute("value"));
  }
  return (
    <div onClick={handleClick}>
      {[...new Array(props.limit).keys()].map((item) => {
        return (
          <span
            key={item}
            value={item}
            // className={item < rating1 ? "star rated" : "star"}
          >
            {item <= rating ? "😊" : "😒"}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
