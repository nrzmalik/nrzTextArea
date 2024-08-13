function CreateInput(dataAttr, storylineVariable, options = {}) {
    var player = GetPlayer();
  var setVar = player.SetVar;
    const selectElement = document.querySelector(`div[data-acc-text='${dataAttr}']`);

    if (!selectElement) {
        console.error(`Element with data-acc-text='${dataAttr}' not found.`);
        return;
    }

    const textarea = document.createElement('textarea');
    const textareaId = `textarea-${storylineVariable}`;
    textarea.id = textareaId;

    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.boxSizing = 'border-box';
    textarea.style.resize = 'none';
    textarea.style.backgroundColor = options.backgroundColor || 'white';
    textarea.style.color = options.textColor || 'black';
    textarea.style.border = options.border || '1px solid black';
    textarea.style.fontSize = options.fontSize || '13px';

    if (options.defaultValue !== undefined) {
        textarea.value = options.defaultValue;
        setVar(storylineVariable, options.defaultValue);
    }

    selectElement.appendChild(textarea);

    textarea.addEventListener('input', function() {
        setVar(storylineVariable, textarea.value);
    });

    textarea.addEventListener('blur', function() {
        setVar(storylineVariable, textarea.value);
    });
}
