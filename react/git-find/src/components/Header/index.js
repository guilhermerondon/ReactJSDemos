import './styles.css';
import logo from '../../assets/github.png';

const Header = () => {
  return (
    <header>
        <h1>
            <img src={logo} alt="GitHub Logo" className="logo" />
            GitFind
        </h1>
    </header>
  )
}

export {Header};

