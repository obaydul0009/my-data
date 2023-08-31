import HeaderImage from '../../assets/obay.jpg';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Obaydul</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, mollitia labore deserunt iure quis enim optio adipisci deleniti tempora sit.</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map((item) => <a kay={item.id} href={item.link} target='_blank'>{item.icon}</a> )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
