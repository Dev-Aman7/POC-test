import { IconButton, Typography } from '@mui/material';
import InfoIcon from '../../assets/Info.svg';
import ArrowIcon from '../../assets/Arrow.svg';
import AddIcon from '../../assets/Add.svg';

import './styles.css';
const ActionBar = () => {
  return (
    <div className="rootActionBar">
      <div className="infoWrapper">
        <Typography variant="h1">Industry</Typography>
        <div className="description">
          <Typography>
            Choose the industries and the job categories that are most relevant
            to you.
          </Typography>
          <IconButton>
            <img src={InfoIcon} alt="info" />
          </IconButton>
        </div>
      </div>
      <div className="actionWrapper">
        <IconButton>
          <Typography>Import</Typography>
          <img src={ArrowIcon} alt="arrow" />
        </IconButton>
        <IconButton>
          <img src={AddIcon} alt="add" />
        </IconButton>
      </div>
    </div>
  );
};

export default ActionBar;
