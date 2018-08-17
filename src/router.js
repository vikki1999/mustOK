import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Main from "./routes/Main.js";

import Login from "./routes/Login.js";

import Path from "./routes/Path.js";

import Table from "./routes/Table.js";

import SortTable from "./routes/SortTable.js";

import Editabletable from "./routes/Editabletable.js";

import AjaxTable from "./routes/AjaxTable.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/main" component={Main} >
        {/* <Router path="/Table" component={Table}></Router> */}
      </Route>
      <Route path="/Login" component={Login} />
      <Route path="/path" component={Path} />
      <Route path="/Table" component={Table} />
      <Route path="/sortTable" component={SortTable} />
      <Route path="/editabletable" component={Editabletable} />
      <Route path="/ajaxTable" component={AjaxTable} />
    </Router>
  );
}

export default RouterConfig;
