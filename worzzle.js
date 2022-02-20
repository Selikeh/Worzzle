let wrdArray = ["sabre", "apple", "mango", "whose", "blame", "crazy", "pilot","scare", "claim", "spear", "mouse", "aroma", "graze", "clear", "whirl"]

let referenceDate = new Date("02/17/2022")

let currentDate = Date.now()

let timeDifference = currentDate- referenceDate

console.log(Math.floor(timeDifference/(1000 * 3600 * 24)))
let numberOfDays = Math.floor(timeDifference/(1000 * 3600 * 24))

let word = wrdArray[numberOfDays]
// const box = document.getElementById('box')
// const check = document.getElementById('check')
// let output = ""

// check.addEventListener('click', ()=>{
//     let boxWord = box.value
//     // console.log(typeof(boxWord))
//     for( ltr of boxWord){
//         if (word.includes(ltr) && word.indexOf(ltr)==boxWord.indexOf(ltr)){
//             output = output + "[" + ltr + "]"
//         } else if (word.includes(ltr)) {
//             output = output + "{" + ltr + "}"
//         } else {
//             output = output + "<" + ltr + ">"
//         }
//     }

//     console.log(output)

// })


const tries = 6

const divisions = Array.from(document.getElementsByTagName('div'));


divisions[0].children[0].focus()

document.body.addEventListener('click', ()=>divisions[0].children[0].focus())

for (let id = 0; id < tries; id++){
    
    const boxContainer = divisions[id]
    console.log(boxContainer)
    let boxes = Array.from(boxContainer.children)
    
    console.log(boxes)
    
    for(box of boxes){
        box.addEventListener('input',nxtLine);
        box.addEventListener('keyup', delit);
        // box.addEventListener('focus', ) // on focus check if box contains any character, if it does focus on the next box
    }
    
    boxContainer.addEventListener('keypress', wrdChck)   
    
    function delit(e){
        console.log(e)
        if(e.keyCode === 8 || e.keyCode === 46 && box.value == '' || box.value == null){
            if(boxes.indexOf(e.target) != 0){
                console.log(boxes.indexOf(e.target))
                console.log(boxes[boxes.indexOf(e.target)-1])
                boxes[boxes.indexOf(e.target)-1].value = ""
                boxes[boxes.indexOf(e.target)-1].focus()
            }
        }
    }
    
    function nxtLine (e) {
        // console.log(e.target.value)

        if (e.keyCode == 32){
            e.preventDefault()
            console.log(e.keyCode)
        }
        
        if (e.target.value !== '' && e.target.value.length >= 1 && boxes.indexOf(e.target) < boxes.length-1){

                console.log(boxes.indexOf(e.target))
                if(e.target.value == " "){
                    e.target.value = ""
                    e.target.focus()
                }else{
                    boxes[boxes.indexOf(e.target)+1].focus()
                }
            }
        }


        function wrdChck(e){
                // console.log(e)
                if(e.keyCode === 13){
            
                    let guesWord = ""
                    for(box of boxes){
                        guesWord = guesWord+ box.value
                    }
                    // console.log(guesWord)
                    if (guesWord == word){
                        for(box of boxes){
                            // console.log(box.style)
                            box.style = 'border: 5px solid green'
                        }
                    } else{
                        for(box of boxes){
                            if (word.includes(box.value) && boxes[boxes.indexOf(box)].value === word[boxes.indexOf(box)]){
                                box.style = 'border: 5px solid green'
                            } else if(word.includes(box.value)){
                                box.style = 'border: 5px solid yellow'   
                            }
                        }
                    }
                    if(id+1 < tries){
                        // console.log(divisions[id+1].children[0])
                        divisions[id+1].children[0].focus()}
                }
            }
}



