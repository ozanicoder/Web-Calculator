const display = document.getElementById('display');
const eql = [document.getElementById('eql')];
const clear = [document.getElementById('c')];

const n = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7'), document.getElementById('8'), document.getElementById('9')];
const opr = [document.getElementById('p'), document.getElementById('l'), document.getElementById('m'), document.getElementById('d')];
const dot = [document.getElementById('dot')]
const del = [document.getElementById('del')]

const erro = 'faaahhh'


function addToDisplay(value) {
    display.value += value;
    display.scrollLeft = display.scrollWidth
}

function clearDisplay(value) {
    display.value = '0';
}

function delFromDisplay() {
    display.value = display.value.slice(0, -1)
    display.value = '0'
}

function calculate() {
   
    if (display.value === '') return;
        try {
            const expr = display.value.replace(/x/g, '*')
            const result = math.evaluate(expr)
            display.value = String(result)
        } catch (er) {
            display.value = erro
            console.error(er)
        }
}


n.forEach (btn => {
    btn.addEventListener('click', () => addToDisplay(btn.textContent))
});

dot.forEach (btn => {
    btn.addEventListener('click', () => addToDisplay(btn.textContent))
});

opr.forEach (btn => {
    btn.addEventListener('click', () => addToDisplay(btn.textContent))
});

clear.forEach (btn => {
    btn.addEventListener('click', () => clearDisplay(btn.textContent))
});

del.forEach (btn => {
    btn.addEventListener('click', () => delFromDisplay(btn.textContent))
});

eql.forEach (btn => {
    btn.addEventListener('click', () => calculate(btn.textContent))
})


document.addEventListener('keydown', (e) => {
    k = e.key;
    if ( display.value === erro ){
        clearDisplay()
    } else if (display.value === '0') {
        display.value = display.value.slice(0, -1)
        if (k <10 || k === '+' || k === '-' || k === '/' || k === 'x' || k === 'X' || k === '*' || k === ',' || k === '.' ) {
            addToDisplay(k)
        } else {
            display.value = 0            
        }
        
    } 
    else {
        
        if (k <10 || k === '+' || k === '-' || k === '/') {
            addToDisplay(k)
        } else if ( k === 'x' || k === 'X' || k === '*') {
            addToDisplay('x')
        } else if ( k === ',' || k === '.') {
            addToDisplay('.')
        } else if ( k === 'Escape' || k === 'c' || k === 'C'){
            clearDisplay()
        } else if ( k === 'Backspace' || k === 'Delete') {
            delFromDisplay()
        } else if (k === 'Enter' || k === 'Space' || k === '=') {
            calculate()
        }
    }
    
    
        
    e.preventDefault()
})




