import * as React from "react"
import { store } from "./store"

export interface ITestProps {
    id?: string
}

export default class extends React.PureComponent<ITestProps> {
    render(): JSX.Element {
        return <div />
    }

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
