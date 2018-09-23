import * as React from 'react';
import { render } from 'react-dom';

import * as fs from 'fs'; // TypeError: fs.readFileSync is not a function
import fsDefault from 'fs'; // TypeError: fs_1.default.readFileSync is not a function
import { readFileSync } from 'fs';

import './index.css';
import ErrorSpan from './ErrorSpan';

declare var __dirname: string;

const hello = readFileSync(__dirname + '/rawHello.tsx', 'utf-8');

let fromStar: React.ReactNode;
try {
  fromStar = fs.readFileSync(__dirname + '/rawHello.tsx', 'utf-8');
} catch (error) {
  fromStar = <ErrorSpan error={error} />;
}

let fromDefault: React.ReactNode;
try {
  fromDefault = fsDefault.readFileSync(__dirname + '/rawHello.tsx', 'utf-8');
} catch (error) {
  fromDefault = <ErrorSpan error={error} />;
}

const App = () => (
  <main>
    <pre>{hello}</pre>
    <pre>{fromStar}</pre>
    <pre>{fromDefault}</pre>
  </main>
);

render(<App />, document.getElementById('root'));
