import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Index from './Components/Index';
import Add from './Components/Add';
import Edit from './Components/Update';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Add" element={<Add />}/>
      <Route path="/Edit/:id" element={<Edit />}/>
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
