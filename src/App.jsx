import React, { useState } from "react";
import "./App.css";
import { Persons } from "./Components/Persons";
import { PersonForm } from "./Components/PersonForm";
import { usePersons } from "./Components/persons/custom-hooks";
import { Notify } from "./Components/Notify";
import { PhoneForm } from "./Components/PhoneForm";

function App() {
  const { data, loading, error } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  if (error) return <span style="color: red">{error}</span>;

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };

  return (
    <div className="App">
      <Notify errorMessage={errorMessage} />
      {loading ? <p>Loading...</p> : <Persons persons={data?.allPersons} />}
      <div>
        <PersonForm notifyError={notifyError} />
      </div>
      <div>
        <PhoneForm notifyError={notifyError} />
      </div>
    </div>
  );
}

export default App;
