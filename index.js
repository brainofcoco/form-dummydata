function cocodummyform (options) {
    // pass input that have classes attached to them
    let input_form = document.querySelectorAll('.cocodummyform');

    //  options
    if (options.input_type === 'name')
         options.input_type = 'Samuel'
    else
        options.input_type = 'Coco Dummy'

    input_form.forEach(input => {
        input.style.boxShadow = `10px 10px 15px 1px rgba(0,0,0,0.12)`
        input.value = `${options.input_type}`
    })
}

module.exports.cocodummyform = cocodummyform;