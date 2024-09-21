import Layout from '../../components/Layout';
import ProgressBanner from '@/components/ProgressBanner';
import IndustryCard from '@/components/IndustryCard';
import Stepper from '@/components/Stepper';

import './styles.css';

function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="progressWrapper">
          <ProgressBanner />
        </div>
        <div className="mainContent">
          <div className="stepperWrapper">
            <Stepper />
          </div>
          <div className="industryCardWrapper">
            <IndustryCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
