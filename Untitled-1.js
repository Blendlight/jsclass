function px(x)
{
    return x+"px";
}

function highest_height($el)
{
    console.log($el);
    h = $($el[0]).height();
    $el.each(function(i){
        if(h<$($el[i]).height())
        {
            h = $($el[i]).height();
        }
    });

    return h;
}

function sortByHeight(x, y){
    if($(x).height()<$(y).height()){
        return 1;
    }else if($(x).height()>$(y).height()){
        return -1;
    }
    return 0;
}

$("#serverinfo").width("100%");
$("#pma_navigation_collapser").click();

f = $("#container-form");

tables = $("#container-form table[id]");
tables = tables.sort(sortByHeight);

f.html("");
f.append(tables);

document.body.innerHTML = "";

var title = $("<h1 style='text-align:center;margin:10px;font-size:50px'>Title</h1>");

title.attr("contenteditable", true)

$(document.body).append(title);
document.body.style.paddingBottom = "10px";
$(document.body).append(f);





parent = $(tables[0]).parent();
pw = parent.width();
ph = parent.height();

row = new Array();

var xof = 40;

var yof = title.height();

var xs = 20;

var ys = 20;

var x = xof;
var y = yof;



tables.each(function(i, el)
            {
    $el = $(el);
    w = $el.width();
    h = $el.height();
    if(x+w>=pw)
    {
        x = xof;
        console.log("reached el "+i);
        console.log("row is ");
        console.log(row);

        y += highest_height($(row));
        y += ys;

        row = new Array();
    }

    $el.css("left", px(x));
    $el.css("top", px(y));

    x += w+xs;

    row.push($el);
});

document.body.style.height = y+yof+30+"px";

