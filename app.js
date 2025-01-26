const winArray=[
    [0,1,2],
    [3,4,5],
    [5,7,8],
    [0,3,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,5]
]


const cellElements=document.querySelectorAll('.cell')

console.log(cellElements)

let circle=true;
cellElements.forEach((cellitem)=>
{
    

    cellitem.addEventListener("click", ()=>
    {
        if(circle){
        cellitem.classList.toggle('x')
            circle=false;
        }
        else
        {
            cellitem.classList.toggle('circle')
            circle=true;
        }

    },{once:true}
    )
})
