const Box = (props) => {
  //  Write your code here.
  const { className, message } = props;
  const containerClassName = `box-container ${className}`;
  return (
    <div className={containerClassName}>
      <p className="box-title">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box message="small" className="small-box" />
      <Box message="Medium" className="medium-box" />
      <Box message="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
