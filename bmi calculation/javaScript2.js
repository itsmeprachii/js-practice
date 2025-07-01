const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    //to stop the submit operation for while
    e.preventDefault()
    const ht = parseInt(document.querySelector('#height').value)
    const wt = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (ht === ' ' || ht < 0 || isNaN(ht)) {
        result.innerHTML = 'please enter a valid ht'
    } else if (wt === ' ' || wt < 0 || isNaN(wt)) {
        result.innerHTML = 'please enter a valid wt'
    } else {
        const bmi = (wt / ((ht * ht) / 10000)).toFixed(2)
            //show the result
        result.innerHTML = `<span>${bmi}</span>`
    }

})