// NPM
import React, {Component} from 'react'
import queryString from 'query-string'
// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/containers/Footer'
import GridItem from '@/components/GridItem'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 0,
            itemWidth: 250,
            items: [
                {
                    id: 1,
                    type: "text",
                    content: "sample text"
                },
                {
                    id: 2,
                    type: "video",
                    title: "Video 1",
                    subtitle: "sample",
                    thumbnail: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    url: "https://www.youtube.com/watch?v=qIdF8CQKXx4"
                },
                {
                    id: 3,
                    type: "image",
                    url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg"
                },
                {
                    id: 4,
                    type: "video",
                    title: "Video 2",
                    subtitle: "sample",
                    thumbnail: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    url: "https://www.youtube.com/watch?v=qIdF8CQKXx4"
                },
                {
                    id: 5,
                    type: "image",
                    url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 6,
                    type: "text",
                    content: "another quote"
                }
            ],
            translationLimit: null,
            percent: 20,

        };
    }

    render() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows

        const contentStyle = {
            gridTemplateColumns: `repeat(${col}, minmax(${this.state.itemWidth}px, 1fr))`,
            gridTemplateRows: `repeat(${row}, 1fr)`,
            width: `${Math.min(this.state.itemWidth * col, this.state.itemWidth * Math.ceil(this.state.items.length / row))}px`
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
                    {this.state.items.map(item => (
                        <GridItem style={itemStyle} key={item.id} item={item}/>
                    ))}
                </div>

                <Footer percent={this.state.percent}/>
            </div>
        );
    }

    componentDidMount() {
        const queries = queryString.parse(this.props.location.search)
        const col = queries.columns, row = queries.rows
        const translationLimit = this.state.itemWidth * (Math.ceil(this.state.items.length / row) - col)
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
