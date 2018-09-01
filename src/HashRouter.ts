import { Router, RouterProps } from "./Router";
import { _last } from "./utils";

const hashHistory = new Array(location.hash);

export class HashRouter extends Router {

    constructor(props: RouterProps, context: any) {
        super(props, context);
        this.state = _last(hashHistory).slice(1);
    }

    onDidMount() {
        window.addEventListener('hashchange', this.onhashchange);
    }

    onWillUnmount() {
        window.removeEventListener('hashchange', this.onhashchange);
    }

    onhashchange = () => {
        this.update(location.hash.slice(1));
    };

    push(path: string) {
        const hash = '#' + path;
        if (_last(hashHistory) !== hash) {
            location.hash = hash;
            hashHistory.push(hash);
        }
    }

    pop() {
        if (hashHistory.length > 1) {
            hashHistory.pop();
            const hash = _last(hashHistory);
            location.hash = hash;
        }
    }

}
