import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";
export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return getVan(params.id);
};

const HostVanDetail = () => {
  const currentVan = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161615",
  };
  return (
    <section>
      <Link to="/host/hostvans/" relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink to="." end style={({ isActive }) => (isActive ? activeStyle : null)}>
            Details
          </NavLink>

          <NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyle : null)}>
            Pricing
          </NavLink>

          <NavLink to="photos" style={({ isActive }) => (isActive ? activeStyle : null)}>
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetail;
