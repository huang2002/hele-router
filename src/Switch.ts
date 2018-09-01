import { Router, RouterProps } from "./Router";
import { _last } from "./utils";

export interface SwitchProps extends RouterProps {
    path?: string;
}

export class Switch extends Router {

    constructor(props: SwitchProps, context: any) {
        super(props, context);
        this._history.push(
            this.state = props.path!
        );
    }

    static defaultProps = {
        ...Router.defaultProps,
        path: '/'
    };

    private _history = new Array<string>();

    push(path: string) {
        const { _history } = this;
        if (_last(_history) !== path) {
            _history.push(path);
            this.update(path);
        }
    }

    pop() {
        const { _history } = this;
        if (_history.length > 1) {
            _history.pop();
            const path = _last(_history);
            this.update(path);
        }
    }

}
