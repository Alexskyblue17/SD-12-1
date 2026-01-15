// Task 3: addUser(first_name, last_name, email)
export function addUser(nombre, apellido, email) {
  const url = "http://localhost:3000/users";
  const nuevoUsuario = {
    first_name: nombre,
    last_name: apellido,
    email: email
  };
}
