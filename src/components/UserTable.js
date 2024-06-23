import React from 'react';
import "../assets/style/user-table.css";

const UserTable = ({ users, setUsers }) => {
    const deleteUser = (uuid) => {
        const updatedUsers = users.filter(user => user.login.uuid !== uuid);
        setUsers(updatedUsers);
    };

    return(
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={user.login.uuid}>
                    <td>{`${user.name.first} ${user.name.last}`}</td>
                    <td>{user.location.country}</td>
                    <td>
                    <button className="btn-delete" onClick={() => deleteUser(user.login.uuid)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
};
  
  export default UserTable;
  