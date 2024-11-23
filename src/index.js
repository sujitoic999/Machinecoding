import React from "react";
import ReactDOM from "react-dom/client";
import explorer from "./FolderStructure/data/filedata";
import "./index.css";
// import App from "./App";

import reportWebVitals from "./reportWebVitals";
//1. starRating Section
// import StarRating from "./StarRating/StarRating";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <StarRating limit={5} />
//   </React.StrictMode>
// );

//2. Search App section
// import SearchApp from "./SearchApp/SearchApp";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const list = ["Sujit", "Rishabh", "Anubhav", "Ashish", "Harsh"];
// root.render(
//   <React.StrictMode>
//     <SearchApp list={list} />
//   </React.StrictMode>
// );

//3. Carousel Section
// import Carousel from "./Carousel/Carousel";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Carousel />
//   </React.StrictMode>
// );

//4. SortingApiData in table

// import SortingApiData from "./SortingApiData/SortingApiData";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <SortingApiData />
//   </React.StrictMode>
// );

//5. Todo list section

// import Todo from "./Todo/Todo";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Todo />
//   </React.StrictMode>
// );

//6. FolderStructure section

// import Folder from "./FolderStructure/components/Folder";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Folder explorer={explorer} />
//   </React.StrictMode>
// );

//7. Infinite Scroll
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InfiniteScroll />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
