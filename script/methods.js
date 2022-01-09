function writeQuestion(arr, queNumber) {
    let questionBox = document.getElementById('questionBox')
    questionBox.textContent = arr[queNumber].question
}


function writeTip(arr, queNumber) {
    let tipBox = document.getElementById('tipBox')
    let empArray = []
    let answera = arr[queNumber].answer

    for (let index = 0; index < answera.length; index++) {
        const element = answera[index];
        empArray.push(element)
    }

    let writerArr = []
    for (let index = 0; index < empArray.length; index++) {
        let rnd = Math.floor(Math.random() * empArray.length)
        let rena = Math.floor(Math.random() * (122 - 97)) + 97
        writerArr.push(empArray[rnd])
        let randH = String.fromCharCode(rena)
        empArray.splice(rnd, 1)
        writerArr.push(randH)

    }
    let tiParent = document.getElementById('tip')

    writerArr.map(item => {
        let tipBox = document.createElement('div')
        tipBox.id = 'tipBox'
        tiParent.appendChild(tipBox)
        tipBox.textContent = item

    })


}

// Get True Letter Function Working Here
let getLetterBtn = document.getElementById('getLetter')

let transArr = [];
let transNewArr = []
let hasBeenUsed = false
let tAnwB = document.getElementsByClassName('anw')

for (let index = 0; index < tAnwB.length - 1; index++) {
    transNewArr.push(tAnwB[index])
}


/*
Concept VİKİNGS

https://assets.mixkit.co/sfx/preview/mixkit-drums-of-war-call-2780.mp3
https://assets.mixkit.co/sfx/preview/mixkit-successful-horns-fanfare-722.mp3
https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5494e05e-8889-43cf-bc57-5914a7cd386c/ddzb2gf-0b54aae3-99fd-4e67-9343-6301e46f45e1.png/v1/fill/w_1280,h_1792,q_80,strp/jaeger_by_erebus88_ddzb2gf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5MiIsInBhdGgiOiJcL2ZcLzU0OTRlMDVlLTg4ODktNDNjZi1iYzU3LTU5MTRhN2NkMzg2Y1wvZGR6YjJnZi0wYjU0YWFlMy05OWZkLTRlNjctOTM0My02MzAxZTQ2ZjQ1ZTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PCqOMzOrcPGFZRF9v116iAF36aeNkL9wcTVcKSouSc4
https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wallpapersafari.com%2F82%2F73%2F4PcznU.jpg&imgrefurl=https%3A%2F%2Fwallpapersafari.com%2Fw%2F4PcznU&tbnid=jp3US5ZoD7TCCM&vet=10CAkQxiAoC2oXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc..i&docid=b0OTvA2CXvyugM&w=1920&h=1200&itg=1&q=viking%20background&ved=0CAkQxiAoC2oXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc
https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhigh%2Fnorse-wallpaper-fbrxwau7jaxvabpo.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fnorse-wallpaper-fbrxwau7jaxvabpo.html&tbnid=prWCYSMY-B_-0M&vet=10CAMQxiAoAGoXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc..i&docid=kuoo4Xb0wp8PYM&w=900&h=563&itg=1&q=viking%20background&ved=0CAMQxiAoAGoXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc
https://www.google.com/imgres?imgurl=https%3A%2F%2F2.bp.blogspot.com%2F-ED3YDjmGUt4%2FXEQG-4gNAAI%2FAAAAAAAAA6c%2FMX-Qz-hkszEXSgN5rsjltJZddJauj35vwCKgBGAs%2Fw3840-h2400-c%2Fviking-army-fantasy-art-7-4k.jpg&imgrefurl=https%3A%2F%2Fwww.uhdpaper.com%2F2019%2F01%2Fviking-fantasy-army-4k-3840x2160-20.html&tbnid=0Np3zdwWSSgzKM&vet=10CAsQxiAoAWoXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc..i&docid=6Q2usBhDiQTX-M&w=3840&h=2400&itg=1&q=viking%20background&ved=0CAsQxiAoAWoXChMIoKLar7qd9QIVAAAAAB0AAAAAEAc
https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3643620.jpg&imgrefurl=https%3A%2F%2Fwallpaperaccess.com%2Fviking-landscape&tbnid=7iwJfK1nYTkqDM&vet=12ahUKEwjG5Zerup31AhWCk6QKHRARB_wQMygGegUIARDDAQ..i&docid=NV76O1iLkJkGdM&w=1920&h=1080&itg=1&q=viking%20background&ved=2ahUKEwjG5Zerup31AhWCk6QKHRARB_wQMygGegUIARDDAQ
https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fviking-head-with-ax-isolated-black_43623-890.jpg%3Fsize%3D338%26ext%3Djpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fviking&tbnid=ALs0MM0CkstqQM&vet=12ahUKEwj_veb9jJv1AhXdiv0HHfeeA6sQMyg4egQIARBA..i&docid=8eA6MdU85Jn7dM&w=338&h=338&q=viking%20concept%20art%20png&ved=2ahUKEwj_veb9jJv1AhXdiv0HHfeeA6sQMyg4egQIARBA
*/
function getLetter(questionAnswer) {
    let audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-drum-deep-impact-563.mp3")
    let tra = questionAnswer.answer;
    let transRnd = Math.floor(Math.random() * tra.length);

    if (tP > 0) {
        tP = tP - 50
        audio.play()
        tpBox.textContent = tP + ' Puan'
        localStorage.removeItem('tp')
        localStorage.setItem('tp', tP)
        console.log(localStorage.getItem('tp'))
    } else {
        alert('Bütün Harfleri Açtınız')
    }

    if (hasBeenUsed) {
        let transRnd = Math.floor(Math.random() * transArr.length);
        let t = document.getElementById(transArr[transRnd])
        t.textContent = transArr[transRnd]
        console.log(transArr[transRnd]);
        transArr.splice(transRnd, 1);
        console.log(transArr);
    } else {
        hasBeenUsed = !hasBeenUsed
        console.log(hasBeenUsed)
        for (let index = 0; index < tra.length; index++) {
            transArr.push(tra[index])
            transNewArr.push(tAnwB[index])
        }
        let t = document.getElementById(transArr[transRnd])
        t.textContent = transArr[transRnd]
        console.log(transArr[transRnd]);
        transArr.splice(transRnd, 1);
        console.log(transArr);
    }
}

