import { IconButton, Typography } from '@mui/material';
import EditIcon from '../../assets/Edit.svg';
import DeleteIcon from '../../assets/Delete.svg';

import './styles.css';
const CardItem = ({ industry, roles }) => {
  return (
    <div className="rootCardItem">
      <div className="infoWrapper">
        <Typography variant="body1">{industry}</Typography>
        <div className="description">
          <Typography>{roles.join(', ')}</Typography>
        </div>
      </div>
      <div className="actionWrapper">
        <IconButton>
          <img src={DeleteIcon} alt="delete" />
        </IconButton>
        <IconButton>
          <img src={EditIcon} alt="edit" />
        </IconButton>
      </div>
    </div>
  );
};

export default CardItem;
