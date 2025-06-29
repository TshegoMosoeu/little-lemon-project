import React, { useReducer } from "react";
import { Route, Switch, useLocation } from "wouter";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking"; 
import LoginPage from "./Login";
import { initializeTimes,updateTimes } from "./BookingUtils";

const submitAPI = window.submitAPI; 

const Main = () => {

  const [state, dispatch] = useReducer(updateTimes, {
    availableTimes: initializeTimes(),
  });

  const [, setLocation] = useLocation(); 
  const submitForm = (formData) => {
    console.log('submitForm called with:', formData);
    const result = submitAPI(formData);
    console.log('submitAPI result:', result);
    if (result) {
      console.log('Navigating to /ConfirmedBooking');
      setLocation("/ConfirmedBooking");
    }
  };

  return (
    <main>
      <Switch>
        <Route path="/" component={Header} />
        <Route path="/booking">
          <Booking
            availableTimes={state.availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </Route>
        <Route path="/ConfirmedBooking" component={ConfirmedBooking} />
        <Route path="/login" component={LoginPage} /> 
      </Switch>
    </main>
  );
};

export default Main;

