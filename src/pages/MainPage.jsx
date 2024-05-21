import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/users");
      console.log("response ===", response);
      const data = await response.json();
      console.log("data ===", data);
      setUsers(data.data);
    };
    getUsers();
  }, []);
  return (
    <div className="main-page">
      <h1>Main page</h1>
      {users.length !== 0
        ? users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })
        : null}
    </div>
  );
};

export default MainPage;
