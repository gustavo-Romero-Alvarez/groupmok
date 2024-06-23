import React from 'react'

const Menu = ({users, setUsers}) => {
    // const coloredUsers = () => {
    //     // Crear una copia de la lista actual de usuarios
    //     const updatedUsers = [...users];
        
    //     // Alternar colores en las filas
    //     updatedUsers.forEach((user, index) => {
    //       if (index % 2 === 0) {
    //         user.isColored = true; // Marcar filas pares como coloreadas
    //       } else {
    //         user.isColored = false; // Marcar filas impares como no coloreadas
    //       }
    //     });
    
    //     // Actualizar el estado de usuarios
    //     setUsersList(updatedUsers);
    // };

    const filteredUsersByCountry = () => {
        // Crear una copia de la lista actual de usuarios y ordenar por país
        const sortedUsers = [...users].sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        );
    
        // Actualizar el estado de usuarios
        setUsers(sortedUsers);
    };
    
    // const initialUsers = () => {
    //     setUsers(usersList);
    // };

    return (
        <ul>
            {/* <li><button onClick={coloredUsers}>Colorear</button></li> */}
            <li><button onClick={filteredUsersByCountry}>Ordenar por pais</button></li>
            {/* <li><button onClick={initialUsers}>Estado inicial</button></li> */}

        </ul>
    )
}

export default Menu;
