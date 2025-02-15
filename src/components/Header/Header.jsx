import React from 'react'
import "./Header.css"
import NetflixLogo from "../../assets/images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="headerOuterContainer">
      <div className="headerContainer">
        <div className="headerLeft">
          <ul>
            {/* <li><img src={NetflixLogo} alt="Netflix logo" /></li> */}
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
                <NotificationsNoneIcon/>
            </li>
            <li>
                <AccountBoxIcon/>
            </li>
            <li>
                <ArrowDropDownIcon/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header