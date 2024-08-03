let day = document.getElementById('inp-d');
let month = document.getElementById('inp-m');
let year = document.getElementById('inp-y');
let button = document.getElementById('clk');
let spans = document.querySelectorAll('.span');  // استخدام querySelectorAll للأصناف المتعددة

button.onclick = function calc() {
    if (!day.value || !month.value || !year.value || day.value <= 0 || day.value > 31 || month.value <= 0 || month.value > 12 || year.value < 1900) {
               
             
            alert('Please enter valid date of birth')
            
        return;
        
    }clr()
    const today = new Date();
    let ageYears = today.getFullYear() - year.value;

    if (today.getMonth() + 1 < month.value || (today.getMonth() + 1 === month.value && today.getDate() < day.value)) {
        ageYears--;
    }

    let ageMonths = (today.getMonth() + 1) - month.value;
    if (ageMonths < 0) {
        ageMonths += 12;
    }

    let ageDays = today.getDate() - day.value;
    if (ageDays < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    document.querySelectorAll('#span')[0].innerText = ageYears;
    document.querySelectorAll('#span')[1].innerText = ageMonths;
    document.querySelectorAll('#span')[2].innerText = ageDays;
};

function clr() {
    day.style.backgroundColor = "white"
    
}


