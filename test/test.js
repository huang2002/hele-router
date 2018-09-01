/// <reference types="../" />
const {
    Reference, Fragment, createElement: h,
    HistoryRouter, HashRouter, Switch, Route, Link
} = HEle;

const historyRouterRef = new Reference(),
    hashRouterRef = new Reference(),
    switchRef = new Reference(),
    routeRef = new Reference(),
    linkRef = new Reference();

HEle.render(
    h(Fragment, null, [
        h('b', null, 'HistoryRouter'),
        h(HistoryRouter, { ref: historyRouterRef }, [
            h('br'),
            h(Route, { path: '/test/a' }, 'a'),
            h('br'),
            h(Link, { href: 'a' }, 'a'),
            h('br'),
            h(Route, {
                ref: routeRef,
                path: '/test/b',
                exact: true,
                component: () => 'b'
            }, 'Error!'),
            h('br'),
            h(Link, { href: 'b' }, 'b'),
            h('br'),
            h(Route, {
                path: '/test/ab',
                render: matched => (matched ? 'Matched' : 'Not matched') + ' path "ab".',
                component: () => 'Error!'
            }, 'Error!'),
            h('br'),
            h(Link, { href: 'ab' }, 'ab'),
            h('br'),
            h(Link, { back: true }, 'back'),
            h('br'),
        ]),
        h('br'),
        h('b', null, 'HashRouter'),
        h(HashRouter, { ref: hashRouterRef }, [
            h('br'),
            h(Route, { path: 'a' }, 'a'),
            h('br'),
            h(Link, { href: 'a' }, 'a'),
            h('br'),
            h(Route, { path: 'b', exact: true }, 'b'),
            h('br'),
            h(Link, { href: 'b' }, 'b'),
            h('br'),
            h(Route, { path: 'ab' }, 'ab'),
            h('br'),
            h(Link, { href: 'ab' }, 'ab'),
            h('br'),
            h(Link, { ref: linkRef, back: true }, 'back'),
            h('br'),
        ]),
        h('br'),
        h('b', null, 'Switch'),
        h(Switch, { ref: switchRef, path: '/1' }, [
            h('br'),
            h(Route, { path: '/1' }, '1'),
            h('br'),
            h(Link, { href: '/1' }, '1'),
            h('br'),
            h(Route, { path: '/2', exact: true }, '2'),
            h('br'),
            h(Link, { href: '/2' }, '2'),
            h('br'),
            h(Route, { path: '/12' }, '12'),
            h('br'),
            h(Link, { href: '/12' }, '12'),
            h('br'),
            h(Link, { back: true }, 'back'),
            h('br'),
        ]),
        h('br'),
    ]),
    document.getElementById('root')
);
