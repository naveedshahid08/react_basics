const Dashboard = ({ user }) => {
  return (
    <div>
      {user === "Naveed" ? (
        <h2>Welcome to User Application,{user}</h2>
      ) : (
        <h2>Oh You must be new one here</h2>
      )}
      ;
    </div>
  );
};

export default Dashboard;
