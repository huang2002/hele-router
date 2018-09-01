# hele-router

Declarative routing for hele.

# Usage

```jsx
// If you use this lib as a UMD module, please access the APIs via the `HEle` global.
import { HistoryRouter, HashRouter, Switch, Route, Link } from "hele-router";
import { render, createElement, Fragment } from "hele";

const Greeting = () => <p>Welcome!</p>;

render(
    (
        <Fragment>
            {/* You can pass a `name` prop to a router to specify the name that it
            stores itself in the context and pass the same value as `router` props
            to links and routes to let them access that router. */}
            {/* A history router uses the `history` APIs to route. It accepts a
            `noHash` prop which is a boolean telling whether to preserve the hash
            representing location. (Default: true) */}
            <HistoryRouter>
                <h1>My App</h1>
                {/* matched = exact ? path === props.path : path.includes(props.path) */}
                {/* Rendering priority: `component` > `render` > children */}
                {/* `component` and children will only be rendered when matched. */}
                <Route exact path="/" component={Greeting} />
                <Route path="/foo" render={matched => matched && <p>foo</p>} />
                <Route path="/bar">
                    <p>bar</p>
                </Route>
                {/* A link renders an anchor element. So, treat it as an anchor tag
                except that you can set `back` to true to declare a back link. */}
                <Link href="/">Home</Link>
                <Link href="/foo">foo</Link>
                <Link href="/bar">bar</Link>
                <Link back>back</Link>
            </HistoryRouter>
            {/* A hash router uses the hash of the location to route. */}
            <HashRouter>
                {/* ... */}
            </HashRouter>
            {/* A switch router won't change the location of the document. It
            stores its own location. So, it accepts a `path` prop representing
            its default path. (Default: '/') */}
            <Switch>
                {/* ... */}
            </Switch>
        </Fragment>
    ),
    document.getElementById('root')
);
```

# Changelog

See [CHANGELOG.md](CHANGELOG.md)
