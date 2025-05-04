function DessertsList(props) {
    // Implement the component here.
    const filteredList = props.data.filter((item) => item.calories < 500);
    const sortedList = filteredList.sort((a, b) => a.calories - b.calories);
    const healthyDesert = sortedList.map((item) => {
      const itemText = `${item.name} - ${item.calories}`;
      return <li>{itemText}</li>
    });
    return (
      <ul>
        {healthyDesert}
      </ul>
    );
  }
  
  export default DessertsList;
  