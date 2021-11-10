import { store } from "./store"

export interface ITestProps {
    id?: string
}

export default class {
    constructor(readonly props: ITestProps = {}) { }

    private doSelect(): void {
        const id = this.props.id || store.data[0]?._id || ''

        store.run(id)
    }

    componentDidMount(): void {
        this.doSelect()
    }

    componentDidUpdate(): void {
        this.doSelect()
    }
}
