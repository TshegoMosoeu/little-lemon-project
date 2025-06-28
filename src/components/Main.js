// Main.js
import React, { useReducer } from "react";
import { Route, Switch, useLocation } from "wouter";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking"; // Add your confirmation component

// Same seedRandom and fetchAPI code here...
const seedRandom = seed => {
  const m = 2 ** 35 - 31, a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};
const fetchAPI = date => {
  const result = [];
  const rand = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (rand() < 0.5) result.push(`${i}:00`);
    if (rand() > 0.5) result.push(`${i}:30`);
  }
  return result;
};
const submitAPI = formData => true;

function updateTimes(state, date) {
  return { availableTimes: fetchAPI(date) };
}

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: fetchAPI(new Date()),
  });

  const [, setLocation] = useLocation(); // useLocation returns [location, setter] :contentReference[oaicite:3]{index=3}

  const submitForm = formData => {
    if (submitAPI(formData)) {
      setLocation("/ConfirmedBooking"); // navigate programmatically
    }
  };

  return (
    <main>
      <Switch>
        <Route path="/" component={Header} />
        <Route
          path="/booking"
          component={() => (
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          )}
        />
        <Route path="/ConfirmedBooking" component={ConfirmedBooking} />
      </Switch>
    </main>
  );
};

export default Main;



/**

import React, {useReducer} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

const Main = () => {
    
    const seedRandom = function(seed){
        var m = 2**35 -31;
        var a = 185852;
        var s = seed %m;

        return function() {
            return (s = s * a % m) / m;
        }

    }



    const fetchAPI = function(date) {
        // Simulating an API call to fetch available times based on the date
        let result = [];
        let random = seedRandom(date.getDate());

        for (let i=17; i <=23; i++) {
            if (random() <0.5) {
                result.push(i+':00');
            }
            if (random() > 0.5){
                result.push(i+':30');

            }
        }
        return
    }

    const submitAPI = function(formData){
        return true; // Simulating a successful API submission
    }

    const initialState={availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    }

    return (
        <main>
            <Routes>
                <Route path='/' element ={<Header/>}/>
                <Route path='/booking' element ={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path='/' element ={<Header/>}/>
                <Route path='/' element ={<Header/>}/>

            </Routes>
        </main>
    );
};

export default Main;

 */