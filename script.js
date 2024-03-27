const playBtn      = document.querySelector('.play-btn');
const selcCountry  = document.querySelector('.selc-country');
const country      = document.querySelector('.country');
const expandSect   = document.querySelector('.expand');
const category1 = document.querySelector('.cat1')
const category2 = document.querySelector('.cat2');
const category3 = document.querySelector('.cat3');
const questionSect = document.querySelector('.question-section');
const optionBox = document.querySelector('.option-box');
const optionCol = document.querySelector('.option-col');
const submitBtn = document.querySelector('.submit-btn');
const resultSec = document.querySelector('.result')
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const congrats = document.querySelector('.congrats');
const ansDetailCorrect = document.querySelector('.ans-detail-correct');
const ansDetailWrong   = document.querySelector('.ans-detail-wrong');
const goToHome = document.querySelector('.backHome');

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let category = 0;

playBtn.onclick = () => {
    selcCountry.classList.add('active');
}

country.onclick = () =>{
    expandSect.classList.add('active');
    selcCountry.classList.remove('active');
}

category1.onclick = () => {
    questionSect.classList.add('active');
    setCategory(0);
    console.log(category);
    showQuestion(0,category);
    questionCounter(0,category);

}

category2.onclick = () => {
    questionSect.classList.add('active');
    setCategory(1);
    showQuestion(0,category);
    questionCounter(0,category);

}

category3.onclick = () => {
    questionSect.classList.add('active');
    setCategory(2);
    showQuestion(0,category);
    questionCounter(0,category);

}

submitBtn.onclick = () => {
    if (questionCount < 4){
        questionCount++;
        showQuestion(questionCount, category);
        questionCounter(questionCount, category);
        submitBtn.classList.remove('active');
    } 
    else{
        showResult();
        submitBtn.classList.remove('active')
        starScore(userScore);
        ansDetail(userScore);
    }
}

function optionSelected(answer){
    const option = document.querySelectorAll('.option');
    let userAns =  answer.textContent;
    let correctAns = listQuestion[category].selectedCategory[questionCount].answer;
    answer.classList.add('selected');
    if (userAns == correctAns){
        console.log('correct')
        userScore++;
    } else {
        console.log('false')
    };
    for (let i=0;i<4;i++){
        option[i].classList.add('inactive');
    }
    submitBtn.classList.add('active')
    console.log(userScore);
}

function starScore(score){
    if (score == 5){
        star1.classList.add('active');
        star2.classList.add('active');
        star3.classList.add('active');
        congrats.classList.add('active');
        congrats.textContent ='Excellent';
    }else 
    if(score >2 && score <5 ){
        star1.classList.add('active');
        star2.classList.add('active');
        congrats.textContent =`Good Job`;
        congrats.classList.add('active');
    }else 
    if(score > 0 && score < 3 ){
        star1.classList.add('active');
        congrats.textContent =`Not Bad`;
        congrats.classList.add('active');
    }else{
        congrats.textContent =`Nice Try`;
        congrats.classList.add('active');
    }
}

function setCategory(index){
    category = category + index;
}

function showQuestion (index, catIndex) {
    const questionTittle = document.querySelector('.qs-tittle');
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${listQuestion[catIndex].selectedCategory[index].question}`;

    let optionTag = `<div class="option-col">
                        <div class="option">${listQuestion[catIndex].selectedCategory[index].option[0]}</div>
                        <div class="option">${listQuestion[catIndex].selectedCategory[index].option[1]}</div>
                    </div>
                    <div class="option-col">
                        <div class="option">${listQuestion[catIndex].selectedCategory[index].option[2]}</div>
                        <div class="option">${listQuestion[catIndex].selectedCategory[index].option[3]}</div>
                    </div>`;
    optionBox.innerHTML = optionTag;
    questionTittle.textContent= `Question ${listQuestion[catIndex].selectedCategory[index].numb}`;

    const option = document.querySelectorAll('.option');
    for (let i=0; i<option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    };  
}

function questionCounter(index, catIndex){
    const questionCounter = document.querySelector('.question-info');
    questionCounter.textContent= `${listQuestion[catIndex].selectedCategory[index].numb} / 5` ;
}

function showResult(){
    resultSec.classList.add('active');
}

function ansDetail(index){
    ansDetailCorrect.textContent = `Correct${'\xa0'.repeat(1)}:${'\xa0'.repeat(5)}${index} / 5`
    ansDetailWrong.textContent   = `Wrong${'\xa0'.repeat(3.5)}:${'\xa0'.repeat(5)}${5-index} / 5`
}

goToHome.onclick = () =>{
    const option = document.querySelectorAll('.option');
    expandSect.classList.remove('active');
    submitBtn.classList.remove('active')
    questionSect.classList.remove('active');
    resultSec.classList.remove('active');
    star1.classList.remove('active');
    star2.classList.remove('active');
    star3.classList.remove('active');
    congrats.classList.remove('active');
    for (let i = 0; i<4; i++){
        option[i].classList.remove('inactive');
    }

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    category = 0;
    showQuestion(0,category);
    questionCounter(0,category);
}