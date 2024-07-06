"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  // let a = 10; // react me aise variable use nhin krte

  // react me krte hain aise
  // let [a, setA] = useState(10);
  const [Image, setImage] = useState([])
  const getImgs = async () => {
    try {
      console.log("images aa rhi hai");
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(Image);
      setImage(data);
    } catch (error) {
      console.error("error fetching images");
    }
  };
  return (
    <div>
      {/* <img>
        <b>{a}</b>
      </img>
      <button onClick={()=>{setA(a++)}} className="bg-blue-500 p-0.5 rounded-lg">
        increase
      </button> */}
      page <br />
      <button onClick = {getImgs} className="p-2 ml-2 bg-green-600 text-white rounded-3xl focus:shadow-cyan-100">
        Get images
      </button>

        {Image.map((img, i) => {
          return <img 
            key={i}
            src= {img.download_url}
            width={200}
            height={300}
            className="m-10 rounded inline-block"
            />
          // <img src="img"></img>
        })}
    </div>
  );
};

export default page;
