> Grid Carousel Widget with ReactJs

Demo: [code-challenge](http://tahaurtest.s3-website-us-east-1.amazonaws.com/).

## Available Scripts


Run the project in dev mode
#### `npm start`

Build the app
#### `npm run build`

## Options
Url can take 3 parameters
> example: http://tahaurtest.s3-website-us-east-1.amazonaws.com/?columns=2&rows=2&autoplay=true

```
columns = number of columns to show | default: 3
rows = number of rows | default: 2
autoplay = Auto slide items | true/false | default: false
```
> Autoplay interval can be set in Main state.autoplayInterval 

Items are passed through state, each item is defined by its id and type, and components are rendered depending on items types
```
items: [
    {
        id: 1,
        type: "text",
        content: "Sample text 1"
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
    ...
]
```

The project is made with ReactJs, with Grid layout to place items, for styling plain css (no preprocessor),
the widget is responsive and also accepts touch swipe to navigate, on Hover autoplay will pause immediately. 

