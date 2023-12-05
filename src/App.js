import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
import './static/milestone.css';
import './static/listStone.css';
import ChapterDash from './Component/ChapterDashBord/ChapterDash';
import Placement from './Component/PlacementCell/Placement';
import CodeStudio from './Component/CodeStudio/CodeStudio';

function App() {
  let d = 10;
  return (
    <div className="container-fluied" >
      <Router>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/chapter/Dashboard/:id' Component={ChapterDash} />
          <Route exact path='/placement/cell' Component={Placement}/>
          <Route exact path='/code/studio' Component={CodeStudio}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
