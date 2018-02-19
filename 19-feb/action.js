var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");



d1.onclick = fun;
d2.onclick = fun;
d3.onclick = fun;



function fun()
{
    if(this.style.color == "black"){

        if( this == d1 )
        {
            this.style.color ="red";
        }else if(this == d2)
        {
            this.style.color = "blue";
        }else if(this == d3)
        {
            this.style.color = "orange";
        }
    }else
    {
        this.style.color = "black";
    }
}