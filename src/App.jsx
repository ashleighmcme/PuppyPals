import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'




function App() {
  const [puppies, setPuppies] = useState([]);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (puppyId) => {
    console.log(puppyId); 
    setFeatPupId(puppyId);
  };

  //drawing puppy out of array.
  const findFeaturedPup = (pupId) => {
    return puppyList.find((pup) => pup.id === pupId);
  };

  const featuredPup = featPupId && findFeaturedPup(featPupId);

  return (
    <div className="App">
      {puppyList.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
      <div>
        {featuredPup && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;