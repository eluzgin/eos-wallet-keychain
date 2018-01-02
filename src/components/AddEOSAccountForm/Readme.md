Connected EOS accounts example:

```js
const { Provider } = require( "react-redux");
const { Router } = require("react-router-dom");
const { createBrowserHistory } = require("history");
const store = {
  getState: () => ({}),
  dispatch: _ => _,
  subscribe: _ => _
};
const noop = () => {};

<Provider store={store}>
  <Router history={createBrowserHistory()}>
    <AddEOSAccountForm callAPI={noop} />
  </Router>
</Provider>
```
