$(function ()
{
    $('#btnSearch').show().click(function () { Search($("#txtSearchTerm").val(),0);});
    $('#lnkPrev').click(function () { Search($("#txtSearchTerm").val(),-1); });
    $('#lnkNext').click(function () { Search($("#txtSearchTerm").val(),1);  });
});

function Search(term, direction)
{
    url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBeSFNekUNBNIy4GBmEF8vvE0zN_pvJAKE&cx=016137344911268397475:mty1eg1gjvi&q=" + escape(term) + "?searchType=image?num=10";
    $.getJSON(url, '', SearchCompleted);
    console.log('test');
}

function SearchCompleted(response)
{
    var html = "";
    for (var i = 0; i < response.items.length; i++)
    {
        html += response.items[i].pagemap.cse_image[0].src+ "<br />";
    }
    $("#output").html(html);
}
