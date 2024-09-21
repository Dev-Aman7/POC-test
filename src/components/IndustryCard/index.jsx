import ActionBar from '../ActionBar';
import CardItem from '../CardItem';

import './styles.css';

const industriesAndRoles = [
  {
    main: 'Commercial Services & Supplies',
    sub: ['Business Development', 'Marketing Analyst'],
  },
  {
    main: 'Life Sciences Tools & Services',
    sub: ['Clinical Research', 'Data'],
  },
  {
    main: 'Software',
    sub: ['Data', 'DevOps'],
  },
  {
    main: 'Wireless Telecommunication Services',
    sub: ['Field Services', 'Network Architect'],
  },
  {
    main: 'Graphic Design',
    sub: [
      'Industrial Design Services',
      'Interior Design Services',
      'Graphic Design Services',
    ],
  },
];
const IndustryCard = () => {
  return (
    <div className="rootIndustryCard">
      <ActionBar />
      <div className="cardItemWrapper">
        {industriesAndRoles.map((item, index) => (
          <CardItem key={index} industry={item.main} roles={item.sub} />
        ))}
      </div>
    </div>
  );
};

export default IndustryCard;
