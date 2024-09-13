// import reactImg from './assets/src/assets/react-core-concepts.png';

// import componentImg from "./src/assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
  <header>
  <img src="./src/assets/react-core-concepts.png" />
  <h1>React Essentials</h1>
  <p>
    {description} React concepts you will need for almost any app you are
    going to build!
  </p>
  </header>
  );
}


function CoreConcept(props) {
  return <li>
    <img src="..."/*{props.image}*/ alt="..."/*{props.title}*/ />
    <h3>TITLE</h3>
    {/* {props.title} */}
    <p>DESCRIPTION</p>
    {/* {props.description} */}
  </li>
}

function App() {
  return (
    <div>
    <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept title="Components" description="The core UI building block." img="./src/assets/react-core-concepts.png"/*{componentImg}*//>
          <CoreConcept title="Props"/>
          <CoreConcept/>
          <CoreConcept/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
