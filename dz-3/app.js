function Season(season) {
    document.body.className = season;
    const monthsDiv = document.getElementById('months');
    monthsDiv.innerHTML = '';
    monthsDiv.style.display = 'block';
    
    const seasons = {
        winter: ['Декабрь', 'Январь', 'Февраль'],
        spring: ['Март', 'Апрель', 'Май'],
        summer: ['Июнь', 'Июль', 'Август'],
        autumn: ['Сентябрь', 'Октябрь', 'Ноябрь']
    };

    const months = seasons[season];
    for (let i = 0; i < months.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = months[i];
        btn.setAttribute('data-index', i + 1);
        if (months[i] === 'Март') btn.classList.add('birthday');
        monthsDiv.appendChild(btn);
    }
}