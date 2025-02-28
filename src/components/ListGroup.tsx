function ListGroup() {
  const items = [
    // for a dynamic showcase of data in our listgroup
    "Youcef",
    "Ahmed",
    "Zaki",
  ];

  // since we don't have a for loop in jsx to display these in it, we need to map through this list and and convert each item in it to an 'li' element to be returned dynamically

  return (
    // '()' important if you wanna break you jsx into multiple lines!

    // instead of a div or something like that, we have a better solution, a fragment for multiple elements return, but we are going to have an error because in jsx we can only use html elements and react components!
    // to fix that problem, wrap that expression in '{}'
    // add the proper class to maintain the style
    <>
      <h1>Heading here for the sake of the example!</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
  // this is the compatible jsx code with the bootstrap styling brought from the bootstrap docs
  // you'll get an error first bcz 'class' is a reserved word in js and ts so change it all to className, for multiple selection press ctrl + d and keep pressing d untill you select them all and then type your changes!
  // press esc tp disable multi cursor editing
}

export default ListGroup;
