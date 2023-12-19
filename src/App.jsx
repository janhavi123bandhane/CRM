import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './crm_pages/Crm'



function App() {
     function MouseEnter(e){
            e.target.style.backgroundColor="#3559E0";
     }
     function MouseLeve(e){
      e.target.style.backgroundColor="#776B5D";
}
    
  
  return (
    <>
      <nav>
      <div className='navbar'> 
      <input type="text" name="text" className="search" placeholder="Search here!" />
        <div className='box'>
        <a href="#">Chat</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
        </div>
      <button className='btn'>Notifications</button>
      <button className='btn'>Help</button>
      <button className='btn'>Portfolio</button>
      </div>
    </nav>
    
     <header>
      
      <div className="nav2">
        <div className="select">
            <select name="#" id="pipline" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option id="janu" >Pipelines/Channels</option>
            </select>
            <select name="#" id="Companies" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option ><a href="crm.jsx">Companies</a></option>
            </select>
            <select name="#" id="Products" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option >Products</option>
            </select>
            <select name="#" id="Contacts" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option >Contacts</option>
            </select>
            <select name="#" id="Calender" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option >Calender</option>
            </select>
            <select name="#" id="Dashboard" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option >Dashboard</option>
            </select>
            <select name="#" id="Templates" onMouseOver={MouseEnter} onMouseLeave={MouseLeve}>
                <option >Templates</option>
            </select>
            </div>  
      </div>
    </header>
    
      <div className='nav3'>
        <a href="#" className='options'>Lead Generation</a>
        <a href="#" className='options'>Lead Qualification</a>
        <a href="#" className='options'> Demo or Meeting</a>
        <a href="#" className='options'>Negotiation</a>
        <a href="#" className='options'>Closing the deal</a>
        <a href="#" className='options'>Won </a>
        <a href="#" className='options'>Lost</a>

      </div>
   
   
    <div className="boxs">
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
      <div className="box1"></div>
    </div>
   
   <footer>
    <div className='Footers'>
    <div className="btnf">
       <div className="first3">Create Sub-Pipeline</div>
       <div className="first3">All Deals</div>
       <div className="first3">Created Time</div>
    </div>    

    <div className="btns">
       <div className="sec3"></div>
       <div className="sec3"></div>
       <div className="sec3">Help ?</div>
    </div> 
    </div>
    </footer>  

    </>
    
  )
}

export default App
