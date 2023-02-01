import React from 'react'
import Navside from '../Comp/Navside'
import Ser2 from '../Comp/Ser2'
import  { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Home() {

  const [list, setList] = useState([]);
  const [loadingcon, setLoadingcon] = useState(false);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get("https://awspics.vercel.app/list").then((res) => {
      setList(res.data.Contents);
      setLoadingcon(true);
    });
  };


  return (
    <>
    
{!list | (loadingcon === false)?<div className='loader'></div>:

<div>
    <Navside/>
    <Ser2/>

    </div>
}
    </>
  )
}
