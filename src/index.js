import dva from 'dva';
import './index.css';
import { browserHistory } from '../node_modules/dva/router';

// 1. Initialize
const app = dva({
    history:browserHistory,
});

app.model(require("./models/app"));

// app.model(require("./models/main"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
