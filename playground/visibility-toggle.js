class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: true
        }
    }

    handleToggle(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && <p>This is toggle content</p>
                }
                <p>{this.props.text}</p>
            </div>
        )
    }
}

ReactDOM.render(<Visibility text="this is the text from reactdom.render"/>, document.getElementById("root"))

// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }


// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && <p>Showing the details here</p>}
//         </div>
//     )
    
//     ReactDOM.render(template, document.getElementById("root"))
// }

// render()
