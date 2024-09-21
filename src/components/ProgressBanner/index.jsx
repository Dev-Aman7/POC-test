import { Typography, LinearProgress, Button } from '@mui/material';

import './styles.css';
const ProgressBanner = () => {
  return (
    <div className="rootProgressBanner">
      <div className="messageWrapper">
        <Typography variant="h1">Your (d) Academy Skills Passport</Typography>
        <Typography variant="subtitle2">13/14 steps completed</Typography>
      </div>
      <div className="progress">
        <LinearProgress
          variant="determinate"
          value={92}
          className="progressBar"
        />
        <Typography variant="subtitle2">13/14</Typography>
      </div>
      <Button variant="outlined">See Progress</Button>
    </div>
  );
};

export default ProgressBanner;
