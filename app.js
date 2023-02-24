
const btns = document.querySelectorAll('.btn');
const btnNum = document.querySelectorAll('.num');
const cont1 = document.querySelector('.container1');
const cont2 = document.querySelector('.container2');
const submit = document.querySelector('.submit');
const rating = document.querySelector('.sel');
const error = document.querySelector('.error')

// btns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         if(btn.classList.contains('btn1')){
//             cont1.style.display = 'none'
//             cont2.style.display = 'block'
//         }
//     })
// })
btnNum.forEach((bttn)=>{
    bttn.addEventListener('click', (e)=>{
        const val = e.target.value
        const text = "You selected " + val + " out of 5"
        bttn.style.backgroundColor = 'hsl(25, 97%, 53%)'
        bttn.style.color = 'white'
        bttn.classList.add('clicked')
        if(bttn.classList.contains('clicked')){
            rating.textContent = text
            btns.forEach((btn)=>{
                btn.addEventListener('click', (e)=>{
                    if(btn.classList.contains('btn1')){
                        cont1.style.display = 'none'
                        cont2.style.display = 'block'
                    }
                })
            })
        }
    })
})