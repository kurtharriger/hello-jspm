import 'systemjs-hot-reloader/default-listener.js';

// export function __reload(m) {
//   console.log(m);
//   if (m.component.state)
//     component.setState(m.component.state);
// }

import './styles.scss!'
import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'daily-web-sketch/component.js';

let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(HelloWorld), container);
