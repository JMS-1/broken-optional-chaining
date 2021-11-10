(() => {
    "use strict";
    const t = {
        data: [],
        run(t) { }
    };
    console.log(new class {
        constructor(t = {}) {
            this.props = t
        }
        doSelect() {
            const o = this.props.id || t.data[0]._id || "";
            t.run(o)
        }
        componentDidMount() {
            this.doSelect()
        }
        componentDidUpdate() {
            this.doSelect()
        }
    })
})();