document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuDisplay = document.querySelector('.menu-display');
    const themeToggle = document.getElementById('theme-toggle');
    
    const menus = [
        '김치찌개', '된장찌개', '삼겹살', '치킨', '피자', 
        '초밥', '마라탕', '떡볶이', '돈까스', '제육볶음',
        '햄버거', '파스타', '스테이크', '쌀국수', '라멘',
        '비빔밥', '불고기', '보쌈', '족발', '짜장면'
    ];

    // Theme logic
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleText(currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleText(newTheme);
    });

    function updateToggleText(theme) {
        themeToggle.textContent = theme === 'light' ? '다크 모드' : '화이트 모드';
    }

    // Menu recommendation logic
    generateBtn.addEventListener('click', () => {
        generateBtn.disabled = true;
        menuDisplay.textContent = '추천 중...';
        
        let count = 0;
        const interval = setInterval(() => {
            const tempIndex = Math.floor(Math.random() * menus.length);
            menuDisplay.textContent = menus[tempIndex];
            count++;
            
            if (count > 10) {
                clearInterval(interval);
                const finalIndex = Math.floor(Math.random() * menus.length);
                menuDisplay.textContent = menus[finalIndex];
                generateBtn.disabled = false;
            }
        }, 50);
    });
});
