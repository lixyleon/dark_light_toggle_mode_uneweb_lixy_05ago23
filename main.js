$(document).ready(function(){
    $("#toggle-btn").click(function(){
        // change background color
        $("body").toggleClass("change-background");
        $(this).css("border","1px solid #f5f5f5");

        //toggle button
        $("span").text(
            $("span").text()=="ligth Mode"? "Dark Mode" : "LightMode"
        )
    })
    $("#toggle-btn").click(function(){
        $(this).find(i).toggleClass("fa-moon");
    })
})