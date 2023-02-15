import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_NUMBER } from "../Components/persons/graphql-mutations";

export const PhoneForm = ({ notifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [changeNumber, result] = useMutation(EDIT_NUMBER);

  useEffect(() => {
    if (result.data && result.data.editNumber === null) {
      console.log("Person not found");
      notifyError("Person not found");
    }
  }, [result.data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeNumber({ variables: { name, phone } });
    setName("");
    setPhone("");
  };

  return (
    <div>
      <div>Edit Phone Number</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button>Change Phone</button>
      </form>
    </div>
  );
};
