import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import classes from "./sheader.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import Clogo from "../../../images/Clogo.svg";
import { HiChevronDown, HiOutlineSearch, HiArrowRight } from "react-icons/hi";

function HeaderSecond(props) {
  const [toggleSearchIconArrow, setToggleSearchIconArrow] = useState(false);

  return (
    <>
      <div
        className={classes.searchContainer}
        style={{ boxShadow: props.boxShadow }}
      >
        <div className={classes.discoverDiv}>
          <Link to="/" className={classes.imageLink}>
            <img src={Clogo} alt="..." className={classes.themeImg} />
          </Link>
          <ul className={classes.searchNavbar}>
            <li className={classes.searchNavbarLi}>
              <Link to="/" className={classes.homeLink}>
                HOME
              </Link>
            </li>
            <li className={classes.searchNavbarLi}>
              <Link to="/about" className={classes.LinkAbout}>
                <span>ABOUT</span>
                <HiChevronDown className={classes.dropDown} />
              </Link>
              <Fade>
                <ul className={classes.aboutList}>
                  <li className={classes.aboutListLi}>
                    <Link to="/about">Overview</Link>
                  </li>
                  <li className={classes.aboutListLi}>
                    <Link to=" ">Used Cars</Link>
                  </li>
                  <li className={classes.aboutListLi}>
                    <Link to=" ">Sell Cars</Link>
                  </li>
                  <li className={classes.aboutListLi}>
                    <Link to=" ">Core value</Link>
                  </li>
                  <li className={classes.aboutListLi}>
                    <Link to=" ">Why choose Us</Link>
                  </li>
                  <li className={classes.aboutListLi}>
                    <Link to=" ">Awards</Link>
                  </li>
                </ul>
              </Fade>
            </li>
            <li className={classes.searchNavbarLi}>
              <Link to="/cars" className={classes.ServiceLink}>
                CARS
              </Link>
            </li>
            <li className={classes.searchNavbarLi}>
              <Link to="/blog" className={classes.ServiceLink}>
                BLOG
              </Link>
            </li>
            <li className={classes.searchNavbarLi}>
              <Link to="/faq" className={classes.ServiceLink}>
                FAQ
              </Link>
            </li>
            <li className={classes.searchNavbarLi}>
              <Link to="/contact" className={classes.ServiceLink}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.mainSearch}>
          <div className={classes.search}>
            {toggleSearchIconArrow && (
              <Fade right>
                <HiOutlineSearch className={classes.searchIcon} />
              </Fade>
            )}
            <input
              type="text"
              placeholder="Search ..."
              className={classes.inputSearch}
              onClick={() => {
                setToggleSearchIconArrow(!toggleSearchIconArrow);
              }}
            />
            {toggleSearchIconArrow && (
              <Fade left>
                <HiArrowRight className={classes.arrow} />
              </Fade>
            )}
          </div>
          <div className={classes.cartHelp}>
            <div className={classes.cart}>
              <div className={classes.border}></div>
              <MdFavoriteBorder size={25} />

              <div className={classes.help}>
                <p className={classes.question}>Need Help?</p>
                <Link to=" " className={classes.timeHelp}>
                  Every day, 24 hours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSecond;
