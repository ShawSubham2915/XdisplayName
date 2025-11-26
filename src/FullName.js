import React, { useState } from 'react';

function FullName() {
  const [fullname, setFullName] = useState("");

  const displayFullName = (e) => {
    e.preventDefault();

    const firstName = e.target.firstname.value.trim();
    const lastName = e.target.lastname.value.trim();

    
    if (!firstName || !lastName) {
      setFullName(""); 
      return;
    }

    const fullName = `Full Name: ${firstName} ${lastName}`;
    setFullName(fullName);
  };

  return (
    <div>
      <form onSubmit={displayFullName}>
        <h1>Full Name Display</h1>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            id="firstname"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            id="lastname"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <p>{fullname}</p>
    </div>
  );
}

export default FullName;
