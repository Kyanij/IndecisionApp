
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
           visibility:false
        };
    }
    handleToggleVisibility(){
       this.setState((prevState) => {
          return {
            visibility:!prevState.visibility
          };
       });
    }
    render(){
        return (
            <div>
            <button onClick={this.handleToggleVisibility}>
            {
                this.state.visibility ? 'Hide Details' : 'Show Details'
            }
            </button>
            {this.state.visibility && <p>Here are some text. Well done my boy</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// let visibility = false;
// const toggleVisibility = () => {
    
//        visibility = !visibility;
//       render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Togle</h1>
//         <button onClick={toggleVisibility}>
//         {
//             visibility ? 'Hide Detals' : 'Show Details'
//         }
//         </button>
//        {visibility && <p>Hey some text</p>}
//         </div>
//     )

//     ReactDOM.render(template,appRoot);
// }

// render();

