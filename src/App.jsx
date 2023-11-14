import { useState } from 'react'; // a react hook
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';
function App() {

  const [selectedTopic, setSelectedTopic ] = useState(); // initial state value in useState('initial')
  // first element is current state value
  //second element is the state updating function, tells react to re-execute component
  function handleSelect(selectedButton) {
    // selectedButton = 'components', 'jsx', 'props', state'
    setSelectedTopic(selectedButton);
    console.log('selectedTopic', selectedTopic); // 1 behind
    console.log('selectedButton', selectedButton); // current
}


  let tabContent = <p>Please select a topic.</p>
  if (selectedTopic) {
    tabContent = <div id="content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App; 