let newTransAnswer = []
let anwBox = document.getElementById('anwBox')
function writeAnswer(arr) {
    let anwBox = document.getElementById('anwBox')
    for (let index = 0; index < arr.answer.length; index++) {
        newTransAnswer.push(arr.answer[index])
    }
    newTransAnswer.map(item => {
        let anw = document.createElement('div')
        anwBox.appendChild(anw)
        anw.className = 'anw'
        anw.id = item
    })
    console.log(newTransAnswer)
}
var tP
function takeblePoint(calPoint) {
    // console.log(tP)
    tP = calPoint.length * 50
    tpBox.textContent = tP + ' Puan'
    localStorage.setItem('tp', tP)
    // console.log(tP)
}
localStorage.clear()

var myStorage = window.localStorage


function session() {
    let stat = myStorage.getItem('status')
    if (stat == 'logedIn') {

    } else {
        console.log('selam')
        let backSound = document.getElementById('au')
        let clicked = false
        backSound.play()
        let stopSound = document.getElementById('stopSound')
        stopSound.addEventListener('click', () => {
            if (clicked) {
                backSound.play()
                clicked = !clicked
            } else {
                backSound.pause()
                clicked = !clicked
            }
        })
        myStorage.setItem('lvl', '0')
    }
}
document.getElementById('asgard').addEventListener('click', () => {
    setAsgard()
})
document.getElementById('jotunheim').addEventListener('click', () => {
    setJotun()
})
document.getElementById('midgard').addEventListener('click', () => {
    setMid()
})
function setAsgard() {
    myStorage.setItem('status', 'logedIn')
    myStorage.setItem('map', 'Asgard')
    myStorage.setItem('beFore', 'true')
    let chapter = document.getElementsByClassName('chapter')
    chapter[0].style.display = 'none'
    chapter[1].style.display = 'none'
    chapter[2].style.display = 'none'
    let loading = document.getElementById('loading')
    loading.style.display = 'block'
}
function setJotun() {
    myStorage.setItem('status', 'logedIn')
    myStorage.setItem('map', 'Jotunheim')
    myStorage.setItem('beFore', 'true')
    let chapter = document.getElementsByClassName('chapter')
    chapter[0].style.display = 'none'
    chapter[1].style.display = 'none'
    chapter[2].style.display = 'none'
    let loading = document.getElementById('loading')
    loading.style.display = 'block'
}
function setMid() {
    myStorage.setItem('status', 'logedIn')
    myStorage.setItem('map', 'Midgard')
    myStorage.setItem('beFore', 'true')
    let chapter = document.getElementsByClassName('chapter')
    chapter[0].style.display = 'none'
    chapter[1].style.display = 'none'
    chapter[2].style.display = 'none'
    let loading = document.getElementById('loading')
    loading.style.display = 'block'
}

// function checkAnswer(answerFromApi,answerFromUser){
//     if(answerFromApi == answerFromUser){
//         questionChanger()
//     }else{
//         alert('yanlış')
//     }
// }

// function questionChanger(){
//   let gecVal = localStorage.getItem('lvl')
//   let gesVal = parseInt(gecVal)
//   let newVal = gesVal++
//   localStorage.removeItem('lvl')
//   localStorage.setItem('lvl', newVal)
//   llLoad()
// }

