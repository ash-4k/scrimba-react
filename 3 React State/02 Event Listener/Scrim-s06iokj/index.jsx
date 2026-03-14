import ReactDOM from 'react-dom/client';

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */
  function handleHover() {
    console.log("Hovering")
  }

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleHover}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);