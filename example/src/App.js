import React, { Component } from 'react';
import Demo from './Demo';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      x: -50,
      y: -15,
      radius: 100
    };
  }

  render() {
    return (
      <div>
        <header className="site-header">
          <div className="maxwidth-wrapper">
            <h1>React Spotlight</h1>
            <p>Highlight an area on your page by dimming the rest of the content.</p>
            <Demo />
          </div>
        </header>
        <div className="github-bar">
          <div className="maxwidth-wrapper github-bar-content">
            <code className="snippet">npm install react-spotlight</code>
            <span>or</span>
            <a className="link-view-docs" href="https://github.com/MatisLepik/react-spotlight">View docs on GitHub</a>
          </div>
        </div>

        <main className="usage maxwidth-wrapper">
          <h2>Basic example</h2>
          <code className="code-block" dangerouslySetInnerHTML={{ __html: `
<span class="source js jsx"><span class="meta tag jsx"><span class="punctuation definition tag jsx">&lt;</span><span class="entity name tag open jsx"><span class="support class component open jsx">Spotlight</span></span><span class="JSXAttrs"> <span class="entity other attribute-name jsx">x</span><span class="keyword operator assignment jsx">=</span><span class="meta embedded expression js"><span class="punctuation section embedded begin jsx">{</span><span class="source js jsx"><span class="constant numeric js">350</span></span><span class="punctuation section embedded end jsx">}</span></span> <span class="entity other attribute-name jsx">y</span><span class="keyword operator assignment jsx">=</span><span class="meta embedded expression js"><span class="punctuation section embedded begin jsx">{</span><span class="source js jsx"><span class="constant numeric js">25</span></span><span class="punctuation section embedded end jsx">}</span></span> </span><span class="punctuation definition tag jsx">/&gt;</span></span></span>
          ` }} />

          <h2>With all props</h2>
          <code className="code-block" dangerouslySetInnerHTML={{ __html: `
            &lt;Spotlight<br />
              &nbsp;&nbsp;x={50}<br />
              &nbsp;&nbsp;y={25}<br />
              &nbsp;&nbsp;color=&quot;#d74793&quot;<br />
              &nbsp;&nbsp;radius={100}<br />
              &nbsp;&nbsp;responsive<br />
              &nbsp;&nbsp;usePercentage<br />
              &nbsp;&nbsp;animSpeed={1000}<br />
              &nbsp;&nbsp;borderColor=&quot;black&quot;<br />
              &nbsp;&nbsp;borderWidth={5} /&gt;
          ` }}></code>
        </main>
      </div>
    );
  }
}

export default App;
