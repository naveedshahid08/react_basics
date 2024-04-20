const Counter = (props) => {
  return (
    <div>
      <p>Counter:{props.counterP}</p>
      <button onClick={props.IncreaseButton}>Increase Button +</button>
      <button onClick={props.decreaseButton}>Decrease Button -</button>
      <button onClick={props.defaultButton}>Set 0 </button>
    </div>
  );
};

export default Counter;
