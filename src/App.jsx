import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (e) => {
    console.log(e.target, "wporkong");
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              Id <button onClick={handleFilter}>^</button>
            </th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Stock</th>
            <th>Thumbnail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((val) => (
              <tr key={val.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{val.id} </td>
                <td>{val.title}</td>
                <td>{val.description}</td>
                <td>{val.brand}</td>
                <td>{val.category}</td>
                <td>{val.rating}</td>
                <td>{val.price}</td>
                <td>{val.discountPercentage}</td>
                <td>{val.stock}</td>
                <td>
                  <img src={val.thumbnail} height={40} width={50} />
                </td>
                <td>Edit, Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
