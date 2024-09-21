import { Typography, LinearProgress } from '@mui/material';

import './styles.css';
const ProgressBanner = () => {
  return (
    <div className="rootProgressBanner">
      <div className="messageWrapper">
        <Typography variant="h1" fontWeight={500}>
          Your (d) Academy Skills Passport
        </Typography>
        <Typography variant="subtitle2">13/14 steps completed</Typography>
      </div>
      <div className="progress">
        <LinearProgress
          variant="determinate"
          value={80}
          //   sx={{ width: '26.25rem' }}
        />
        <Typography variant="subtitle2">13/14</Typography>
      </div>
    </div>
  );
};

export default ProgressBanner;
