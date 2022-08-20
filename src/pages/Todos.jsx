import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Todos() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setIsLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="intro">
        <h1>Todo</h1>
      </div>
      <div className="tables">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td rowSpan="4" colSpan="4">
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                  </div>
                </td>
              </tr>
            )}
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed === true ? "active" : "inactive"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
