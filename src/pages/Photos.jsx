import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Photos() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setIsLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="intro">
        <h1>Photos</h1>
      </div>
      <div className="tables">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Album Id</th>
              <th>Title</th>
              <th>Url </th>
              <th>Thumbnail Url</th>
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
                <td>{item.albumId}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
