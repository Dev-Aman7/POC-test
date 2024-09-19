import React from 'react';
import UserIcon from '../../assets/userIcon.svg';
import { IconButton, Typography } from '@mui/material';
import './styles.css';
const Header = () => {
  return (
    <div className="rootHeader">
      <IconButton>
        <img src={UserIcon} alt="userIcon" height={60} width={60} />
      </IconButton>
      <div>
        <Typography variant="subtitle1">Viridiana Alverde</Typography>
        <Typography variant="subtitle2">Actively Looking</Typography>
      </div>
    </div>
  );
};

export default Header;
