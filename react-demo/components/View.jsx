const View = (props) => {
  return (
    <div>
      <h2>View</h2>
      <p>First Name:{props.fname}</p>
      <p>Last Name:{props.lname}</p>
      <p>Phone:{props.phone}</p>
      <p>E-Mail:{props.email}</p>
      <p>Message:{props.message}</p>
    </div>
  );
};

export default View;
