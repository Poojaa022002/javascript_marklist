function cal() {
    document.getElementById("tot").value = parseInt(document.getElementById("tamil").value) + 
    parseInt(document.getElementById("english").value) + parseInt(document.getElementById("maths").value) + 
    parseInt(document.getElementById("science").value) + parseInt(document.getElementById("social").value);
    
}

function calculate() {
    document.getElementById("per").value = parseInt(document.getElementById("tot").value) / 500 * 100;
}

function grade() {
    let per = parseFloat(document.getElementById("per").value) || 0;
    let grade;
    if (per >= 90) {
        grade = 'A+';
    } else if (per >= 80) {
        grade = 'A';
    } else if (per >= 70) {
        grade = 'B+';
    } else if (per >= 60) {
        grade = 'B';
    } else if (per >= 50) {
        grade = 'C';
    } else if (per >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = ` <h4>Total Marks: ${parseInt(document.getElementById("tot").value)} / 500</h4>
        <h4>Percentage: ${per.toFixed(2)}%</h4>
        <h4>Grade: ${grade}</h4> `;
}

function clr() {
    document.getElementById("tamil").value = '';
    document.getElementById("english").value = '';
    document.getElementById("maths").value = '';
    document.getElementById("science").value = '';
    document.getElementById("social").value = '';
    document.getElementById("tot").value = '';
    document.getElementById("per").value = '';
    document.getElementById('result').innerHTML = ` <h4>Total Marks: </h4>
    <h4>Percentage: </h4>
    <h4>Grade: </h4> `;
}

function focusNextField(event, nextFieldId) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(nextFieldId).focus();
    }
}
