import Message from "./Message" // the period '.' means the current folder

function App() {

  // let's say that we wanna have the Message component inside a div element 
  // first, you need to import it in order to use it!
  
  // the sweet spot is going to be hit when you know that the component are used just like html tags, opened and closed!

  return <div><Message></Message></div>

  // You can use the self-closing syntax <Message />


}

export default App // for it to be used somewhere else