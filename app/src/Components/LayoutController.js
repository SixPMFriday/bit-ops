// Layout controller
// Defines items included in layout
const IdsOfLayoutElements = (
    "Layout", 
    "Header", 
    "Instructions", 
    "Game"
);

export function SetLayout(layoutState) 
{
    for (var id in IdsOfLayoutElements) {
        document.getElementById(id).setAttribute("layout", layoutState)
    }
}