import {useState} from 'react';
import "../src/styles/global.css"
import { Counter } from './features/counter/Counter';
import { Theme } from './features/themeSlice/Theme';
import CounterByMe from './components/Counter/counter';
import Navbar from './components/Navbar/Navbar';
import Drawer from './components/Drawer/drawer';
function App() {
  const [isOpen, setIsOpen]=useState(false);
  
  function handleOpenDrawer(state:boolean){
    setIsOpen(state);
  } 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar openDrawer={handleOpenDrawer}/>
        <Drawer isOpen={isOpen} className='' position='left' removeContentWhileClosed={true} onClose={()=>setIsOpen(false)}>
          <div>This is a drawer</div>
        </Drawer>
        <Counter />
        <Theme/>
        <CounterByMe value={0}/>
        
      </header>
    </div>
  );
}

export default App;
