import React from "react";
const person = {
  name: "Abishek",
  address: {
    state: "Tamilnadu",
    country: "India",
  },
};
const update ={
    ...person,
    address:{
        ...person.address,state:"delhi"
    }
}
console.log("person:",person)
console.log("updated:",update)
function Immuteable() {
  return <div>Immuteable.js</div>;
}

export default Immuteable;
