import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import WacthTheShow from './components/StatsCard';



function App() {


  return (
    <>
    <div>
      <h1 className='font-display'>Rick and Morty</h1>
      <WacthTheShow />
      <Outlet />
    </div>
    </>
  )
}

export default  App

