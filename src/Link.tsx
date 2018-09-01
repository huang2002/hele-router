import { Component, createElement, RawProps, Reference } from "hele";
import { defaultRouterName, Router } from "./Router";

export interface LinkProps extends RawProps {
    ref?: Reference<HTMLAnchorElement>;
    router?: string;
    href?: string;
    back?: boolean;
    onclick?: (event: MouseEvent) => any;
}

export class Link extends Component<LinkProps, never> {

    constructor(props: LinkProps, context: any) {
        super(props, context);
        this.onclick = this.onclick.bind(this);
    }

    static defaultProps = {
        href: 'javascript:;',
        back: false,
        router: defaultRouterName
    };

    render() {
        const { router, back, onclick, ...attrs } = this.props;
        return <a {...attrs} onclick={this.onclick}>{this.props.children}</a>;
    }

    onclick(event: MouseEvent) {

        const { props } = this;
        let returnValue: any;

        if (props.onclick) {
            returnValue = props.onclick(event);
        }

        if (!event.defaultPrevented) {
            event.preventDefault();
            const router = this.context[props.router!] as Router;
            if (props.back) {
                router.pop();
            } else if (props.href) {
                router.push(props.href);
            }
        }

        return returnValue;

    }

}
