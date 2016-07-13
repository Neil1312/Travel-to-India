function toggle() {
    var area = document.getElementById("switch");
    var aTag = document.getElementById("links");
    var history = document.getElementById("History");            
    if (area.style.display === "none") {
        area.style.display = "table";
        aTag.innerHTML = "hide";
        history.style.width = "100%";
    } else {
        area.style.display = "none";
        aTag.innerHTML = "show";
        history.style.width = "71.5%";
    }
    
}