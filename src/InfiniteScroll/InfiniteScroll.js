import React, { useState, useEffect } from "react";
import View from "./View";
import Loader from "./Loader";

const InfiniteScroll = () => {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?` +
        new URLSearchParams({
          _limit: 9,
          _page: page,
        })
    );
    const data = await res.json();
    setResponse((oldData) => [...oldData, ...data]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div>
      <View response={response} />
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
