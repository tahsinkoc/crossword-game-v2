fetch('https://raw.githubusercontent.com/tahsinkoc/crossword-game/main/script/jotunheim.json')
    .then(response => response.json())
    .then(questions => {

        function llLoad() {
            let tuttu = localStorage.getItem('lvl')
            let tut = parseInt(tuttu)
            let chkAnswer = document.getElementById('chkAnswer')
            let think = document.getElementById('think')
            chkAnswer.addEventListener('click', () => {
                checkAnswer(questions[tut].answer, think.value)
                // think.value = ''
                think.focus()
            })

            takeblePoint(questions[tut].answer)
            writeAnswer(questions[tut])
            writeQuestion(questions, tut)
            writeTip(questions, tut)
            getLetterBtn.addEventListener('click', () => {
                getLetter(questions[tut])
            })
        }
        function questionChanger() {
            let gecVal = localStorage.getItem('lvl')
            let gesVal = parseInt(gecVal)
            let newVal = gesVal + 1
            if (newVal > 9) {
                location.href = 'finish.html'
            } else {
                localStorage.removeItem('lvl')
                localStorage.setItem('lvl', newVal)
                llLoad()
                location.reload()
            }
        }
        function checkAnswer(answerFromApi, answerFromUser) {
            if (answerFromApi == answerFromUser) {
                level()
                questionChanger()
                let callBox = document.getElementById('anwChkBx')
                callBox.style.left = '-100%'
                console.log(localStorage.getItem('lvl'))
            } else {
                let thk = document.getElementById('think')
                thk.style.animation = 'shake .4s ease-in-out'
                thk.style.borderColor = 'red'
                setTimeout(() => {
                    thk.style.animation = 'none'
                    thk.style.animation = null
                    thk.style.borderColor = ''
                }, 500);
            }
        }
        function level() {
            let takenPoint = document.getElementById('takenPoint')
            let val = localStorage.getItem('xp')
            let tpFromLs = localStorage.getItem('tp')
            let tpInt = parseInt(tpFromLs)
            if (val !== null) {
                let valI = parseInt(val)
                localStorage.removeItem('xp')
                let nVal = valI + tpInt
                localStorage.setItem('xp', nVal)
                console.log(localStorage.getItem('xp'))
            } else {
                localStorage.setItem('xp', tpInt)
                console.log(localStorage.getItem('xp'))

            }
        }
        function writeLevel() {
            takenPoint.textContent = localStorage.getItem('xp')
            let curr = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-drums-of-war-call-2780.mp3")
            curr.play()
        }
        llLoad()
        writeLevel()



    })
