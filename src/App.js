import "./styles.css";
import data from "./data";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [clear, setClear] = useState(data);
  // const setCleart = () => {
  //   setClear("");
  // };
  return (
    <div className="App">
      <h1>{clear.length} birthday today</h1>
      {clear.map((person) => {
        return <List key={person.id} person={person} />;
      })}
      <button className="btn" onClick={() => setClear([])}>
        Clear all
      </button>
    </div>
  );
}
