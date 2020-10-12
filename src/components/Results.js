import React, { useEffect, useState } from "react";
import { getDonations } from "../api";
import Card from "./Card";

const SINGAPORE = "Singapore";

const Results = () => {
  const [locations, setLocations] = useState([]);
  const [donations, setDonations] = useState([]);
  const [division, setDivision] = useState(undefined);

  useEffect(() => void loadData(), []);

  const loadData = async () => {
    const data = await getDonations();
    const uniqueLocations = Array.from(new Set(data.map((item) => item.division)));
    setDivision(SINGAPORE);
    setDonations(data);
    setLocations([SINGAPORE, ...uniqueLocations]);
  };

  const onSelect = (e) => {
    setDivision(e.target.value);
  };

  if (donations.length === 0) {
    return (
      <section className="results">
        <div className="container">
          <i>loading...</i>
        </div>
      </section>
    );
  }

  return (
    <section className="results">
      <div className="container">
        <h2>
          Items needed in:
          <select value={division} onChange={onSelect}>
            {locations.map((location) => (
              <option>{location}</option>
            ))}
          </select>
        </h2>
        {donations
          .filter((item) => division === SINGAPORE || item.division === division)
          .map((item) => (
            <Card name={item.name} quantity={item.quantity} unit={item.unit} />
          ))}
      </div>
    </section>
  );
};
export default Results;
