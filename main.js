$(document).ready(function(){
    $("#toggle-btn").click(function(){
        // change background color
        $("body").toggleClass("change-background");
        $(this).css("border","1px solid #f5f5f5");

        //toggle button
        $("span").text(
            $("span").text()=="light Mode"? "Dark Mode" : "LightMode"
        )
    })
    $("#toggle-btn").click(function(){
        let icon = $(this).find("ion-icon")
        icon.attr("name") === "moon"? icon.attr("name","sunny") : icon.attr("name","moon")
        $("body").toggleClass(change-background);
    })
})