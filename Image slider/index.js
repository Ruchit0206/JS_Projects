//normal first condition type

// let outer=document.querySelector(".outer-div");
// console.log(outer.children.length)


// let btn=document.querySelector(".btn-one")
// let i=0;
// let j=1;
// btn.onclick=()=>{
//  var ler=i;
//     outer.children[i].classList.add("new")

//     if(i==0){
//         outer.children[3].classList.remove("new")
//     }

//  if(i>0){
//     outer.children[i-1].classList.remove("new")
//  } 
 
//     console.log(i);
//     let pra=document.querySelector(".para");
//    console.log(pra)
//    pra.innerHTML=`<b>Change is in this  ${i} element</b>`



 



// i++;
//  if(i>3)
//     {
//        i=0;
//     }
 
//    }



//    let btn_two=document.querySelector(".btn-two")
// //    console.log(i)


//    btn_two.onclick=()=>{
    
//     console.log("bakward",i-2);
//     outer.children[i-2].classList.add=("new");
//     // i--;
//    }





//final output
let outer = document.querySelector(".outer-div");
let btnNext = document.querySelector(".btn-one"); 
let btnPrev = document.querySelector(".btn-two"); 
let pra=document.querySelector(".para")

let i = 0; 

function showImage(index) {
    for (let j = 0; j < outer.children.length; j++) {
        outer.children[j].classList.remove("new");
    }
    pra.innerHTML=`<b>Change = ${i}</b>`;

    outer.children[index].classList.add("new");
}

btnNext.onclick = () => {
    i++;
    if (i > 3) {
        i = 0; 
      }
    showImage(i);
};


btnPrev.onclick = () => {
    i--;
    if (i < 0) {
        i = 3; 
    }
    showImage(i);
};

showImage(i);
