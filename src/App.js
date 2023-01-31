import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import List from "./page/List";
import Signin from "./page/Signin";
import Signup from './page/Signup';
import Profile from './page/Profile';



function App() {
  return (
  <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Signin/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/file" element={<List/>}/>
  <Route path="/profile" element={<Profile/>}/>



</Routes>

</BrowserRouter>



</>

  );
}

export default App;
