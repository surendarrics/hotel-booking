import "./header.css"
import {faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{DateRange} from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { format } from 'date-fns';
import { Navigate, useNavigate } from "react-router-dom"

const Header = ({Type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });




  const handleOption= (name, operation) => {
setOptions((prev)=>{
  return{
    ...prev,
    [name]: operation == "i"? options[name] +1 : options[name] -1,
  }
})

}
const navigate = useNavigate()
const handleSearch = () => {
  navigate("/hotels", {state: {destination , date, options}})

}

  return(
   <div  className="header">
    <div className={Type="list" ? "headerContainer listMode" : "headerContainer"} >
 <div className="headerList">
   <div className="headerListItem active">
   <FontAwesomeIcon icon={faBed} > </FontAwesomeIcon>
   <span>Stays</span>
   </div>

   <div className="headerListItem">
   <FontAwesomeIcon icon={faPlane} > </FontAwesomeIcon>
   <span>Flights</span>
   </div>

   <div className="headerListItem">
   <FontAwesomeIcon icon={faCar} > </FontAwesomeIcon>
   <span>Car rental</span>
   </div>
   <div className="headerListItem">
   <FontAwesomeIcon icon={faBed} > </FontAwesomeIcon>
   <span>Attractions</span>
   </div>

   <div className="headerListItem">
   <FontAwesomeIcon icon={faTaxi} > </FontAwesomeIcon>
   <span>Airport Taxis</span>
   </div>
 </div>
 
 {Type !=="list" &&(
  <>  <h1 className="headerTitle">A lifetime of discounts? It's genius</h1>
<p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% with free DeoBooking account</p>
 
 <button className="headerbtn">
   sign in / Register
 </button>
 <div className="headerSearch">
   <div className="headerSearchItem">
   <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
   <input type="text" placeholder="Where are you going" className="headerSearchInput" onChange={e=>setDestination(e.target.value)} />
   </div>

   <div className="headerSearchItem">
   <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
   <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].startDate, "dd/MM/yyyy")}` }</span>
   {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>
}
   </div>


   <div className="headerSearchItem">
   <FontAwesomeIcon icon={faPerson} className="headerIcon" />
   <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult  ${options.children}children  ${options.room}room`}</span>
   {openOptions && <div  className="options">
     <div className="optionItem">

<div className="optionText">Adult</div>
<div className="optionCounter">
<button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
<div className="optionCounterNumber">{options.adult}</div>
<button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>

</div>
</div>
<div className="optionItem">
<div className="optionText">children</div>
<div className="optionCounter">
<button disabled={options.children <=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
<div className="optionCounterNumber">{options.children}</div>
<button className="optionCounterButton"onClick={()=>handleOption("children", "i")}>+</button>
</div>
</div>

<div className="optionItem">
<div className="optionText">Room</div>
<div className="optionCounter">
<button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
<div className="optionCounterNumber">{options.room}</div>
<button className="optionCounterButton" onClick={()=>handleOption("room", "i")} >+</button>
</div>
</div>
   </div>}
   </div>



   
   <div className="headerSearchItem">
   <button className="headerbtn" onClick={handleSearch}>Search</button>
   </div>
   
 </div>
 </>
 )}
 </div>
</div>
)
};

export default Header;
