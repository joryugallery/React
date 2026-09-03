function MyButton() {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {
            onClick: () => setIsClicked(true)
        },
        isClicked ? 'Clicked' : 'Click here'
    );

}

const domcontainer = document.querySelector("#root");

const root = ReatDOM.createRoot(domcontainer)
root.render(React.createElement(MyButton))