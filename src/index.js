import React from "react";
import ReactDOM from "react-dom";
import * as style from './index.css';
// import ModuleToImport from './module-to-import';
import { ModuleLoadable } from './dynamic-importer';

const Index = () => {
  return <ModuleLoadable />
};

ReactDOM.render(<Index />, document.getElementById("index"));
