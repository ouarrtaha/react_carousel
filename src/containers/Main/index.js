// NPM
import React, {Component} from 'react';
// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

class Main extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="content">
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
}

export default Main;
