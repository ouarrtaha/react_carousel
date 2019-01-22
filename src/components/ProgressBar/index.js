// NPM
import React, {Component} from 'react';
// PROJECT
import "./progressBar.css"

class bar extends Component {

    constructor(props) {
        super(props);

        this.bar = null
    }

    render() {
        return (
            <div className="bar-container">
                <div ref={e => this.bar = e} className="bar"/>
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.percent !== this.props.percent) {
            this.bar.style.width = `${this.props.percent}%`
        }

    }
}

export default bar;
