import React, { useEffect, useState } from 'react';
import Menu from "./components/Menu"
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
        setFilteredUsers(data.results);
        setInitialUsers(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Random Users</h1>
      <Menu users={users} setUsers={setUsers}/>
      <UserTable users={users} setUsers={setUsers}/>
    </div>
  );
};

export default App;