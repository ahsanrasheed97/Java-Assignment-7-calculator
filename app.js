function getNumber(num)
{
    var result =document.getElementById("result")
    result.value +=  num;
}

function clear1()
{
    var result = document.getElementById("result");
    result.value = ""
}

function getresult()
{
    var result = document.getElementById("result");
    result.value = eval(result.value)
}