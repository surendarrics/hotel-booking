import React from 'react';
import Header from '../../../components/navbar/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import "../../../components/navbar/header/header.css"
import {faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{DateRange} from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { format } from 'date-fns';
import "./list.css"
import { useLocation } from 'react-router-dom';
import SearchItem from '../../../components/searchItem/SearchItem';


const List = (Type) => {
  
const location = useLocation()
const [destination, setDestination] = useState(location.state.destination)
const [date, setDate] = useState(location.state.date)
const [options, setOptions] = useState(location.state.options)
const [openDate, setOpenDate] = useState(false)


  return( <div>
     <Navbar/>
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
   </div>
 </div>
 <div className="listContainer">
 <div className="listWrapper">

 </div>
</div>
<div className="listContainer">
 <div className="listWrapper">
   <div className="listSearch">
<h1 className="lsTitle">search</h1>
<div className="lsItem">
<input type="text" className="" placeholder={destination} /> <br/>
<label htmlFor="" className="destination">Check in dates</label>
<span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].startDate, "dd/MM/yyyy")}` }</span>
{openDate && <DateRange   editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}/>
}


</div>
<div className="lsItem">
  <label htmlFor=""> Options</label>
  <div className="lsOptionItem">
<span className="lsOptionText">
  Min price <small>per night</small>
</span>
<input className='lsOptionInput' />
  </div>

  <div className="lsOptionItem">
<span className="lsOptionText">
  Min price <small>per night</small>
</span>
<input className='lsOptionInput' />
  </div>

  <div className="lsOptionItem">
<span className="lsOptionText">
  Max price <small>per night</small>
</span>
<input className='lsOptionInput' />
  </div>

  <div className="lsOptionItem">
<span className="lsOptionText">
 adult
</span>
<input type="number" min={1} className='lsOptionInput' placeholder={options.adult}/>
  </div>

  <div className="lsOptionItem">
<span className="lsOptionText">
children
</span>
<input type="number" min={0} className='lsOptionInput'  placeholder={options.children} />
  </div>
</div>

<div className="lsOptionItem">
<span className="lsOptionText">
Room
</span>
<input type="number" min={1} className='lsOptionInput'  placeholder={options.room} />
  </div>
  <button>search</button>
</div>
</div> 
<div className="listResult">
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>
<SearchItem/>

</div>
 </div>
</div>

  

  );

};

export default List;
