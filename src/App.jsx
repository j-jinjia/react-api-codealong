import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { useState } from "react";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState();
  const url = "https://randomuser.me/api/?results=5";
  /* const getUser = () => {
    console.log("getting user");
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        const requestUser = data.results[0];
        console.log(requestUser);
        setUser({
          name: `${requestUser.name.first} ${requestUser.name.last}`,
          email: requestUser.email,
          phoneNumber: requestUser.phone,
          image: requestUser.picture.large,
        });
      }); 
  };*/
  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const userArray = data.results;
    console.log(userArray);
    const requestUser = userArray.map((user) => {
      console.log(user);
      setUser({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phoneNumber: user.phone,
        image: user.picture.large,
      });
      return user;
    });
    console.log(requestUser);
    return requestUser;

    /*     const requestUser = data.results[0];
    setUser({
      name: `${requestUser.name.first} ${requestUser.name.last}`,
      email: requestUser.email,
      phoneNumber: requestUser.phone,
      image: requestUser.picture.large,
    }); */
  };
  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button onClick={getUser} label="Get Random User" />
      {user && (
        <ProfileCard
          name={user.name}
          email={user.email}
          phoneNumber={user.phoneNumber}
          image={user.image}
        />
      )}
    </div>
  );
};
