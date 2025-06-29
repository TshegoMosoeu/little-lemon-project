import React, {useState} from "react";

const LoginForm = ({onLogin}) => {
    const [form, setForm] = useState({email: "", password: ""});
    
    const isFormValid = form.email && form.password;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isFormValid) {
            onLogin(form);
        } else {
            alert("Please fill in both fields.");
        }
    };

    return (
        
        <div className="login-form-wrapper">
            <form onSubmit={handleSubmit} noValidate>
                <h2 className="login-form-title">Login</h2>
                <div className="login-form-field">
                    <label htmlFor="login-email">Email</label>
                    <input 
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="username"
                    />
                </div>
                <div className="login-form-field">
                    <label htmlFor="login-password">Password</label>
                    <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    value={form.password} 
                    onChange={handleChange}
                    autoComplete="current-password" 
                    />
                </div>
                <button
                    type="submit"
                    className="login-form-btn"
                    disabled={!isFormValid}
                    aria-label="Log In"
                    >
                        Log In
                    </button>
                    <a href ="/forgot" className="login-form-link">
                    Forget Password?
                    </a>
            </form>
        </div>
    )

};

export default LoginForm;