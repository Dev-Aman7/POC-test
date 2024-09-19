import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import './styles.css';
const index = ({ children }) => {
  return (
    <div className="rootLayout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="mainContent">
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default index;
