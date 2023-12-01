import React, { useState } from 'react';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

import schema from './formtypes/schema.json';
import './App.css';

const initialData = {}

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className="App">
      <JsonForms
        schema={schema}
        // uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;
