const Form = (props) => {
  return (
    <form>
      <h2>Form</h2>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={props.changeHandler}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={props.changeHandler}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={props.changeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={props.changeHandler}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          onChange={props.changeHandler}
        />
      </div>
    </form>
  );
};

export default Form;
