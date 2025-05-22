import Demo from './demo.jsx';
function App() {
  const username = "dhruvesh"
  return (
    // if you want to render multiple element on the page then used <> </>
    <>
      {/* we can also attached variable in the html  */}
      <h1>Hello world {username}</h1>
      <Demo />
    </> // It's called fragment
  );
} export default App;