import React from "react";

function PureFunction() {
  //this is not a pure Fnction
  const sum = (data) => data * Math.random();
  // this is pure Function
  const sum1 = (data) => data * 3;
  //this is not pure Function
  const isEligible = (data) => data > minAge;
  //this is pure Function
  const isEligible1 = (data, minAge) => data > minAge;
  return <div></div>;
}

export default PureFunction;
