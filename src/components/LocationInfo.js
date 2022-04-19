
import './locationinfo.css'
const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div className="location">
        <h2 >{name}</h2>
        <div className="info">
          <div>
            <b className='atribb'>Type: </b>
            {type}
          </div>
          <div>
            <b className='atribb'>Dimension: </b>
            {dimension} 
          </div>
          <div>
            <b className='atribb'>Population: </b>
            {population}
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationInfo;