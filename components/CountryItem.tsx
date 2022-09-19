import React from "react";

const CountryItem = ({ country }: { country: any }) => {
  return (
    <div className="flex flex-col border-4 h-48 border-teal-600 p-10 items-center text-center mt-5 mx-5 justify-center">
      <div className="text-5xl">{country.emoji}</div>
      <h2>{country.name}</h2>
      <button className="btn btn-primary w-fit">Visited</button>
    </div>
  );
};

export default CountryItem;
