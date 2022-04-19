import React, { useEffect, useState } from "react";
import axios from "axios";
import './residentInfo.css'

const ResidentItem = ({ url }) => {
  const [resident, setResident] = useState({});
  

  useEffect(() => {
    if(url){
      const promise = axios(url);
      promise.then((res) => {

        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        
        });

      });
    }
  }, [url, resident.status]);
// console.log(status)
  return (
    <div>
      <div className="each-resident">
         <img src={resident.image} alt="" />
        <div>
          <p>
            <b>{resident.status}</b>
          </p>

          <p>
            <b>{resident.name}</b>
          </p>
          <p>
            {resident.species}
          </p>
          <p>
            <b>Origin:</b> {resident.origin}
          </p>
          <p>
            <b>Episodes where appear:</b> {resident.episodes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentItem;