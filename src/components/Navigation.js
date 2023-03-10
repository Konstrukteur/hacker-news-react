import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <a href='https://konstrukteur.github.io/hacker-news-react/'>
        <img src={require("../images/logo-hn.png")}></img>
      </a>
      <NavLink to='/hacker-news-react/news' className='header-title'>
        Hacker News
      </NavLink>
      <div className='header-selector-container'>
        <NavLink to='/hacker-news-react/newest' className='header-selector'>
          news
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/hacker-news-react/front' className='header-selector'>
          past
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink
          to='/hacker-news-react/newcomments'
          className='header-selector'
        >
          comments
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/hacker-news-react/ask' className='header-selector'>
          ask
        </NavLink>
        <div className='header-seperator'>|</div>
        <NavLink to='/hacker-news-react/show' className='header-selector'>
          show
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
