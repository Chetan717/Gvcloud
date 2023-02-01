import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navside from './Navside'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ListData() {
    const [loadingcon, setLoadingcon] = useState(false);
const [list, setList]=useState([])

useEffect(()=>{
 getdata()
},[])

// function readableBytes() {
// var i = Math.floor(Math.log(list.Size) / Math.log(1024)),
// sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// return ( + ' ' + sizes[2];
// }







const deletefile = (id) =>{

    axios.delete(`https://awspics.vercel.app/delete/${id}`)
    getdata()
    notify()
  
}




const getdata= () =>{
    axios.get("https://awspics.vercel.app/list").then((res)=>{
        setList(res.data.Contents)
        setLoadingcon(true);
  })
}

const notify = () => toast.success("File deleted !");

  return (
    <>


<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


<Navside/>
{
    !list | (loadingcon === false)?<div className='loader'></div>:

    <table class="w-[1000px] absolute ml-[270px]  mt-[10px]  text-sm text-left text-gray-500 light:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#00D09c] light:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" disabled class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-black font-bold">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 text-black font-bold ">
                    Position
                </th>
                <th scope="col" class="px-6 py-3 text-black font-bold ">
                    SIze
                </th>
                <th scope="col" class="px-6 py-3 text-black font-bold ">
                    Action
                </th>
            </tr>
        </thead>
        {
            list?.map((keys)=>{
                return(
                    <>
             
        <tbody>
            <tr class="bg-white  light:bg-gray-800  hover:bg-gray-50 hover:bg-gray-300">
                <td class="w-4 p-4">
                   
                </td>
              
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://img.icons8.com/fluency/48/null/file.png" alt=""/>
                    <div class="pl-3">
                        <div class="text-base text-black font-semibold">{keys.Key}  </div>
                     
                    </div>  
                </th>
               

              
                <td class="px-6 py-4">
                <Link to={`/download/${keys.Key}`} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download</Link>
                </td>

            

                <td class="px-6 py-4">
            
                    <div class="flex items-center ">
                        <div class="h-2.5 w-2.5 text-black font-semibold"> 
                        {(keys.Size / Math.pow(1024, 2) * 1).toFixed(2)}MB
                        </div>
                    </div>
                    
                </td>
              
                <td class="px-6 py-4">
                    {/* <a href="#" onClick={()=>deletefile(keys.Key)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                     */}



{/* The button to open modal */}
<a href="#my-modal-2"  className="btn btn-sm text-white btn-success">Delete</a>

<div className="modal" id="my-modal-2">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure To Delete file!</h3>
    <p className="py-4"></p>
    <div className="modal-action">
     <a href="#" onClick={()=>deletefile(keys.Key)} className="btn text-white  btn-success">Delete</a>
    </div>
  </div>
</div>

                </td>
            </tr>


           
        </tbody>
               
        </>
                )
            })
        }
    </table>

}

    
    </>
  )
}
