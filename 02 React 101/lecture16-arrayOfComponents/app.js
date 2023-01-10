let cards = data.map((course, i) => {
  // update Card component props
  return <Card key={i} data={course} />;
});
console.log(cards);

// ReactDOM.render here
ReactDOM.render(
  <div className="row">
    {cards}

    {/* when react unpack cards array 
        <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} />
        <Card data={data[3]} />
    */}
  </div>,
  document.getElementById("root")
);
