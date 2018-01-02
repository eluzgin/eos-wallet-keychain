A Header example:

```js
const { Provider } = require( "react-redux");
const { Router } = require("react-router-dom");
const { createBrowserHistory } = require("history");
const store = {
  getState: () => ({
      user: {
        isAuthenticated: true,
        email: "here@there.com"
      },
      profile: {
        profile: {
          displayName: "Here N. There",
          location: "Anytown, USA"
        }
      }
    }),
  dispatch: _ => _,
  subscribe: _ => _
};

<Provider store={store}>
  <Router history={createBrowserHistory()}>
    <Header />
  </Router>
</Provider>
```
