document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle aria-expanded attribute
        const expanded = item.getAttribute('aria-expanded') === 'true' || false;        
        item.setAttribute('aria-expanded', !expanded);
       
        //Show/hide faq-answer
        const answer = item.nextElementSibling;
        answer.style.display = expanded ? 'flex' : 'none';

        //Change icon visibility
        item.querySelector('.icon-plus').style.display = expanded ? 'none' : 'flex';
        item.querySelector('.icon-minus').style.display = expanded ? 'flex' : 'none';

    })
})