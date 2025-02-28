
import { MouseEvent } from 'react'; // this is for specifying the type of the event in the handleClick function

function ListGroup() {
  let items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ];

  const handleClick = (e : MouseEvent /* this is called type annotation, one the beauties of ts*/) => console.log(item, index, e); // you'll get a warning that e has an 'any' type, this is giving to you by the ts compiler, so you need to specify the type for type safety and syntax complition
  // when you reference this function you do so just by mentioning its name not by calling it with '()' , calling it will let it run even without an event happening!!

  return (
    // we added the index argument to the map function to keep track of the current item being operated on
    <>
      <h1>Heading here for the sake of the example!</h1>

      {!(items.length === 0) && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className="list-group-item"
              key={item}
              onClick={handleClick}
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
