(() => {
    "use strict";
    const e = react,
        t = react - dom,
        n = {
            data: [],
            run(e) { }
        },
        d = class extends e.PureComponent {
            render() {
                return e.createElement("div", null)
            }
            doSelect() {
                const e = this.props.id || n.data[0]._id || "";
                n.run(e)
            }
            componentDidMount() {
                this.doSelect()
            }
            componentDidUpdate() {
                this.doSelect()
            }
        };
    (0, t.render)(e.createElement(d, null), document.getElementById("root"))
})();