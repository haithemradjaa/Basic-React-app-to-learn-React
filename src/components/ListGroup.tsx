import { useState } from "react";

// here we are declaring an interface that holds some properties for us to reuse; mainly to make the ListGroup reusable
interface ListGroupProps {
  items: string[]; // still using type annotations
  heading: string;
}

function ListGroup(ListGroupProps : ListGroupProps /* passing a variable of the type ListGroupProps*/) { // 
  let items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ];

  // let selectedIndex = -1; only write this is you're not going to use the [selectedIndex, setSelectedIndex] = useState(-1); because it redeclares the variable inside

  // this is a built in function in react that let us manage state, it's a hook
  // a hook in react is a function that let us use built in features in react, so this is a state hook

  // const arr = useState(-1); this returns as array
  // in this array we have 2 elements, the first is for the changing variable, and the second one is an updater function or a setter for that variable
  // so the argument passed to it goes to the variable

  // a better way to define that array is this :

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // we added the index argument to the map function to keep track of the current item being operated on
    <>
      <h1>Heading here for the sake of the example!</h1>

      {!(items.length === 0) && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index); // passing the index to the updater function to update the state variable selectedIndex
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
