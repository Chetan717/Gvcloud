import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const S3_BUCKET = "picscloud";
const REGION = "ap-south-1";

AWS.config.update({
  accessKeyId: "AKIAUZ75MNV2OYE2BCE5",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      // ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });

    if ({ progress } === 100) {
      notify();
    }
  };

  const [list, setList] = useState([]);

  useEffect(() => {
   
        axios.get("https://awspics.vercel.app/list").then((res) => {
          setList(res.data.Contents);
        });
   
  }, []);

  const totaldata = list.length;



  const notify = () => toast.success("File uploding succesful!");

  
   

return (
<>




    <ToastContainer
    position="top-center"
    autoClose={progress}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
      
      <div className="w-[200px] absolute ml-10 px-4 mt-[10px] border-2 border-[#00D09c]  py-6 ml-[550px] bg-white rounded-lg shadow-sm">
        <div className="text-sm absolute font-medium text-black truncate">
          Total files
        </div>
        <div className="mt-4 text-2xl font-semibold text-black">
          {totaldata}
        </div>
      </div>

      <div className="w-[200px] absolute ml-10 px-4 mt-[10px] border-2 border-[#00D09c]  py-6 ml-[850px] bg-white rounded-lg shadow-sm">
        <div className="text-sm absolute font-medium text-black truncate">
          Total Storage(GB)
        </div>
        <div className="mt-4 text-2xl font-semibold text-black">1GB</div>
      </div>

      <div className="relative px-48 flex flex-col w-[400px] ml-[650px] top-[330px]">
        <div className="text-black">
          {" "}
          <span className="text-[#00D09c] text-xl">{progress}%</span>
        </div>{" "}
        <span className="text-[#00D09c] text-xl">
          {progress === 100 ? (
            <p className="text-xl p-1 w-[200px]">file uploaded</p>
          ) : (
            <p className="text-xl p-1">pending..</p>
          )}
        </span>
        <input
          id="small-range"
          type="range"
          value={progress}
          onChange={notify}
          class="w-[400px]  h-1 mb-6 text-[#00D09c] rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-400"
        />
      </div>

      <div class="py-20 h-[600px]  w-[400px] ml-[350px] absolute px-2 mt-[50px]">
        <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div class="md:flex">
            <div class="w-full">
              <div class="p-4 border-b-2">
                <span class="text-lg font-bold text-gray-600">Add File.</span>
              </div>

              <div class="p-3">
                <div class="mb-2">
                  <span>Attachments</span>
                  <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div class="absolute">
                      <div class="flex flex-col items-center ">
                        <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                        <span class="block text-gray-400 font-normal">
                          Attach you files here
                        </span>
                        <span class="block text-gray-400 font-normal">or</span>

                        <span class="block text-blue-400 font-normal">
                          Browse files
                        </span>
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      onChange={handleFileInput}
                      class="h-full w-full opacity-0"
                      name=""
                    />
                  </div>
                  <div class="flex justify-between items-center text-gray-400">
                    <span></span>
                    <span class="flex items-center ">
                      <i class="fa fa-lock mr-1"></i>{" "}
                    </span>
                  </div>
                </div>

                <div class="mt-3 text-center pb-3">
                  <button
                    onClick={() => uploadFile(selectedFile)}
                    class="w-full h-12 text-lg w-32 bg-blue-600 rounded-[10px] text-white font-bold text-xl hover:bg-[#00D09c]"
                  >
                    Upload Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
      
      </>
        
   
  

  );

};

export default UploadImageToS3WithNativeSdk;
