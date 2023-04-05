import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './views/ToDo';


export default function App() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <ToDo />
                <Routes>
                  <Route path="/" element={<ToDo  />} />
                  <Route path="/pokemon" element={<PokemonDisplay />} /> ---i got an error here that im not sure where to go now
                </Routes>
            </div>
        </>
    )
}