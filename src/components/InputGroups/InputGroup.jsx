import App from "../../App";

const InputGroup = (props) => {
  const label = props.label;
  const type = props.type;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        
      }}
    >
      <label
        style={{
          fontFamily: "arial",
          fontSize: "0.9rem",
          fontWeight: "600",
        }}
        htmlFor="name"
      >
        {label}
      </label>
      <input
        style={{
          padding: "0.8rem 1rem",
          border: "1px solid #F6D6D6",
          borderRadius:'2px'
        }}
        type={type}
        id="name"
      ></input>
    </div>
  );
};

export default InputGroup;
