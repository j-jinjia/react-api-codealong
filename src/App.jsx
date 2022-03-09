import { useEffect, useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(5);

  const url = "https://randomuser.me/api";

  const getUsers = async (resultNumber) => {
    const res = await fetch(url + `?results=${resultNumber}`);
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers(numberOfUsers);
  }, [numberOfUsers]);

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
  };

  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <label htmlFor="user-range">Number of users: {numberOfUsers}</label>
      <input
        id="user-range"
        type="range"
        min="1"
        max="10"
        value={numberOfUsers}
        onChange={handleInputChange}
      />
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
