import React,{useState} from 'react'

export const App = () => {
  const [input, setInput]=useState("")
  const [id,setId]= useState(0)
  const [data,setData]= useState([
    {id:1,text:"button1"},
    {id:2,text:"button2"},
    {id:3,text: "button3"},
    {id:4,text:"button4"}
  ])
  const handleInput=(e,txt,id)=>{
    setId(id)

    setInput(txt)
  }
  const handleBtn=(e,txt)=>{
   console.log("text reset",txt)
   console.log("id is",id)
   let newData=[...data]
   console.log("newData is",newData)
   const ind=newData.findIndex(p=>p.id===id)
   newData[ind].text= txt
   setData(newData)
   setInput("")

  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>button text</h2>
      {
        data.map(btn=>{
          return (<>
          <button>{btn.text}</button><br/><br/>
          <button onClick={(e)=>handleInput(e,btn.text,btn.id)}>Click Me</button>
          <br/>
          <br/>
          <br/>
          </>);
          
        })
        
        
      }
      <input type="text" value={input} onChange={(e)=>{
        setInput(e.target.value)
      }
      }/>
      <button  onClick={(e)=>handleBtn(e,input)}>Save</button>
    </div>
  )
}
