import React from 'react';

type SecondPageProps = {
  userDetails: UserData | null;
};

const SecondPage: React.FC<SecondPageProps> = ({ userDetails }) => {
  // Your component logic here

  return (
    <div>
      <h2>Welcome to the Second Page!</h2>
      {userDetails && (
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Phone Number: {userDetails.phoneNumber}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      )}
    </div>
  );
};

type UserData = {
  name: string;
  phoneNumber: string;
  email: string;
};

export default SecondPage;
