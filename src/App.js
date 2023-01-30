
import './App.css';
import Header from './Companent/Header';
import Body from './Companent/Body';
import { Footer } from './Companent/Footer';
import '../src/Companent/Body/';
import {getUser} from './Service/getAllData'
import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './Companent/Detail';

function App() {

  const[allDataFetch,setdataFetch] = useState([]);

  const fetchData = useEffect(()=>{

    getAllData();
  },[])

  
async function getAllData (){
  let data = await getUser();
  setdataFetch(data?.data);
}
    
  return (
    <div className="app">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body Data={allDataFetch}/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
