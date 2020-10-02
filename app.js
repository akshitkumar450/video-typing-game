let diffs = document.querySelector('#diffs')
let wintime = document.querySelector('#wintime')
let winscore = document.querySelector('#winscore')
let word = document.querySelector('#word')
let input = document.querySelector('#text')
let check = document.querySelector('#check')
let endgame = document.querySelector('#end-game')

let random = [
    'nina',
    'emily',
    'jia',
    'lacy',
    'julia',
    'nina elle',
    'emily willis',
    'jia lissa',
    'lacy lennon',
    'julia Ann',
    'nicole aniston',
    'brandi love',
    'abella danger',
    'tori black',
    'cherie deville'
]

input.focus();
let randomword;
let score = 0;
let time = 10;

function getrandom() {
    return random[Math.floor(Math.random() * random.length)]
}

function addword() {
    randomword = getrandom()
    word.textContent = randomword;
}

addword()

function updatescore(){
    score++;
    winscore.textContent=score;
}
let timeinterval=setInterval(updatetime,1000)

function updatetime(){
    time--;
    wintime.textContent=time;
    if(time===0){
        clearInterval(timeinterval)
        endgame.innerHTML=`
        <h1>Time ran out</h1>
        <p>your total score is${score}</p>
        <button onclick="location.reload()">reload</button>`
        endgame.style.display='flex'
    }
}

input.addEventListener('input', () => {
    if (input.value === randomword) {
        addword();
        updatescore()
        input.value=''
        if(diffs.value==='hard'){
            time+=2;
        }
        if(diffs.value==='medium'){
            time+=3;
        }
        if(diffs.value==='easy'){
            time+=5;
        }
          updatetime()
    }
})