import React, { useState, useEffect } from "react";

const SortingApiData = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch("https://reqres.in/api/users");
        const result = await res.json();
        setApiData(
          result?.data.sort((a, b) => {
            return a.first_name.localeCompare(b.first_name);
          })
        );
      } catch (err) {
        if (err) {
          alert(err);
        }
      }
    }
    fetchdata();
  }, []);

  console.log("apiData", apiData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={index}>
              <td>{`${item.first_name} ` + ` ${item.last_name}`}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortingApiData;
