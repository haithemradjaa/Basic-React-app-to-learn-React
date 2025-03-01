import Alert from "./components/Alert"; // we need this one this time

function App() {
  return ( // children are passed inside the opening and closing tags of a component
    // we passed a span tag inside the Alert component without any problems because we told it to excpect it in the props interface!
    <div>
      <Alert /*text="hello there!" if you work with text prop */>
        Hello <span>world</span>! 
      </Alert>
    </div>
  );
}

export default App; // for it to be used somewhere else
