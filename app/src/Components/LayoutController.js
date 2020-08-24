// Layout controller
// Defines items included in layout
const IdsOfLayoutElements = [
    "Layout", 
    "Header", 
    "Instructions", 
    "Game"
];

const LayoutStates = [
    "default", 
    "instructionsVisible",
    "instructionsSemiVisible"
];

export function SetLayout(layoutState) 
{
    if (LayoutStates.includes(layoutState))
    {
        for (var id in IdsOfLayoutElements) {
            console.log(IdsOfLayoutElements[id]);
            console.log(layoutState);
            document.getElementById(IdsOfLayoutElements[id]).setAttribute("layout", layoutState)
        }    
    }
}