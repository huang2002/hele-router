import { Component, Context, createElement, Reference } from "hele";

export const defaultRouterName = 'router';

export interface RouterProps {
    ref?: Reference<Router>;
    name?: string;
    children: any;
}

export abstract class Router extends Component<RouterProps, string> {

    constructor(props: RouterProps, context: any) {
        super(props, context);
        this.name = props.name!;
    }

    static defaultProps = {
        name: defaultRouterName
    };

    name: string;

    render() {
        return (
            <Context value={{ [this.name]: this }}>
                {this.props.children}
            </Context>
        );
    }

    abstract push(path: string): void;
    abstract pop(): void;

}
