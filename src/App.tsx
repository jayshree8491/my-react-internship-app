import { useState } from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import SecondPage from './SecondPage';

const App = () => {
  const navigate = useNavigate(); // Move the useNavigate call here

  const [userDetails, setUserDetails] = useState<UserData | null>(null);

  const handleFormSubmit = (data: UserData) => {
    setUserDetails(data);
    localStorage.setItem('userDetails', JSON.stringify(data));
    navigate('/SecondPage'); // Now useNavigate is within the Router context
  };

  return (
    <Router>
      <Route path="/">
        <UserForm onSubmit={handleFormSubmit} />
      </Route>
      <Route path="/SecondPage">
        <SecondPage userDetails={userDetails} />
      </Route>
    </Router>
  );
};

type UserData = {
  name: string;
  phoneNumber: string;
  email: string;
};

export default App;
