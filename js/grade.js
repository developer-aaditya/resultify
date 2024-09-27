let id = parseInt(localStorage.getItem('id-No'));

onload();

function onload(){
    viewProfile();
}

function viewProfile() {
    let profile = document.querySelector('.info-container');
    profile.innerHTML = '';
    profile.innerHTML = `
    <div class="info name">${studentData[id].firstName} ${studentData[id].lastName}</div>
    <div class="info roll-no">${studentData[id].rollNo}</div>
    <div class="info course">${studentData[id].course}</div>
    <div class="info phone-no">+91-${studentData[id].mobileNo}</div>
    `;
}


let firstSessional = document.querySelector('.first-sessional');
let secondSessional = document.querySelector('.second-sessional');
let put = document.querySelector('.put');
let bgImage = document.querySelector('.primary-image');
firstSessional.addEventListener('click', ()=>{
    firstSessional.style.backgroundColor = "var(--grey)";
    firstSessional.style.color = "white";
    secondSessional.style.backgroundColor = "white";
    secondSessional.style.color = "var(--grey)";
    put.style.backgroundColor = "white";
    put.style.color = "var(--grey)";
    bgImage.style.display = "none";
    resultViewFirstSessional(studentData[id].firstSessionalMarks, studentData[id].firstAssignmentMarks);
});
secondSessional.addEventListener('click', ()=>{
    firstSessional.style.backgroundColor = "white";
    firstSessional.style.color = "var(--grey)";
    secondSessional.style.backgroundColor = "var(--grey)";
    secondSessional.style.color = "white";
    put.style.backgroundColor = "white";
    put.style.color = "var(--grey)";
    bgImage.style.display = "none";
    resultViewFirstSessional(studentData[id].secondSessionalMarks, studentData[id].secondAssignmentMarks);
})
put.addEventListener('click', ()=>{
    firstSessional.style.backgroundColor = "white";
    firstSessional.style.color = "var(--grey)";
    secondSessional.style.backgroundColor = "white";
    secondSessional.style.color = "var(--grey)";
    put.style.backgroundColor = "var(--grey)";
    put.style.color = "white";
    bgImage.style.display = "none";
    resultViewFirstSessional(studentData[id].putMarks, studentData[id].practical);
})

function sessionalGradeChecker(marks) {
    if (marks <= 30 && marks >=25) {
        return 'A';
    } else if (marks < 25 && marks >= 20) {
        return 'B';
    } else if (marks < 20 && marks >= 15) {
        return 'C';
    } else if (marks < 15 && marks >= 10) {
        return 'D';
    } else {
        return 'E';
    }
}
function putGradeChecker(marks) {
    if (marks <= 100 && marks >= 90) {
        return 'A';
    } else if (marks < 90 && marks >= 80) {
        return 'B';
    } else if (marks < 80 && marks >= 70) {
        return 'C';
    } else if (marks < 70 && marks >= 50) {
        return 'D';
    } else if(marks < 50 && marks >= 33) {
        return 'E';
    } else {
        return 'F';
    }
}


function resultViewFirstSessional(studentMarks,otherMarks) {
    
    let marks = [studentMarks.sub1,studentMarks.sub2,studentMarks.sub3,studentMarks.sub4,studentMarks.sub5,studentMarks.sub6];

    let otherMarksArray = [otherMarks.sub1, otherMarks.sub2, otherMarks.sub3, otherMarks.sub4, otherMarks.sub5, otherMarks.sub6];
    
    let totalExamMarks = 0;
    let totalOtherMarks = 0;
    let examName;
    let otherType;
    let grade = [];
    let examPercentage;
    let otherPercentage;
    marks.forEach(element => {
        totalExamMarks += parseInt(element);
    });
    otherMarksArray.forEach(element => {
        totalOtherMarks += parseInt(element);
    });

    if(totalExamMarks > 180){
        examName = 'PUT';
        otherType = 'Practical';
        examPercentage = parseInt(totalExamMarks * 100 / 600);
        for (let i = 0; i < 6; i++) {
            grade[i] = putGradeChecker(marks[i]);
        }
    } else {
        examName = 'Sessional';
        otherType = 'Assignment';
        examPercentage = parseInt(totalExamMarks * 100 / 180);
        for (let i = 0; i < 6; i++) {
            grade[i] = sessionalGradeChecker(marks[i]);
        }
    }
    if(totalOtherMarks > 60){
        otherPercentage = parseInt(totalOtherMarks * 100 / 180);
    } else {
        otherPercentage = parseInt(totalOtherMarks * 100 / 60);
    }


    let marksView = document.querySelector(".marks-container");
    marksView.innerHTML = '';
    marksView.innerHTML += `
        <div class="thead">
            <div class="th">Subject</div>
            <div class="th">${examName}</div>
            <div class="th">${otherType}</div>
            <div class="th">Grade</div>
        </div>
        <div class="tbody">
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub1}</div>
                <div class="td">${marks[id]}</div>
                <div class="td">${otherMarksArray[id]}</div>
                <div class="td">${grade[id]}</div>
            </div>
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub2}</div>
                <div class="td">${marks[1]}</div>
                <div class="td">${otherMarksArray[1]}</div>
                <div class="td">${grade[1]}</div>
            </div>
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub3}</div>
                <div class="td">${marks[2]}</div>
                <div class="td">${otherMarksArray[2]}</div>
                <div class="td">${grade[2]}</div>
            </div>
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub4}</div>
                <div class="td">${marks[3]}</div>
                <div class="td">${otherMarksArray[3]}</div>
                <div class="td">${grade[3]}</div>
            </div>
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub5}</div>
                <div class="td">${marks[4]}</div>
                <div class="td">${otherMarksArray[4]}</div>
                <div class="td">${grade[4]}</div>
            </div>
            <div class="tr">
                <div class="th-in">${studentData[id].subjects.sub6}</div>
                <div class="td">${marks[5]}</div>
                <div class="td">${otherMarksArray[5]}</div>
                <div class="td">${grade[5]}</div>
            </div>
        </div>
    `;
    progressBarShower(examName, otherType, examPercentage, otherPercentage);
}

function progressBarShower(examName, otherType, examPercentage, otherPercentage){
    let progressBar = document.querySelector('.js-percent-shower');
    progressBar.innerHTML = '';
    progressBar.innerHTML += `
    <div class="upper-percent-shower">
        <div id="exam-percent" class="percent-name exam-percent">${examName}</div>
        <div id="other-percent" class="percent-name other-percent">${otherType}</div>
    </div>
    <div class="percent-container">
        <div class="inner-card">
            <div class="percentage-writer">${examPercentage}%</div>
            <div class="percent" style="--num:${examPercentage}">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
            </div>
        </div>
        <div class="percent-shower">
            <div class="percent-name exam-percent"><i class="fa-solid fa-arrow-left"></i>Sessional</div>
            <div class="percent-name other-percent">Assignment<i class="fa-solid fa-arrow-right"></i></div>
        </div>
        <div class="inner-card">
            <div class="percentage-writer">${otherPercentage}%</div>
            <div class="percent" style="--num:${otherPercentage}">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
            </div>
        </div>
    </div>
    `;
}