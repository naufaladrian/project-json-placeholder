import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Albums() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://jsonplaceholder.typicode.com/albums");
    setIsLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="intro">
        <h1>Albums</h1>
      </div>
      <div className="tables">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Usr Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td rowSpan="4" colSpan="8">
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
