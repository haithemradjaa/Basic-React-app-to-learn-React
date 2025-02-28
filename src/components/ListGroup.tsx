

function ListGroup() {
  let items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ];

  let selectedIndex = 0; // to keep track of what item is selected on the list, -1 means no item is selected
  // this will select the first item in the list on the page

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
