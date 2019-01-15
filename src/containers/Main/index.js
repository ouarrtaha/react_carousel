// NPM
import React, {Component} from 'react'
import queryString from 'query-string'
// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 0,
            itemWidth: 250
        };
    }

    render() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows

        const contentStyle = {
            gridTemplateColumns: `repeat(${col}, minmax(${this.state.itemWidth}px, 1fr))`,
            gridTemplateRows: `repeat(${row}, 1fr)`,
            width: `calc(${this.state.itemWidth}px * ${col})`
        }

        const itemStyle = {
            width: `${this.state.itemWidth}px`,
        }

        return (
            <div className="container">
                <NavBar
                    prevClicked={() => this.move(this.state.itemWidth)}
                    nextClicked={() => this.move(-this.state.itemWidth)}/>

                <div style={contentStyle}
                     className="content"
                     ref={(div) => {
                         this.content = div
                     }}
                >
                    <div style={itemStyle} className="content-item">1</div>
                    <div style={itemStyle} className="content-item">2</div>
                    <div style={itemStyle} className="content-item">3</div>

                    <div style={itemStyle} className="content-item">4</div>
                    <div style={itemStyle} className="content-item">5</div>
                    <div style={itemStyle} className="content-item">6</div>

                    <div style={itemStyle} className="content-item">7</div>
                    <div style={itemStyle} className="content-item">8</div>
                    <div style={itemStyle} className="content-item">9</div>
                </div>

                <Footer/>
            </div>
        );
    }

    componentDidMount() {

    }

    componentDidUpdate(prevState) {
        if (this.state.currentPosition !== prevState.currentPosition) {
            console.log('currentPosition', this.state.currentPosition);
            this.content.style.transform = `translateX(${this.state.currentPosition}px)`;
        }
    }

    move(value) {
        this.setState({
            currentPosition: this.state.currentPosition + value
        })

    }
}

export default Main;
