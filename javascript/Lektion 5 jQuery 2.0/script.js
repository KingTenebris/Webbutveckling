$(document).ready(function()
{
    $("#emptyDivBtn").click(function()
    {
        const list = $("<ul>").appendTo("#emptyDiv");
        list.append($("<li>").text("Philip"));
        list.append($("<li>").text("give"));
        list.append($("<li>").text("me"));
        list.append($("<li>").text("an"));
        list.append($("<li>").text("A"));
        list.append($("<br>"));
        list.append($("<li>").text("Thank you"));

        $("#emptyDivBtn").remove();
    });

    $("#info").val("Something...");
    $("#myForm").submit(function()
    {
        let sendText = $("#info").val();

        alert(sendText);
    });

    $("#addRemove").click(function()
    {
        $(".color").toggleClass("hover");
    });

    $("#manDiv").click(function()
    {
        $("#cage").animate({
            width:"250px",
            left:"250px"
        });
    });

    $("#imgBtn").click(function()
    {
        $("img").attr({
                src: "https://buydesigntshirt.com/cdn/shop/products/Untitled-2_c09cd788-01e1-4467-9dea-fbe327989f1e_1024x1024@2x.jpg?v=1583939067",
                alt: "Cute cat",
                title: "Cute cat"
            });
    });
});