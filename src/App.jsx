import Button from "./components/InputGroups/Button/Button";
import InputGroup from "./components/InputGroups/InputGroup";

function App() {
  return (
    <section
      style={{
        width: "50vw",
        height: "80vh",
        margin: "4rem auto",
        backgroundColor: "#F6F7C4",
        border: "4px solid #A1EEBD",
        borderRadius:"3px"
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "2rem auto",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "arial",
            fontSize: "1.2rem",
            fontWeight: "700",
            marginBottom: "0.8re",
          }}
        >
          Registration
        </h3>
        <form>
          <InputGroup type="text" label="First Name" />
          <InputGroup type="text" label="Last Name" />
          <InputGroup type="email" label="E-mail" />
          <InputGroup type="password" label="Password" />
          <InputGroup type="password" label="Confirm Password" />
          <Button type="submit" text="submit" variant="submit" />
          <Button type="reset" text="reset" variant="reset" />
        </form>
      </div>
    </section>
  );
}

export default App;
