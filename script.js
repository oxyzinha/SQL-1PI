function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    var paragraphs = section.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle('hidden');
    }
}

function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    var paragraphs = section.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle('hidden');
    }
}

function changeLanguage() {
    var button = document.querySelector('button');
    var buttonText = button.textContent;
    
    if (buttonText === 'Translate to Portuguese') {
        button.textContent = 'Translate to English';
        translateToPortuguese();
    } else {
        button.textContent = 'Translate to Portuguese';
        translateToEnglish();
    }
}

function translateToPortuguese() {
    var headings = document.querySelectorAll('h1');
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        switch (heading.id) {
            case 'sql-definition':
                heading.textContent = 'O que é SQL?';
                
                break;
            case 'sql-importance':
                heading.textContent = 'Por que o SQL é importante?';
                break;
            case 'sql-components':
                heading.textContent = 'Quais são os componentes de um sistema SQL?';
                break;
            case 'sql-working':
                heading.textContent = 'Como o SQL funciona?';
                break;
            case 'sql-commands':
                heading.textContent = 'Quais são os comandos SQL?';
                break;
            default:
                break;
        }
    }
}

function translateToEnglish() {
    var headings = document.querySelectorAll('h1');
    for (var i = 0; i < headings.length; i++) {
        var heading = headings[i];
        switch (heading.id) {
            case 'sql-definition':
                heading.textContent = 'What is SQL?';
                break;
            case 'sql-importance':
                heading.textContent = 'Why is SQL important?';
                break;
            case 'sql-components':
                heading.textContent = 'What are the components of a SQL system?';
                break;
            case 'sql-working':
                heading.textContent = 'How does SQL work?';
                break;
            case 'sql-commands':
                heading.textContent = 'What are SQL commands?';
                break;
            default:
                break;
        }
    }
}
