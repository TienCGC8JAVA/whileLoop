function task1()
{
    let num;
    let total = 0;
    while (num != -1)
    {
        num = parseInt(prompt("Enter is a number:"));
        alert(num);
        total += num;
    }
    alert("Tổng số lần nhập là: " + total);
}

function task2()
{
    let i = 1;
    while (i < 100)
    {
        document.write("<hr width = " + i + "%>");
        i++;
    }
}