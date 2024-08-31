/* eslint-env browser */

import React, { useEffect, useRef, useState } from 'react';
// Ensure SimpleWebSerial is imported properly based on how it's set up in your project
import SimpleWebSerial from 'simple-web-serial'; // adjust the path as necessary

const SimplePlotter = () => {
  const [value, setValue] = useState(0);
  const graphRef = useRef(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const connection = SimpleWebSerial.setupSerialConnection({
      requestAccessOnPageLoad: true,
    });

    // Register callback that listens to pure, unnamed data
    connection.on('data', (data) => {
      setValue(data);
    });

    const updateGraph = () => {
      frameCountRef.current += 1;

      // Set the translateX style to create the scrolling effect
      if (graphRef.current) {
        graphRef.current.style.transform = `translateX(-${frameCountRef.current}px)`;

        // Create a new dot and set its position based on the value
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.transform = `translate(${frameCountRef.current}px, -${value}vh)`;

        // Append the dot to the graph
        graphRef.current.appendChild(dot);
      }

      requestAnimationFrame(updateGraph);
    };

    // Start the graph animation
    requestAnimationFrame(updateGraph);

    // Cleanup function if needed
    return () => {
      connection.close(); // Close connection if the component unmounts
    };
  }, [value]);

  return (
    <div>
      <div id="graph" ref={graphRef}></div>
      <div id="zero">0</div>
      <div id="upper">1023</div>
    </div>
  );
};

export default SimplePlotter;
