import React ,{useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='picscloud';
const REGION ='ap-south-1';


AWS.config.update({
    accessKeyId:'AKIAUZ75MNV2BGJVDIHH',
    secretAccessKey:'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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const UploadImageToS3WithNativeSdk = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            // ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }


    return <div className='relative px-48 w-[900px] ml-24 bottom-[100px]'>
        <div> Uploading progress is {progress}%</div>

        <label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small range</label>
<input id="small-range" type="range" value={progress} class="w-full h-1 mb-6 bg-blue-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-blue-200"/>


      



   


        <label class="block mb-2 text-sm font-medium text-[#00D09c] dark:text-white" for="file_input">Upload file</label>
<input  onChange={handleFileInput} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bgg dark:text-gray-400 focus:outline-none dark:bg- dark:border-gray-600 dark:placeholder-[#00D09c]" aria-describedby="file_input_help" id="file_input" type="file"/>
<p class="mt-1 text-sm text-gray-500 dark:text-[#00D09c]" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>





        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
    }

    export default UploadImageToS3WithNativeSdk;