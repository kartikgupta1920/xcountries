import { useEffect, useState } from "react";

const CountryCard = ({ name, flagImg, flagAltText }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={flagImg}
        alt={"Flg of" + flagAltText}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const API = "https://xcountries-backend.azurewebsites.net/all";

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {countries.map((country) => (
        <CountryCard
          key={country.abbr}
          name={country.name}
          flagImg={country.flag}
          flagAltText={country.abbr}
        />
      ))}
    </div>
  );
}

export default Countries;
