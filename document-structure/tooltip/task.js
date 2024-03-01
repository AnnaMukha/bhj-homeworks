const hasTooltip = document.querySelectorAll('.has-tooltip');

 const tooltipNew = document.createElement('div');
 tooltipNew.className = 'tooltip';

 const body = document.querySelector('body');
 body.appendChild(tooltipNew);

hasTooltip.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    
        const title = link.getAttribute('title');
    
        if (tooltipNew.classList.contains('tooltip_active')) {
            tooltipNew.classList.remove('tooltip_active');
        } else {
            tooltipNew.classList.add('tooltip_active');
            tooltipNew.textContent = title;
        
            let left = link.getBoundingClientRect().x;
            let top = link.getBoundingClientRect().y + link.getBoundingClientRect().height;
            tooltipNew.setAttribute('style', `left: ${left}px; top: ${top}px;`);
        }
    })
})