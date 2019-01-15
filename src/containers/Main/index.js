// NPM
import React, {Component} from 'react'
import queryString from 'query-string'

// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

class Main extends Component {
    render() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows

        const contentStyle = {
            gridTemplateColumns: `repeat(${col}, 1fr)`,
            gridTemplateRows: `repeat(${row}, 1fr)`
        }

        return (
            <div>
                <NavBar/>
                <div style={contentStyle} className="content">
                    <div className="content-item">1</div>
                    <div className="content-item">2</div>
                    <div className="content-item">3</div>

                    <div className="content-item">4</div>
                    <div className="content-item">5</div>
                    <div className="content-item">6</div>

                    <div className="content-item">7</div>
                    <div className="content-item">8</div>
                    <div className="content-item">9</div>
                </div>
                <Footer/>
            </div>
        );
    }


    componentDidMount() {

    }
}

export default Main;
