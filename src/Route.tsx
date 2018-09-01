import { Component, createElement, Fragment, Reference, ComponentGetter } from "hele";
import { Router, defaultRouterName } from "./Router";
import { testRoute } from "./testRoute";

export interface RouteProps {
    ref?: Reference<Route>;
    router?: string;
    exact?: boolean;
    path: string;
    render?: (matched: boolean) => any;
    component?: ComponentGetter<{}>;
    children: any;
}

export class Route extends Component<RouteProps, boolean> {

    constructor(props: RouteProps, context: any) {
        super(props, context);
        this.state = testRoute(
            (context[props.router!] as Router).state,
            props.path,
            props.exact
        );
    }

    static defaultProps = {
        router: defaultRouterName
    };

    render() {
        const { props, state } = this;
        return props.render ? props.render(state) : (
            state && (
                props.component ?
                    createElement(props.component) :
                    <Fragment>{this.props.children}</Fragment>
            )
        );
    }

}
