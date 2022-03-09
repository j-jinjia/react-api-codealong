import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";

const App = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const url = "https://api.kanye.rest";

  const getKanyeQuote = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setQuote(data.quote);
          setLoading(false);
        }, 1000);
      });
  };

  return (
    <div className="app">
      <h1>Kanye Quote Generator</h1>
      <Button onClick={getKanyeQuote} label="Get Some Ye" />
      <p className="app__text">{loading ? "Getting quote..." : quote}</p>
    </div>
  );
};

export default App;
