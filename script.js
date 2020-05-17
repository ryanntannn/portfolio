var currentVisible = null

function MakeVisible(elementId){
    if(currentVisible){
        currentVisible.style.display = "none";
    }

    currentVisible = document.getElementById(elementId);
    currentVisible.style.display = "inline";
}