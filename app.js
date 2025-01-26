const winArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const ngam=document.getElementById('ngame')

ngam.addEventListener("click", ()=>{
    window.location.reload();
})

const cellElements=document.querySelectorAll('.cell')

console.log(cellElements[3])
let circle=false;

for (let cell of cellElements)
{
    cell.addEventListener('click',winner,{once:true})
}


function winner(e){
    let clicked_cell=e.target;
    let current_turn = circle ? "circle":"x";
    clicked_cell.classList.add(current_turn);
    if(checkwin(current_turn))
    {
        document.querySelector('section').classList.add('win')
        document.querySelector('p').innerHTML="Wnner is"
        document.querySelector('span').innerText=current_turn;
    }
    else if(isDraw())
    {
        document.querySelector('section').classList.add('win')
        document.querySelector('span').innerText="Game Draw"  
    }
    else{
    circle=!circle;
    }
}


function checkwin(current_turn){
   return winArray.some((items)=>{
       return items.every((item)=>{
        return cellElements[item].classList.contains(current_turn)
        })
    })
}


function isDraw(){
    let cellel=[...cellElements]
   return cellel.every((item)=>{
        return item.classList.contains('x')  || item.classList.contains('circle')
    })
}

document.querySelector('#reset').addEventListener('click',()=>{
    document.querySelector('section').classList.toggle('win');
    window.location.reload();
})