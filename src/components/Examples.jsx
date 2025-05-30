import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
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
    );
}