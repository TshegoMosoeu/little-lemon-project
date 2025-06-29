import React from "react";
import LoginForm from "./LoginForm"; 

const LoginPage = () => {
  const handleLogin = (form) => {
    alert(`Logged in as ${form.email}`);
  };

  return (
    <main>
      <LoginForm onLogin={handleLogin} />
    </main>
  );
};

export default LoginPage;
