import { useState } from "react";


function ListGroup() {
  let items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ];

  let selectedIndex = -1;

  // this is a built in function in react that let us manage state, it's a hook
  // a hook in react is a function that let us use built in features in react, so this is a state hook
  useState(() => {
    
  })

  return (
    // we added the index argument to the map function to keep track of the current item being operated on
    <>
      <h1>Heading here for the sake of the example!</h1>

      {!(items.length === 0) && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={item}
              onClick={() => {
                selectedIndex = index; // this will change the index of the item that should be highlighted to the clicked element
                // this variable here is never gonna do its work unless react is aware of it as a state changing variable, meaning; its data might changes over time, for that we use useState
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
