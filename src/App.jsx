import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleClick(selectedTab) {
    // selectedTab => 'components', jsx', 'props', 'state'
    setSelectedTopic(selectedTab);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) 
  {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {Object.entries(EXAMPLES).map(([key, example]) => (
                <TabButton key={key} isSelected={selectedTopic === key} onClick={() => handleClick(key)}>
                  {example.title}
                </TabButton>
              ))}
            </menu>
              {tabContent}
          </section>
      </main>
    </div>
  );
}

export default App;
