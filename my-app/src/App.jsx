import Demo from './demo.jsx';
function App() {
  return (
    // if you want to render multiple element on the page then used <> </>
    <>
      <h1>Hello world</h1>
      <Demo />
    </> // It's called fragment
  );
} export default App;