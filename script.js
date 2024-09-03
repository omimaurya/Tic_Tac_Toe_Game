 
        let items=document.querySelectorAll(".box");
        let message=document.querySelector(".disMessage");
        let turn =  document.querySelector(".turns");
        let btnResatrt=document.querySelector(".restart");
        let turnO=true;
        
        
       
        let winCondidation=[[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        
        let disabledBtn=()=>{
            items.forEach((e)=>{
                e.disabled=true;
            })
        };



        items.forEach((ele)=>{
            // console.log(ele)
            
            ele.addEventListener("click",()=>{
                // console.log("clickME")
                
                if(turnO){ 
                    ele.innerHTML="O"

                    ele.disabled=true

                    turn.innerHTML="Turn is"+" X"
                    turnO=false

                    
                }else{
                    ele.innerText="X"

                    ele.disabled=true

                    turn.innerHTML= "Turn is "+" O"
                    turnO=true;
                }
                
                checkWinner()

            })
           
        })
          
        let checkWinner=()=>{
            for(let winCheck of winCondidation){
                // console.log(winCheck[0],winCheck[1],winCheck[2])
                console.log(items[winCheck[0]].innerHTML,items[winCheck[1]].innerHTML,items[winCheck[2]].innerHTML)

                let winVal1=items[winCheck[0]].innerHTML
                let winVal2=items[winCheck[1]].innerHTML
                let winVal3=items[winCheck[2]].innerHTML

                if(winVal1!=" "&&winVal2 !=" "&& winVal3!=""){
                    if(winVal1===winVal2 && winVal2===winVal3){
                        // console.log("Congratsulations" + winVal1 +"is winner")
                        message.innerHTML=`Congratesulations ${winVal1} is win`
                        disabledBtn()
                    }
                }
            }
        }    
           
       btnResatrt.addEventListener("click",()=>{
        
        items.forEach((e)=>{
            e.disabled=false
               e.innerText =""
            })
       message.innerHTML=""
       })
      