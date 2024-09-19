import { IconButton, Typography } from '@mui/material';
import Logo from '../../assets/logo.svg';
import HomeIcon1 from '../../assets/HomeIcon1.svg';
import MyPassport from '../../assets/MyPassport.svg';
import LearningIcon from '../../assets/LearningIcon.svg';
import JobMatchesIcon from '../../assets/JobMatchesIcon.svg';
import ChatIcon from '../../assets/ChatIcon.svg';
import SettingsIcon from '../../assets/SettingsIcon.svg';
import LogoutIcon from '../../assets/LogoutIcon.svg';
import './styles.css';

const sidebarItems = [
  { name: 'Home', icon: HomeIcon1 },
  { name: 'My Passport', icon: MyPassport, active: true },
  { name: 'Learning', icon: LearningIcon },
  { name: 'Job Matches', icon: JobMatchesIcon },
  { name: 'Chat', icon: ChatIcon },
];
const sidebarFooterItems = [
  { name: 'Settings', icon: SettingsIcon },
  { name: 'Logout', icon: LogoutIcon },
];
const Sidebar = () => {
  return (
    <div className="rootSidebar">
      <div>
        <div>
          <IconButton>
            <img src={Logo} alt="logo" />
          </IconButton>
        </div>

        <div className="itemsWrapper">
          {sidebarItems.map((item) => (
            <IconButton key={item.name} className={item.active ? 'active' : ''}>
              <img src={item.icon} alt={item.name} />
              <Typography variant="body1">{item.name}</Typography>
            </IconButton>
          ))}
        </div>
      </div>
      <div>
        <div></div>

        <div className="itemsWrapper">
          {sidebarFooterItems.map((item) => (
            <IconButton key={item.name} className={item.active ? 'active' : ''}>
              <img src={item.icon} alt={item.name} />
              <Typography variant="body1">{item.name}</Typography>
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
