import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetch = async () => {
    setIsLoading(true);
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    setIsLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="intro">
        <h1>Users</h1>
      </div>
      <div className="tables">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
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
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  {item.address.street} {item.address.suite} {item.address.city}{" "}
                  {item.address.zipcode}
                </td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  {item.company.name} {item.company.catchPhrase}{" "}
                  {item.company.bs}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
