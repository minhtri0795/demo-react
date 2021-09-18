import React, { useEffect, useState } from "react";
import "./HeroDetail.scss";
import { Link } from "react-router-dom";
import smallLogo from "../../image/logo-small.png";
import loadingCircle from "../../image/loading.svg";
import heroImage from "../../image/marketplace/hero-detail-image.svg";
import ability1 from "../../image/marketplace/Abilities-quickly.png";
import ability2 from "../../image/marketplace/Abilities-earthquake.png";
import ability3 from "../../image/marketplace/Abilities-Heal.png";
function HeroDetail({ heroId }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  });

  const [heroDetail, setHeroDetail] = useState({});
  const [heroRare, setRare] = useState({});
  const [heroType, setType] = useState({});
  useEffect(() => {
    const fecthHeroData = async () => {
      const url = `http://apifairyway.melysoft.com/NftHeros?id=${heroId}`;
      const response = await fetch(url);
      const data = await response.json();
      setHeroDetail(data[0]);
      setRare(data[0].eName);
      setType(data[0].tName);
    };
    fecthHeroData();
  }, []);
  return (
    <div className="herodetail-section">
      <div className="herodetail-container">
        <div className="herodetail-container__top">
          <h1>check reload</h1>
          <div className="logo">
            <Link to="/">
              <img src={smallLogo} alt="logo" />
            </Link>
          </div>
          <h2 className="herodetail-title">MARKETPLACE</h2>
        </div>
        <div className="herodetail-container__bottom">
          <Link className="button-back" to="/marketplace">
            BACK
          </Link>

          <div className="player-container">
            <div className="player-character">
              <div className="player-character__header">
                <div className="row">
                  <div>
                    <span className="player-character__rare">
                      {heroRare.name}
                    </span>
                    <span className="elip"></span>
                    <span className="player-character__type">
                      {heroType.name}
                    </span>
                  </div>
                  <div className="player-character__id">#{heroDetail.id}</div>
                </div>
                <div className="player-character__name">{heroDetail.name}</div>
              </div>
              <div className="player-character__image">
                {loading ? (
                  <img src={loadingCircle} alt="" />
                ) : (
                  <img src={heroImage} alt="" />
                )}
              </div>
            </div>
            <div className="player-info">
              <div className="player-info__header">
                <a href="#" className="buy-button">
                  BUY NOW
                </a>
                <div className="player-info__price">
                  <p className="bnb-price">{heroDetail.price} BNB</p>
                  <p className="fiat-price">{`~300$`}</p>
                </div>
              </div>
              <div className="player-info__main">
                <div className="player-info__main__title">Informations</div>
                <div className="player-info__main__wrapper">
                  <div className="player-state attack">
                    <div className="index">Attack</div>
                    <div className="value">{heroDetail.strength}</div>
                  </div>
                  <div className="line"></div>
                  <div className="player-state heart">
                    <div className="index">Heart</div>
                    <div className="value">{heroDetail.hp}</div>
                  </div>
                  <div className="line"></div>
                  <div className="player-state defend">
                    <div className="index">Defend</div>
                    <div className="value">{heroDetail.defend}</div>
                  </div>
                </div>
              </div>
              <div className="player-info__abilities">
                <div className="player-info__main__title">Abilities</div>
                <div className="abilities-container">
                  <div className="ability-item">
                    <img src={heroDetail.intelligen ? ability1 : ""} alt="" />
                    <span>{heroDetail.intelligen ? "Intelligen" : ""}</span>
                  </div>
                  <div className="ability-item">
                    <img src={heroDetail.marshal ? ability2 : ""} alt="" />
                    <span>{heroDetail.marshal ? "Marshal" : ""}</span>
                  </div>
                  <div className="ability-item">
                    <img src={heroDetail.expert ? ability3 : ""} alt="" />
                    <span>{heroDetail.expert ? "Expert" : ""}</span>
                  </div>
                  {/* {heroDetailData.abilities.map((ability) => {
                    return (
                      
                    );
                  })} */}
                </div>
              </div>
              <div className="player-infor__offer">
                <div className="player-info__main__title">Offers</div>
                <table
                  className="table-scroll small-first-col"
                  id="player-offer-table"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>Price</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody class="body-half-screen">
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                    <tr>
                      <td>AAA</td>
                      <td>300</td>
                      <td>28/08/2021</td>
                    </tr>
                  </tbody>
                </table>
                <div className="buy-button">OFFER</div>
              </div>
            </div>
            <div className="player-infor__offer full-width ">
              <div className="player-info__main__title">SALE HISTORY</div>
              <table
                className="table-scroll small-first-col"
                id="player-offer-table"
                cellspacing="0"
                cellpadding="0"
              >
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Price</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody class="body-half-screen">
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                  <tr>
                    <td>AAA</td>
                    <td>300</td>
                    <td>aaaaaaaa</td>
                    <td>bbbbbbbb</td>
                    <td>28/08/2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDetail;
