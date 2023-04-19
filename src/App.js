
import './App.css';
import Blogs from './Component/BlogsPage/Blogs';
import { CaseStudies } from './Component/CaseStudies';
import AccorditionNew from './Component/FAQ/AccorditionNew';

import Faq from './Component/FAQ/Faq';
import HappyClient from './Component/HappyClient/HappyClient';
import { HappyClientReviews } from './Component/HappyClientReviews';
import PruthaTekServices from './Component/PruthaTekServices/PruthaTekServices';

function App() {

 
  return (
    <div className="App bg-[#ffff]">
    {/* <HappyClientReviews/> */}
    {/* <CaseStudies/> */}
    {/* <PruthaTekServices/> */}
    {/*  <Faq/>*/}
    {/*  <HappyClient/>*/}

    <Blogs/>
     
    </div>
  );
}

export default App;
