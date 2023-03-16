const [
    question1,
    question2,
    question3,
    question4,
    question5,
] = [
    document.getElementById('question1'),
    document.getElementById('question2'),
    document.getElementById('question3'),
    document.getElementById('question4'),
    document.getElementById('question5'),
];

const [
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
] = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4'),
    document.getElementById('answer5'),
];

const arrow = document.getElementsByClassName('arrow');

question1.addEventListener('click', () => {
    if(answer1 && answer1.style.display === 'none') {
        question1.style.color = 'black';
        question1.style.fontWeight = 'bold';
        answer1.style.display = 'block';
        arrow[0].style.transform = 'rotate(180deg)';
    } else {
        question1.style.color = 'rgb(96, 94, 94)';
        question1.style.fontWeight = 'normal';
        answer1.style.display = 'none';
        arrow[0].style.transform = 'rotate(0deg)';
    }
});
question2.addEventListener('click', () => {
    if(answer2 && answer2.style.display === 'none') {
        question2.style.color = 'black';
        question2.style.fontWeight = 'bold';
        answer2.style.display = 'block';
        arrow[1].style.transform = 'rotate(180deg)';
    } else {
        question2.style.color = 'rgb(96, 94, 94)';
        question2.style.fontWeight = 'normal';
        answer2.style.display = 'none';
        arrow[1].style.transform = 'rotate(0deg)';
    }
});
question3.addEventListener('click', () => {
    if(answer3 && answer3.style.display === 'none') {
        question3.style.color = 'black';
        question3.style.fontWeight = 'bold';
        answer3.style.display = 'block';
        arrow[2].style.transform = 'rotate(180deg)';
    } else {
        question3.style.color = 'rgb(96, 94, 94)';
        question3.style.fontWeight = 'normal';
        answer3.style.display = 'none';
        arrow[2].style.transform = 'rotate(0deg)';
    }
});
question4.addEventListener('click', () => {
    if(answer4 && answer4.style.display === 'none') {
        question4.style.color = 'black';
        question4.style.fontWeight = 'bold';
        answer4.style.display = 'block';
        arrow[3].style.transform = 'rotate(180deg)';
    } else {
        question4.style.color = 'rgb(96, 94, 94)';
        question4.style.fontWeight = 'normal';
        answer4.style.display = 'none';
        arrow[3].style.transform = 'rotate(0deg)';
    }
});
question5.addEventListener('click', () => {
    if(answer5 && answer5.style.display === 'none') {
        question5.style.color = 'black';
        question5.style.fontWeight = 'bold';
        answer5.style.display = 'block';
        arrow[4].style.transform = 'rotate(180deg)';
    } else {
        question5.style.color = 'rgb(96, 94, 94)';
        question5.style.fontWeight = 'normal';
        answer5.style.display = 'none';
        arrow[4].style.transform = 'rotate(0deg)';
    }
});