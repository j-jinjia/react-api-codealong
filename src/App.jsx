import { useEffect, useState } from "react";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import RangeInput from "./components/RangeInput/RangeInput";

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
      <RangeInput
        id="user-range"
        label={`Number of users: ${numberOfUsers}`}
        min={1}
        max={10}
        value={numberOfUsers}
        onChange={handleInputChange}
      />
      <CardContainer cards={users} />
    </div>
  );
};

export default App;
