import React from "react";



function Crm() {
            
  function MouseEnter(e){
    e.target.style.backgroundColor="#3559E0";
                  }
   function MouseLeve(e){
       e.target.style.backgroundColor="#776B5D";
   }

    return(
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
                <option >Companies</option>
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
        <a href="#" className='options'>Company Name</a>
        <a href="#" className='options'>Company Owner</a>
        <a href="#" className='options'>Phone</a>
        <a href="#" className='options'>Website</a>
      </div>


      <div className="boxs">
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
export default Crm