import React from 'react'
import { useParams } from "react-router-dom";
import Navside from '../Comp/Navside';
export default function Download() {
    const { id } = useParams();
   


    const useClipboard = (props) => {
        const [copied, setCopied] = React.useState(false);
        const ref = React.useRef();
        const resetCopy = React.useRef();
      
        const onCopy = React.useCallback(() => {
          navigator.clipboard
            .writeText(ref.current?.innerText)
            .then(() => setCopied(true));
        }, [ref]);
      
        React.useEffect(() => {
          if (copied) {
            resetCopy.current = setTimeout(
              () => setCopied(false),
              props?.duration || 3000,
            );
          }
      
          return () => {
            clearTimeout(resetCopy.current);
          };
        }, [copied, props.duration]);
      
        return { copied, ref, onCopy };
      };


   
    const { ref, copied, onCopy } = useClipboard({ duration: 4000 });
    return (
        <>
 <Navside/>
        <h2 className="text-xl absolute font-bold text-center mx-auto mt-[150px] ml-[400px] mb-10">You can Download file Just copy link & paste in Browser<br/>if you Want to Share link for your Customer/Client Just Copy & share </h2>
      <div className="mb-8 absolute flex  mx-auto mt-[300px] ml-[500px]">
   
        <button
          className="text-white focus:outline-none shadow font-medium px-6 py-1 text-sm bg-blue-700"
          onClick={onCopy}
        >
          {copied ? 'copied!' : 'Copy'}
        </button>
        <div ref={ref} className="mt-4">
          <p className='text-xl text-[#00D09c] mb-3 ml-3'>
        {`https://awspics.vercel.app/download/${id}`}
          </p>
        </div>
      </div>

     
      </>
    );  




}

