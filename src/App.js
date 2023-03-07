import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/AddDoctor';
import Doctors from './pages/Doctors';
import AddReservation from './pages/AddReservation';
import DeleteDoctor from './pages/DeleteDoctor';
import DoctorDetails from './pages/DoctorDetails';
import MyReservations from './pages/MyReservations';
import NavPanel from './components/NavPanel';
import LogIn from './pages/LogIn';
import './App.css';

const App = () => (
  <div className="App flex flex-col md:flex-row h-screen">
    <NavPanel />
    <Routes>
      <Route path="/" element={<Doctors />} />
      <Route path="/add_doctor" element={<AddDoctor />} />
      <Route path="/add_appointment/:id?" element={<AddReservation />} />
      <Route path="/appointments" element={<MyReservations />} />
      <Route path="/delete_doctor" element={<DeleteDoctor />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </div>
);

export default App;
