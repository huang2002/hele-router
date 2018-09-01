import { Router, RouterProps } from "./Router";

export interface HistoryRouterProps extends RouterProps {
    noHash?: boolean;
}

export class HistoryRouter extends Router {

    constructor(props: HistoryRouterProps, context: any) {
        super(props, context);
        this.state = location.pathname;
    }

    props!: HistoryRouterProps;

    onDidMount() {
        window.addEventListener('popstate', this.onpopstate);
    }

    onWillUnmount() {
        window.removeEventListener('popstate', this.onpopstate);
    }

    onpopstate = (e: PopStateEvent) => {
        this.update(location.pathname);
    };

    push(path: string) {
        if (!this.props.noHash && path.lastIndexOf('#') === -1) {
            path += location.hash;
        }
        history.pushState(null, '', path);
        this.update(location.pathname);
    }

    pop() {
        history.back();
    }

}
