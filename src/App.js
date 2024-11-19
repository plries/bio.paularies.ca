import './style.css';

import Cursor from './components/Cursor'
import Card from './sections/Card';
import Content from './sections/Content';

function App() {
  
  return (
    <div className="col-12-8-4">
      <Cursor/>
      <Card/>
      <Content/>
    </div>
  );
}

export default App;
