import { useState } from "react";
import {Configuration, OpenAIApi} from "openai"
import './App.css'
import {VITE_Open_AI_Key} from "./myapikey"

function App(){

  const [prompt,setPrompt] = useState('')
  const [result,setResult] = useState('')


  const configuration = new Configuration({
    apiKey: VITE_Open_AI_Key,
  });


  // console.log(import.meta.env.VITE_Open_AI_Key)

  const openai = new OpenAIApi(configuration);

  const generateImage = async ()=>{
      const response = await openai.createImage({
        prompt : prompt,
        n :  1,
        size : "512x512"
      })
      console.log(response.data.data[0].url)
      setResult(response.data.data[0].url)
  }

  // const generateImage = ()=>{}

  return (
    <div className="app-main">
  
      <h3>Generate an image using OpenAIApi</h3>
      <input 
        className="app-input" 
        placeholder="Type Something" 
        onChange={(e)=> setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>
      {result.length>0 ? <img className="result-image" src={result} alt="result"></img> : <></>}
     
    </div>
  )


}


export default App
