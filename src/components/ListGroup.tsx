import { useState } from "react";

// here we are declaring an interface that holds some properties for us to reuse; mainly to make the ListGroup reusable
interface ListGroupProps {
  items: string[]; // still using type annotations
  heading: string;
  onSelectItem: (item: string) => void; // the naming is conventional, here we are not defining anything, we are just decalring what is what, so you'd know that this prop is a function that returns nothing and its up to you what function you wanna pass after
}

function ListGroup( { items, heading, onSelectItem } /* we pass the items and the heading like this so we have direct access to them without dot notation  */ : ListGroupProps /* passing a variable of the type ListGroupProps*/) { // if you pass this, you'll have to pass arguments in the App.tsx or you'll have some errors

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
      <h1>{heading}</h1>

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
                onSelectItem(item);
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
