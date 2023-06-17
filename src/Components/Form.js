import React, { useState } from 'react';


function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = [];

    

    if (!name) {
      newErrors.push('Name is required');
    }

    if (!email) {
        newErrors.push('Email is required');
      }
  

    if (!password) {
      newErrors.push('Password is required');
    }

    if (!confirmPassword) {
      newErrors.push('Confirm Password is required');
    }

    if (password !== confirmPassword) {
      newErrors.push('Passwords do not match');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors([]);
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <h1>Signup Form</h1>
      {success ? (
        <div className="success-message">
          <h2>Success! Form submitted successfully.</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
             <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn">Signup</button>
          {errors.length > 0 && (
            <div className="error-message">
              <h3>Errors:</h3>
              <ul>
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </ul>
            </div>
          )}
        </form>
      )}
    </div>
  );
}


export default Form;
