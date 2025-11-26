import React, { useState } from 'react'

function FullName() {

  const [fullname, setFullName] = useState("");

    const displayFullName = (e) => {
        e.preventDefault();
        const firstName = e.target.firstname.value;
        const lastName = e.target.lastname.value; 
        const fullName = `Full Name ${firstName} ${lastName}`;

        setFullName(fullName);
    }

  return (
    <div>
      <form onSubmit={displayFullName}>
        <h1>Full Name Display</h1>
        <div class="mb-3">
        <label for="firstname" class="form-label">First Name:</label>
        <input
            type="text"
            class="form-control"
            name="firstname"
            required/>
        
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name:</label>
        <input
            type="text"
            class="form-control"
            name="lastname"
            required/>
        
      </div>
        <button type="submit" class="btn btn-primary">
            Submit
        </button>
      
      </form>
      
      <p>{fullname}</p>
    </div>
  )
}

export default FullName
