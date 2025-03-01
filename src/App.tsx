import Alert from "./components/Alert"; // we need this one this time

function App() {
  return ( // children are passed inside the opening and closing tags of a component
    <div>
      <Alert /*text="hello there!" if you work with text prop */>
        Hello world! 
      </Alert>
    </div>
  );
}

export default App; // for it to be used somewhere else
