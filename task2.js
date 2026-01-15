// Task 2: listUsers()
export function listUsers(){
    const url ="http://localhost:3000/users";

    fetch(url)
    .then((response) => response.json())
    .then((datos) => {
        console.log("Lista:");
        console.table(datos);
    })
    .catch((error) => {
        console.error("Error, no se pudo obtener la lista");
        console.log("Error:", error.name);
        console.log("Mensaje:", error.message);
    });
};



