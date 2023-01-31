import React, { useEffect,useState } from 'react'
import axios from 'axios'
export default function ListData() {

const [list, setList]=useState([])
useEffect(()=>{
    axios.get("https://picscloud-6elx.vercel.app/list").then((res)=>{
          setList(res.data)
    })
},[])

console.log(list)

  return (
    <>
    
    
<div class="relative overflow-x-auto shadow-2xl sm:rounded-lg mt- ">
    <div class="flex items-center justify-between pb-4 bg-white light:bg-gray-900">
        <div>
         

            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
     
    
    </div>
    <table class="w-full text-sm text-left text-gray-500 light:text-gray-400">
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
                    Status
                </th>
                <th scope="col" class="px-6 py-3 text-black font-bold ">
                    Action
                </th>
            </tr>
        </thead>
        {
            list.map((key)=>{
                return(
                    <>
             
        <tbody>
            <tr class="bg-white  light:bg-gray-800  hover:bg-gray-50 hover:bg-gray-300">
                <td class="w-4 p-4">
                   
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://img.icons8.com/fluency/48/null/file.png" alt=""/>
                    <div class="pl-3">
                        <div class="text-base text-black font-semibold">    {key}</div>
                     
                    </div>  
                </th>
                <td class="px-6 py-4">
              
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {key.size}
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
            </tr>


           
        </tbody>
               
        </>
                )
            })
        }
    </table>
</div>

    
    </>
  )
}
