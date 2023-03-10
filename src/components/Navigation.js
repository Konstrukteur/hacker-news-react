import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <a href='https://konstrukteur.github.io/hacker-news-react/'>
        <img src={require("../images/logo-hn.png")}></img>
      </a>
      <NavLink to='/news' className='header-title'>
        Hacker News
      </NavLink>
      <div className='header-selector-container'>
        <NavLink to='/newest' className='header-selector'>
          news
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/front' className='header-selector'>
          past
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/newcomments' className='header-selector'>
          comments
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/ask' className='header-selector'>
          ask
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/show' className='header-selector'>
          show
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
