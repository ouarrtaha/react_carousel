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

The project is made with ReactJs, with Grid layout to place items, for styling i used plain css (no preprocessor),
the widget is responsive and also accepts touch swipe to navigate, on Hover autoplay will pause immediately. 

