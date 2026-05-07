import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Itinerary from './pages/Itinerary';

const App = () => {
  // State for itinerary items
  const [itinerary, setItinerary] = useState([]);
  // State for total budget
  const [totalBudget, setTotalBudget] = useState(5000);

  // Add a destination to itinerary
  const addToItinerary = (destination) => {
    // Prevent duplicates
    if (!itinerary.some(item => item.id === destination.id)) {
      setItinerary([...itinerary, destination]);
    }
  };

  // Remove a destination from itinerary
  const removeFromItinerary = (id) => {
    setItinerary(itinerary.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar itineraryCount={itinerary.length} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <Explore
                itinerary={itinerary}
                addToItinerary={addToItinerary}
              />
            }
          />
          <Route
            path="/itinerary"
            element={
              <Itinerary
                itinerary={itinerary}
                removeFromItinerary={removeFromItinerary}
                totalBudget={totalBudget}
                setTotalBudget={setTotalBudget}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;