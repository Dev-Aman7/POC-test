import { IconButton } from '@mui/material';
import Logo from '../../assets/logo.svg';
import MenuIcon from '../../assets/Menu.svg';
import PersonIcon from '../../assets/Person.svg';
import './styles.css';
const Mobile = () => {
  return (
    <div className="rootMobileHeader">
      <IconButton>
        <img src={Logo} alt="logo" />
      </IconButton>
      <div className="profileWrapper">
        <IconButton>
          <img src={PersonIcon} alt="person" />
        </IconButton>
        <IconButton>
          <img src={MenuIcon} alt="menu" />
        </IconButton>
      </div>
    </div>
  );
};

export default Mobile;
