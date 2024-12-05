import React, { Component } from 'react';
import Typed from 'typed.js';

class TypedText extends Component {
  componentDidMount() {
    // Options for the Typed.js instance
    const options = {
      strings: [
        'Full Stack Web Developer',
        'MERN Stack Developer',
        'Systems Engineer',
        'AI Enthusiast',
        'Prompt Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    // Create a new Typed.js instance
    this.typed = new Typed(this.typedTextElement, options);
  }

  componentWillUnmount() {
    // Ensure to destroy Typed.js instance to prevent memory leaks
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <div>
        <span
          ref={(el) => {
            this.typedTextElement = el;
          }}
        ></span>
      </div>
    );
  }
}

export default TypedText;
