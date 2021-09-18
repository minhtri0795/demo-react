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
      const url = `http://apifairyway.melysoft.com/NftHeros`;
      const response = await fetch(url);
      const data = await response.json();
      setHeroData(data);
    };
    fecthHeroData();
  }, []);

  return (
    <div className="marketplace-section">
      <div className="marketplace-container">
        <div className="marketplace-container__top">
          <div className="logo">
            <Link to="/">
              <img src={smallLogo} alt="logo" />
            </Link>
          </div>
          <h2 className="market-title">MARKETPLACE</h2>
        </div>

        <div className="marketplace-container__bottom">
          <div className="filter-box">
            <div className="filter-header">
              <h5 className="filter-header">FILTERS</h5>
              <div className="clear-button">Clear Filter</div>
            </div>
            <div className="filter-control">
              <div className="filter-control-wrapper filter-control-sort">
                <label>Sort by</label>
                <select name="sort" onChange={onChange} id="">
                  <option value="">----Select-----</option>
                  <option value="LowestPrice">Lowest Price</option>
                  <option value="HighestPrice">Highest Price</option>
                  <option value="HighestLevel">Highest Level</option>
                  <option value="RecentlyListed">Recently Listed</option>
                  <option value="RecentlySold">Recently Sold</option>
                </select>
              </div>
              <div className="filter-control-wrapper">
                <label htmlFor="HeroID">Hero ID</label>
                <div className="search-input">
                  <input onChange={onChange} type="text" name="HeroID" />
                </div>
              </div>
            </div>
            <div className="filter-control hide-on-pc">
              <div className="filter-control-wrapper">
                <label>Rare</label>
                <select name="" id="">
                  <option value="Mercury">Mercury</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Mercury">Mercury</option>
                  <option value="Mercury">Mercury</option>
                </select>
              </div>
              <div className="filter-control-wrapper">
                <label>Type</label>
                <select name="" id="">
                  <option value="Go ty">Go ty</option>
                  <option value="Go.A">Go.A</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Go. hU">Go. hU</option>
                  <option value="Go. GoH">Go.GoH</option>
                </select>
              </div>
            </div>
            <div className="filter-switch">
              <div className="filter-switch-wrapper">
                <span>Owned</span>
                <div class="switch">
                  <input type="checkbox" id="owned" />
                  <label for="owned">
                    <div class="marker"></div>
                  </label>
                </div>
              </div>
              <div className="filter-switch-wrapper">
                <span>Your Offers</span>
                <div class="switch">
                  <input type="checkbox" id="offers" />
                  <label for="offers">
                    <div class="marker"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-group-title">
                <span>Races</span>
              </div>
              <div className="filter-group-item">
                {/* {filterData.element.map((filter) => {
                  return (
                    <div className="check-box-group">
                      <label className="check-box__container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <span className="check-box__label">{filter.name}</span>
                    </div>
                  );
                })} */}
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="Venus" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Venus</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="Mercury" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Mercury</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="Saturn" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Saturn</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="Jupiter" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Jupiter</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="Mark" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Mark</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" name="ProX" onChange={onChange} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">ProX</span>
                </div>
              </div>
            </div>
            <div className="filter-group">
              <div className="filter-group-title">
                <span>Type</span>
              </div>
              <div className="filter-group-item">
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Go.tY</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Go. A</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Saturn</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Go. hU</span>
                </div>
                <div className="check-box-group">
                  <label className="check-box__container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <span className="check-box__label">Go. GoH</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-market">
            <HeroCard heroData={heroData} getHeroID={getHeroID} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
