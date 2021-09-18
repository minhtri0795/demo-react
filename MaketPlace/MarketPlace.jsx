import React, { useEffect, useState } from "react";
import "./MarketPlace.scss";
import smallLogo from "../../image/logo-small.png";
import ability1 from "../../image/marketplace/Abilities-quickly.png";
import ability2 from "../../image/marketplace/Abilities-earthquake.png";
import ability3 from "../../image/marketplace/Abilities-Heal.png";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

function MarketPlace({ getHeroID }) {
  const initialState = {
    HeroID: "",
    sort: "",
    rareFormat: {
      Venus: false,
      Mecury: false,
      Saturn: false,
      Jupiter: false,
      Mark: false,
      ProX: false,
    },
    typeFormat: {
      "Go ty": false,
      "Go.A": false,
      "Go. hU": false,
      "Go. GoH": false,
    },
  };

  const [filterData, setFilterData] = useState({ element: [], type: [] });
  const [handleFilter, setHandleFilter] = useState(initialState);
  const [heroData, setHeroData] = useState([]);
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setHandleFilter({
        ...handleFilter,
        rareFormat: { ...handleFilter.rareFormat, [name]: checked },
      });
    } else if (type === "file") {
      setHandleFilter({ ...handleFilter, [name]: e.target.files[0] });
    } else {
      setHandleFilter({ ...handleFilter, [name]: value });
    }
  };
  useEffect(() => {
    const fecthHeroData = async () => {
      const url = `http:...com/NftHeros`;
      const response = await fetch(url);
      const data = await response.json();
      setHeroData(data);
    };
    fecthHeroData();
  }, []);

  return (
    <div className="marketplace-section">
    
          <div>..... code UI</div>
    
          <div className="hero-market">
            <HeroCard heroData={heroData} getHeroID={getHeroID} />
          </div>

    </div>
  );
}

export default MarketPlace;
