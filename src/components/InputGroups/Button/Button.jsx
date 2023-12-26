const Variant = {
  submit: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  reset: {
    backgroundColor: "#dd2c00",
    color: "#fff",
  },
};

const Button = (props) => {
  const UserVariant = Variant[props.variant];
  return (
    <button
      type={props.type}
      style={{
        padding: "1rem 2rem",
        fontSize: "0.9rem",
        textTransform: "uppercase",
        fontWeight: "600",
        border: "none",
        borderRadius:"2px",
        marginRight: "1rem",
        cursor: "pointer",
        letterSpacing: "1px",
        ...UserVariant,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
