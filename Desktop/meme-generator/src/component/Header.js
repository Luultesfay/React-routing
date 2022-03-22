import Trollface from "../images/Troll-Face.png";
const Header = () => {
  return (
    <header className="header">
      <img className="header-icon" src={Trollface} alt="Icon" />
      <h1 className="header--title">Meme Generator</h1>
      <h4 className="header--description">React Course-project 3</h4>
    </header>
  );
};
export default Header;
