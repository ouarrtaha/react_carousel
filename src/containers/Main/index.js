// NPM
import React, {Component} from 'react'
import queryString from 'query-string'
// PROJECT
import './content.css';
import NavBar from '@/components/NavBar'
import Footer from '@/containers/Footer'
import GridItem from '@/components/GridItem'
import swipeDetect from '@/utils/touch-swipe'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 0,
            defaultItemWidth: 300,
            mobileScreen: 590,//Should match the @media max-width defined in stylesheet
            percent: 0,
            autoplayInterval: 4000,
            cols: 3,
            rows: 2,
            items: [
                {
                    id: 1,
                    type: "text",
                    content: "Sample text"
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
                    content: "Another quote"
                },
                {
                    id: 7,
                    type: "image",
                    url: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg"
                },
                {
                    id: 8,
                    type: "video",
                    title: "Video 2",
                    subtitle: "sample",
                    thumbnail: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    url: "https://www.youtube.com/watch?v=qIdF8CQKXx4"
                },
                {
                    id: 9,
                    type: "image",
                    url: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                },
                {
                    id: 10,
                    type: "text",
                    content: "Another quote"
                }
            ],
        };
    }

    render() {
        const contentStyle = {
            gridTemplateColumns: `repeat(${this.state.cols}, minmax(${this.state.itemWidth}px, 1fr))`,
            gridTemplateRows: `repeat(${this.state.rows}, 1fr)`,
            width: `${Math.min(this.state.itemWidth * this.state.cols, this.state.itemWidth * Math.ceil(this.state.items.length / this.state.rows))}px`
        }

        const itemStyle = {
            width: `${this.state.itemWidth}px`
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

    componentWillMount() {
        const queries = queryString.parse(this.props.location.search)

        if (queries.columns) {
            this.setState({cols: queries.columns})
        }
        if (queries.rows) {
            this.setState({rows: queries.rows})
        }

        window.addEventListener("resize", this.updateItemWidth.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateItemWidth.bind(this));
    }

    componentDidMount() {
        // Setup autoplay Handler
        const queries = queryString.parse(this.props.location.search)
        const autoplay = queries.autoplay

        if (autoplay === "true") {
            const handler = () => {
                if ((this.state.currentPosition - this.state.itemWidth) < -this.state.translationLimit) {
                    this.setState({
                        currentPosition: 0,
                        percent: 0
                    })
                } else {
                    this.move(-this.state.itemWidth)
                }
            }

            let slider = setInterval(handler, this.state.autoplayInterval)

            this.content.onmouseenter = () => clearInterval(slider)
            this.content.onmouseleave = () => {
                slider = setInterval(handler, this.state.autoplayInterval)
            }
        }

        // Setup mobile touch swipe handler
        swipeDetect.call(this, this.content, swipe => {
            if (swipe === "left") {
                this.move(-this.state.itemWidth)
            } else if (swipe === "right") {
                this.move(this.state.itemWidth)
            }
        })

        // Update item width to match viewport width
        this.updateItemWidth()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentPosition !== prevState.currentPosition) {
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

    updateItemWidth() {
        const itemComputedWidth = getComputedStyle(document.querySelector('.content-item')).width
        const itemComputedWidthVal = parseInt(itemComputedWidth.split('p')[0])

        const newItemWidth = window.innerWidth > this.state.mobileScreen ? this.state.defaultItemWidth : itemComputedWidthVal
        const translationLimit = newItemWidth * (Math.ceil(this.state.items.length / this.state.rows) - (window.innerWidth > this.state.mobileScreen ? this.state.cols : 1))
        const currentPositionUpdate = window.innerWidth <= this.state.mobileScreen ? -(this.state.percent / 100) * translationLimit : 0
        const percentUpdate = window.innerWidth <= this.state.mobileScreen ? this.state.percent : 0

        // Update item width and all other properties that depends on it
        this.setState({
            itemWidth: newItemWidth,
            translationLimit,
            currentPosition: currentPositionUpdate,
            percent: percentUpdate
        })
    }
}


export default Main;
