const countValue = document.getElementById('count')
console.log(countValue.textContent);
let result = document.getElementById('result')

let c = 0;
function incr () 
{
    c++;
    countValue.textContent = c;
    if(c >= 20) 
    {
        c = countValue.disabled
    }

    if(c%2==0)
    {
        result.textContent="EVEN"
    }else{
        result.textContent="ODD"
    }
}

function decr () 
{
    c--;
    countValue.textContent = c;
    if(c <= 0)
    {
        c = countValue.disabled
    }
    
}

function reset () 
{
    c=0;
    countValue.textContent = 0;
}
