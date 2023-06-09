import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVan = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

  const vanElements = displayVan.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
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
        <button onClick={() => setSearchParams({ type: "simple" })} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
          luxury
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
          rugged
        </button>
        {typeFilter ? (
          <button onClick={() => setSearchParams({})} className="van-type clear-filters">
            Clear Filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
