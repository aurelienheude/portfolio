function wrapper_function() 
{
    var wrapper_menu_width = document.getElementById("wrapper_menu").offsetWidth;

    if (wrapper_menu_width == 267)
    {
        wrapper_menu.style.width = "1px";
        wrapper_menu.style.display = "none";
    }
    
    else
    {
        wrapper_menu.style.width = "267px";
        wrapper_menu.style.display = "flex";
    }
}