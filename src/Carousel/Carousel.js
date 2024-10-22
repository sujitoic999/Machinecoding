import { useEffect, useState, useeffect } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === items.length - 1) {
        setIndex(0);
      } else {
        console.log("index", index);
        setIndex(index + 1);
      }
    }, 1000);
    return ()=>{clearInterval(timer)}
  }, [index]);

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Prev</button>
      <div className="carousel-item">
        <img
          height="200"
          width="200"
          src={items[`${index}`].imageUrl}
          alt={items[`${index}`].title}
        />
        <h2>{items[`${index}`].title}</h2>
        <p>{items[`${index}`].description}</p>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;

//**IMPORTANT** using setInterval() inside useEffect()

//fromCarousel section doubt

// useEffect(() => {
//     const timer = setInterval(() => {
//       if (index === items.length - 1) {
//         setIndex(0);
//       } else {

//         setIndex(index + 1);
//       }
//     }, 1000);

//   }, []);

// why this code is not working properly..what is wrong with it?

//Solution

// The issue with the provided code arises due to how closures and state updates work in React, particularly within setInterval() inside a useEffect() hook.
// The main problem is that the setInterval() callback is capturing the initial value of index at the time of the first render and does not get the updated state values when index changes. This happens because,
// inside the callback, the index value is stale—it does not automatically update after each re-render.

// what will be wrong if I dont use return () => clearInterval(timer);?

//If you do not use return () => clearInterval(timer); inside your useEffect() hook, the setInterval() timer will continue running even after the component unmounts or when it re-renders?
// Conclusion:
// Not using clearInterval(timer) will result in:

// Memory leaks (timers continue running even after the component is removed from the DOM).
// Multiple timers running at once, leading to unexpected behavior or frequent state updates.
// Potential performance degradation over time.
// Always use clearInterval(timer) in the cleanup function of useEffect() to avoid these issues.
