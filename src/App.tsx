import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="success" onClick={() => console.log("clicked")}>
        This is a button!
      </Button>
    </div>
  );
}

export default App; // for it to be used somewhere else
