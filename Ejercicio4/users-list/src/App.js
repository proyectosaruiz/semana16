import "./App.css";
// Podemos importar el JSON de la carpeta src
import users from "./data/users.json";
import { UsersList } from "./components/UsersList";

function App() {
  // O podemos hacer fetch si está en la carpeta public
  // fetch("users.json")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((body) => {
  //     console.log(body);
  //   });

  return (
    <>
      <header>
        <h1>Users List</h1>
      </header>

      <main>
        <UsersList users={users} />
      </main>

      <footer>
        <p>Hack a Boss 2022@</p>
      </footer>
    </>
  );
}

export default App;
