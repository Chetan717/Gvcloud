import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import List from "./page/List";
import Signin from "./page/Signin";
import Signup from './page/Signup';
import Profile from './page/Profile';
import PrivateComponent from "./Comp/PrivateComp";
import Download from "./page/Download";


function App() {
  return (
  <>

<BrowserRouter>
<Routes>
<Route element={<PrivateComponent/>}>
  <Route path="/" element={<Home/>}/>

  <Route path="/file" element={<List/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/download/:id" element={<Download/>}/>
</Route>



<Route path="/login" element={<Signin/>}/>
  <Route path="/signup" element={<Signup/>}/>



  </Routes>


</BrowserRouter>



</>

  );
}

export default App;
