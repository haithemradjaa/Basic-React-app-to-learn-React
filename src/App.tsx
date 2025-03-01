import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisisble, SetAlertvisibility] = useState(false); // this array is for toggling the visibility of the alert component in our app

  return (
    // the conditional rendering happens only when the alertVisisble = true
    <div>
      {alertVisisble && <Alert onClose = {() => SetAlertvisibility(false)}>my Alert</Alert>}
      <Button
        color="success"
        onClick={() =>
          SetAlertvisibility(true)
        } /* this will keep toggling the true-false values each time clicked, and that will result in updating the DOM on our page */
      >
        This is a button!
      </Button>
    </div>
  );
}

export default App; // for it to be used somewhere else
