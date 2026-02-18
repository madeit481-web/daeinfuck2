document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuDisplay = document.querySelector('.menu-display');
    const foodImage = document.getElementById('food-image');
    const themeToggle = document.getElementById('theme-toggle');
    
    const menuData = [
        { name: '김치찌개', img: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=500&q=80' },
        { name: '된장찌개', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80' },
        { name: '삼겹살', img: 'https://images.unsplash.com/photo-1529692236671-f1f6e994a52c?auto=format&fit=crop&w=500&q=80' },
        { name: '치킨', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80' },
        { name: '피자', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80' },
        { name: '초밥', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80' },
        { name: '마라탕', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80' },
        { name: '떡볶이', img: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80' },
        { name: '돈까스', img: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=500&q=80' },
        { name: '제육볶음', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80' },
        { name: '햄버거', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
        { name: '파스타', img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=500&q=80' },
        { name: '스테이크', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80' },
        { name: '쌀국수', img: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=500&q=80' },
        { name: '라멘', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80' },
        { name: '비빔밥', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80' },
        { name: '불고기', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=500&q=80' },
        { name: '보쌈', img: 'https://images.unsplash.com/photo-1623961988350-66b064cb3997?auto=format&fit=crop&w=500&q=80' },
        { name: '족발', img: 'https://images.unsplash.com/photo-1601622537063-25ed304325a7?auto=format&fit=crop&w=500&q=80' },
        { name: '짜장면', img: 'https://images.unsplash.com/photo-1623961990059-28355e2ca9a7?auto=format&fit=crop&w=500&q=80' }
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
        menuDisplay.textContent = '메뉴 고르는 중...';
        foodImage.style.transform = 'scale(1.1)';
        
        let count = 0;
        const interval = setInterval(() => {
            const tempIndex = Math.floor(Math.random() * menuData.length);
            menuDisplay.textContent = menuData[tempIndex].name;
            foodImage.src = menuData[tempIndex].img;
            count++;
            
            if (count > 15) {
                clearInterval(interval);
                const finalItem = menuData[Math.floor(Math.random() * menuData.length)];
                menuDisplay.textContent = finalItem.name;
                foodImage.src = finalItem.img;
                foodImage.style.transform = 'scale(1)';
                generateBtn.disabled = false;
            }
        }, 80);
    });
});
