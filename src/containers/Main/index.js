// NPM
import React, {Component} from 'react'
import queryString from 'query-string'
// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/containers/Footer'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 0,
            itemWidth: 250,
            nbrItems: 21,
            translationLimit: null,
            percent: 20
        };
    }

    render() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows

        const contentStyle = {
            gridTemplateColumns: `repeat(${col}, minmax(${this.state.itemWidth}px, 1fr))`,
            gridTemplateRows: `repeat(${row}, 1fr)`,
            width: `${Math.min(this.state.itemWidth * col, this.state.itemWidth * Math.ceil(this.state.nbrItems / row))}px`
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
                     ref={e => this.content = e}
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

                    <div style={itemStyle} className="content-item">10</div>
                    <div style={itemStyle} className="content-item">11</div>
                    <div style={itemStyle} className="content-item">12</div>

                    <div style={itemStyle} className="content-item">13</div>
                    <div style={itemStyle} className="content-item">14</div>
                    <div style={itemStyle} className="content-item">15</div>

                    <div style={itemStyle} className="content-item">16</div>
                    <div style={itemStyle} className="content-item">17</div>
                    <div style={itemStyle} className="content-item">18</div>

                    <div style={itemStyle} className="content-item">19</div>
                    <div style={itemStyle} className="content-item">20</div>
                    <div style={itemStyle} className="content-item">21</div>
                </div>

                <Footer percent={this.state.percent}/>
            </div>
        );
    }

    componentDidMount() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows
        const translationLimit = this.state.itemWidth * (Math.ceil(this.state.nbrItems / row) - col)
        this.setState({
            translationLimit
        })
    }

    componentDidUpdate(prevState) {
        if (this.state.currentPosition !== prevState.currentPosition) {
            console.log('currentPosition', this.state.currentPosition);
            this.content.style.transform = `translateX(${this.state.currentPosition}px)`;
        }
    }

    move(value) {
        const newPosition = this.state.currentPosition + value
        if (newPosition <= 0 && newPosition >= -this.state.translationLimit) {
            this.setState({
                currentPosition: newPosition,
                percent: (newPosition / -this.state.translationLimit) * 100
            })
        }
    }

}

export default Main;
