import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import heroImage from "../../image/marketplace/hero.png";
let PageSize = 6;
function HeroCard({ heroData, getHeroID }) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return heroData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="hero-card-wrapper">
        {currentTableData.map((hero) => {
          return (
            <Link
              onClick={() => {
                getHeroID(hero.id);
              }}
              className="hero-card"
              to={`/hero/${hero.id}`}
            >
              <div className="id">#{hero.id}</div>
              <div className="type">{hero.tName.name}</div>
              <div className="rare">{hero.eName.name}</div>
              <div className="image">
                <img src={heroImage} alt={hero.id} />
              </div>
              <div className="price">{hero.price} BNC</div>
              <div className="card-boder">
                <div id="line-right"></div>
                <div id="line-bottom"></div>
                <div id="line-top"></div>
                <div id="line-left"></div>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={heroData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default HeroCard;
