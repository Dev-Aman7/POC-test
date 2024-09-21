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
      <div>
        <IconButton>
          <img src={MenuIcon} alt="menu" />
        </IconButton>
        <IconButton>
          <img src={PersonIcon} alt="person" />
        </IconButton>
      </div>
    </div>
  );
};

export default Mobile;
