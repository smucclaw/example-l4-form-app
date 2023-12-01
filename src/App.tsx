import React, { useState } from 'react';
import './App.css';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import schema from './formtypes/schema.json';
import $RefParser from "@apidevtools/json-schema-ref-parser";

const initialData = {}



function App() {
  try {
    const derefedSchema = $RefParser.dereference(schema);
    console.log(derefedSchema);
  }
  catch(err) {
    console.log(err);
  }
  
  const [data, setData] = useState(initialData);
  return (
    <div className="App">
      <JsonForms
        schema={schema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;
