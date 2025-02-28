import ListGroup from "./components/ListGroup" // we need this one this time

function App() {

  let items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ]; // we bring the list here in order for us to pass it directly

  const handleSelectItem = (item: string) => {
    console.log(item);
  } // always better to have a seperate event handler
  
  return <div><ListGroup items={items} heading="List of names" onSelectItem={handleSelectItem}/></div> // we pass the arguments just like setting the html attributes
}

export default App // for it to be used somewhere else