import React from 'react';


function calculateCollapsedScale () {
    // The menu title can act as the marker for the collapsed state.
    const collapsed = document.getElementById("game_instructions_tite").getBoundingClientRect();
  
    // Whereas the menu as a whole (title plus items) can act as
    // a proxy for the expanded state.
    const expanded = document.getElementById("game_instructions").getBoundingClientRect();
  
    return {
      x: collapsed.width / expanded.width,
      y: collapsed.height / expanded.height
    };
  }


// Game Instructions
// Expandable menu which collapses when uses clicks outside
export class GameInstructions extends React.Component {

    // Assign dom ref to instance property so it can be referenced in component
    container = React.createRef();
    state = { open: false };

    // Add event listener when component is instantiated in dom, remove when it is destroyed
    componentDidMount() { 
        document.addEventListener("mousedown", this.handleClickOutside); 
    }
    componentWillUnmount() { 
        document.removeEventListener("mousedown", this.handleClickOutside); 
    }

    // Close content window when user clicks outside of it
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };
    
    // Close content window if open, open content window if closed
    handleButtonClick = () => {
        this.setState(state => {
            return {    
                open: !state.open,
            };
        });
    };

    // Render button and content window
    render() {
        return (
            <>
            <div id="game_instructions"
                 className="game_instructions expanding_content"
                 ref={this.container}>
                <button id="game_instructions_tite"
                        className="expanding_content_button" 
                        onClick={this.handleButtonClick}>
                    <a>
                        Instructions
                    </a>
                </button>
                {this.state.open && (
                    <div id="game_instructions_content" className="expanding_content_content">
                    <ul className="navmenu_dropdown_content_list">
                        <li><a>The Goal of the Game is to Change the Current Value so it Matches the Target Value</a></li>
                        <li><a>You Can Change the Current Value by Applying Bit Operations!</a></li>
                        <li><a>To Apply A Bit Operation: Select Your Desired Operation, Set Any Operation-Specific Parameters, Then Select "Run Operation"</a></li>
                        <li><a>Current and Target Values are Represented as 8-Bit Arrays, meaning they can be any Positive Integer between 0 and 255</a></li>
                        <li><a>Any Operations Which Would Change The Current Value To Something Outside of This Range Will Fail</a></li>
                        <li><a>Good Luck!</a></li>
                    </ul>
                </div>
                )}
            </div>
            </>
        );
    }
}
