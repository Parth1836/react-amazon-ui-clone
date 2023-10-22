import {
  faBars,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo border">
          <div className="logo"></div>
        </div>

        <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="add-second">India</p>
          </div>
        </div>

        <div className="nav-search">
          <select className="search-select">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="search-input"
          />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <div className="nav-signin">
          <p>
            <span>Hello,sign in</span>
          </p>
          <p className="nav-second">Account & Lists</p>
        </div>

        <div className="nav-return">
          <p>
            <span>Returns</span>
          </p>
          <p className="nav-second">& Orders</p>
        </div>

        <div className="nav-cart border">
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </div>
      </div>
      <div className="panel">
        <div className="panela-all">
          <FontAwesomeIcon icon={faBars} />
          All
        </div>
        <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </div>
        <div className="panel-deals">
            Shop deals in Electronics
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-msg">
        <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in/">Click here to go to amazon.in</a></p>
        </div>
      </div>

      <div className="shop-section">
        <div className="box1 box">
            <div className="box-content">
            <h2>Clothes</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
           
        </div>
        <div className="box2 box">
        <div className="box-content">
            <h2>Health & Personal care</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>
        <div className="box3 box">
        <div className="box-content">
            <h2>Furniture</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>
        <div className="box4 box">
        <div className="box-content">
            <h2>Electronics</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>

        <div className="box5 box">
            <div className="box-content">
            <h2>Beauty picks</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
           
        </div>
        <div className="box6 box">
        <div className="box-content">
            <h2>Pet Care</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>
        <div className="box7 box">
        <div className="box-content">
            <h2>New Arrival in toys</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>
        <div className="box8 box">
        <div className="box-content">
            <h2>Discover fashion trends</h2>
            <div className="box-img"></div>
            <p>See more</p>
            </div>
        </div>
      </div>

      <div className="footer">
        <div className="foot-panel1">
            Back To Top
        </div>
        <div className="foot-panel2">
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blogs</a>
                <a>About Amazon</a>
                <a>About Devices</a>
                <a>About Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blogs</a>
                <a>About Amazon</a>
                <a>About Devices</a>
                <a>About Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blogs</a>
                <a>About Amazon</a>
                <a>About Devices</a>
                <a>About Science</a>
            </ul>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blogs</a>
                <a>About Amazon</a>
                <a>About Devices</a>
                <a>About Science</a>
            </ul>
        </div>
        <div className="foot-panel3">
            <div className="foot-logo">

            </div>
        </div>
        <div className="foot-panel4">
            <div className="pages">
                <a>Conditions of Use</a>
                <a>Privacy Notice</a>
                <a>Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
            © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>
      </div>
    </>
  );
};
