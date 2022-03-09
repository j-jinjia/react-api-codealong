import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import UserCard from "./components/UserCard/UserCard";

//https://randomuser.me/api/?results=5000

const App = () => {
  const [user, setUser] = useState();

  const url = "https://randomuser.me/api/";

  const getUsers = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUsers} label="Get Random User" />
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
