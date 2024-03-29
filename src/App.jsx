import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'


function App() {
  //removed setPuppies function, was unused. Would be used to update state of puppies list.
  //Workshop did not have such functionality on my workthrough unless I missed it. 
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [featuredPup, setFeaturedPup] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
    const selectedPup = puppies.find((pup)=> pup.id === puppyId)
    setFeaturedPup(selectedPup);
  }
  
  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => {
        return (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && featuredPup && (
        <div id="pupdetails">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
