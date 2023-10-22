// import React from 'react';

// import { data } from "autoprefixer";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Clint = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  const handleAddDeletedUser = (id) => {
    fetch(`https://electronics-tecnology-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("deleted successfully");
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1>users : {usersData.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>last logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover">
                <th>1</th>
                <td> {user.email} </td>
                <td> {user.createdAt} </td>
                <td> {user.lastLoggedAt} </td>
                <td>
                  <button
                    onClick={() => handleAddDeletedUser(user._id)}
                    className="btn btn-ghost"
                  >
                    X{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clint;
