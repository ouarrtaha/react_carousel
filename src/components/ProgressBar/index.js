// NPM
import React, {Component} from 'react';
// PROJECT
import "./progressBar.css"

class bar extends Component {
    render() {
        return (
            <div className="bar-container">
                <div ref="bar" className="bar"/>
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.percent !== this.props.percent) {
            this.refs.bar.style.width = `${this.props.percent}%`
        }

    }
}

export default bar;
