import {useState} from 'react';
import "../src/styles/global.css"
import { Counter } from './features/counter/Counter';
import { Theme } from './features/themeSlice/Theme';
import CounterByMe from './components/Counter/counter';
import Navbar from './components/Navbar/Navbar';
import Drawer from './components/Drawer/drawer';
import Setting from './components/Setting/setting';
function App() {
  const [isOpen, setIsOpen]=useState(false);
  
  function handleOpenDrawer(state:boolean){
    setIsOpen(state);
  } 
  return (
    <div className="container">
      <Navbar openDrawer={handleOpenDrawer}/>
      <Drawer isOpen={isOpen} className='' position='left' removeContentWhileClosed={true} onClose={()=>setIsOpen(false)}>
        <Setting openDrawer={handleOpenDrawer}/>
      </Drawer>
      <Counter />
      <Theme/>
      {/* <CounterByMe value={0}/> */}
    </div>
  );
}

export default App;
