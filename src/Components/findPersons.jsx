import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;
import React from "react";

export const findPersons = () => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  return <div>findPersons</div>;
};
