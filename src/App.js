import './style.css';

// sections
import Card from './sections/Card';
import Content from './sections/Content';

// components
import Cursor from './components/Cursor'


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
