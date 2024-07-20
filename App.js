const parent = React.createElement(
    'div',
    { id: "parent" },
    React.createElement(
        'div',
        { id: "child" },
        React.createElement(
            'h1',
            { id: "heading1" },
            'Hello World from React Js'
        )
    )
);




const heading = React.createElement(
    'h1',
    { id: "heading" },
    'Hello World from React Js'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)