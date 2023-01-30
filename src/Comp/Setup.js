import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
 
function Setup() {
  const [openPicker, data, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const handleOpenPicker = () => {
    openPicker({
      clientId:"429864254672-9i7vc8k2lrigtasgff72taeqse48tfoq.apps.googleusercontent.com",
      developerKey:"AIzaSyBF47F9Y19nDartpPsOZGVpokkGEH3LoLI",
      viewId:"DOCS",
     token:"ya29.a0AVvZVsqtgL_y2Pb2vs-R1wGCDV8IKi2_pBzXCYx3w60tupCua66FF5uBrNNsxQiMy-Dy9jIKNUWLGFEfVAtWPW4v9Ebg2xP2NOiPDeDXCSKoSYXhnPOPLPVWYQ1MeZAnH6ZF83z47kffVDD9MVvFj2Na4tKhaCgYKAYESARESFQGbdwaIMFzPkRIUrlYsxKFSnTnlQA0163",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    });
  };
 
useEffect(()=>{
  console.warn(data)
  console.warn(authResponse)
},[data])


  return (
    <>



    <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-black-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or VIDEO files</p>
        </div>
        <input onClick={() => handleOpenPicker()} id="dropzone-file" type="" class="hidden" />
    </label>
   
</div> 
<button  onClick={() => handleOpenPicker()} class="text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white active:bg-cyan-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-[500px] absolute ease-linear transition-all duration-150" type="button"
      >
Show Files
</button>

{/* <a href="https://drive.google.com/drive/shared-with-me" class="text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white active:bg-cyan-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-[650px] absolute ease-linear transition-all duration-150" type="button">
Go to Storage
</a> */}

<></>

    </>
  );
}
 
export default Setup;





