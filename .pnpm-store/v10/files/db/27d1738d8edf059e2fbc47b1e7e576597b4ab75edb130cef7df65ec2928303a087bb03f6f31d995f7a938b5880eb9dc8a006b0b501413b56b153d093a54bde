import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import Spinner from '../../src/';
import { spinkitSpinners, loadersCssSpinners } from '../../src/spinners';

const colors = [
  'aqua',
  'blue',
  'coral',
  'fuchsia',
  'goldenrod',
  'green',
  'olive',
  'orange',
  'purple',
  'red',
  'steelblue',
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function spinnerPreview(spinner, idx) {
  const color = randomColor();
  return (
    <div key={idx}>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <code>&lt;Spinner name="{spinner}" /&gt;</code>
        <Spinner name={spinner} />
      </div>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <code>&lt;Spinner name="{spinner}" color="{color}"/&gt;</code>
        <Spinner name={spinner} color={color} />
      </div>
      <br /><br /><br />
    </div>
  );
}

function SpinnerExamples() {
  return (
    <div>
      <h1>React-Spinkit</h1>
      <a href="https://github.com/KyleAMathews/react-spinkit">Browse code on GitHub</a>

      <br /><br /><br />

      <h3>Spinkit Spinners</h3>
      {Object.keys(spinkitSpinners).map(spinnerPreview)}

      <h3>loaders.css Spinners</h3>
      <h6>(not all of these center here, but are easily centerable with flexbox)</h6>
      {Object.keys(loadersCssSpinners).map(spinnerPreview)}

      <h3>Spinner Options</h3>

      <code>&lt;Spinner name="wordpress" fadeIn="none" /&gt;</code>
      <Spinner name="wordpress" fadeIn="none" />
      <br /><br /><br />

      <code>&lt;Spinner name="wordpress" fadeIn="quarter" /&gt;</code>
      <Spinner name="wordpress" fadeIn="quarter" />
      <br /><br /><br />

      <code>&lt;Spinner name="wordpress" fadeIn="half" /&gt;</code>
      <Spinner name="wordpress" fadeIn="half" />
      <br /><br /><br />

      <code>
        &lt;Spinner name="wordpress" overrideSpinnerClassName="my-class-to-override" /&gt;
      </code>
      <Spinner name="wordpress" overrideSpinnerClassName="my-class-to-override" />
      <br /><br /><br />

      <code>&lt;Spinner name="wordpress" className="my-class" /&gt;</code>
      <Spinner name="wordpress" className="my-class" />
      <br /><br /><br />

      <code>&lt;Spinner name="wordpress" color="green" /&gt;</code>
      <Spinner name="wordpress" color="green" />
    </div>
  );
}

export default SpinnerExamples;
