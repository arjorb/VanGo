import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searhParams, setSearchParams] = useSearchParams();
  const typeFilter = searhParams.get("type");
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVan = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

  const vanElements = displayVan.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => setSearchParams({ type: "simple" })} className="van-type simple">
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })} className="van-type luxury">
          luxury
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })} className="van-type rugged">
          rugged
        </button>
        <button onClick={() => setSearchParams({})} className="van-type clear-filters">
          Clear Filter
        </button>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
