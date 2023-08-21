// UserForm.tsx
import React, { useState } from 'react';
type UserFormProps = {
    onSubmit: (data: UserData) => void;
  };
  
  type UserData = {
    name: string;
    phoneNumber: string;
    email: string;
  };
  
  const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
    onSubmit({ name, phoneNumber, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
