import React from 'react';
import { Typography } from '@mui/material';
import CheckIcon from '../../assets/CheckIcon.svg';
import UnCheckIcon from '../../assets/UnCheckIcon.svg';
import './styles.css';
const items = [
  {
    name: 'Industry',
    checked: true,
  },
  {
    name: 'Experience',
    checked: true,
  },
  {
    name: 'Hard Skills',
    checked: true,
  },
  {
    name: 'Soft Skills',
    checked: true,
  },
  {
    name: 'Language',
    checked: true,
  },
  {
    name: 'Current Location',
    checked: false,
  },
  {
    name: 'Base Earnings',
    checked: false,
  },
  {
    name: 'Work Place',
    checked: false,
  },
  {
    name: 'Employment Type',
    checked: false,
  },
  {
    name: 'Education',
    checked: false,
  },
  {
    name: 'Benefits',
    checked: false,
  },
  {
    name: 'About Me',
    checked: false,
  },
  {
    name: 'Sponsorship Available',
    checked: false,
  },
  {
    name: 'Attachments',
    checked: false,
  },
];

const Stepper = () => {
  return (
    <div className="rootStepper">
      {items.map((item) => {
        return (
          <div key={item.name} className="items">
            <img src={item.checked ? CheckIcon : UnCheckIcon} alt="check" />
            <Typography variant="body1">{item.name}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
