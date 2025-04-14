document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const wishText = document.getElementById('wish');
    const personalizedName = document.getElementById('personalized-name');
    const nameInput = document.getElementById('name-input');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const musicToggle = document.getElementById('music-toggle');
    const musicStatus = document.getElementById('music-status');
    const backgroundMusic = document.getElementById('background-music');
    const fireworksContainer = document.querySelector('.fireworks');
    const balloonsContainer = document.querySelector('.balloons');
    
    // Expanded Array of Bengali New Year wishes (now 30+ items)
    const wishes = [
        // --- Original 10 ---
        "নতুন বছরে নতুন আশা নিয়ে, নতুন স্বপ্ন নিয়ে এগিয়ে চলুন। শুভ নববর্ষ!", 
        "বাংলা নববর্ষে আপনার জীবনে আসুক অফুরন্ত সুখ, শান্তি আর সমৃদ্ধি।", 
        "নববর্ষের প্রথম সকালে সূর্যের আলোর মতো ঝলমল করুক আপনার জীবন।", 
        "এই নববর্ষে দূরে থাকুক সকল দুঃখ, বেদনা। জীবন হোক আনন্দময়।", 
        "হাসি, আনন্দ আর সুখে ভরে উঠুক আপনার জীবনের প্রতিটি মুহূর্ত। শুভ বাংলা নববর্ষ!", 
        "নতুন বছরে নতুন উদ্যমে সাফল্যের শিখরে পৌঁছান। জানাই নববর্ষের শুভেচ্ছা।", 
        "এই বৈশাখে বাঙালির ঐতিহ্য ও সংস্কৃতি সমৃদ্ধ হোক। সবাইকে জানাই পয়লা বৈশাখের শুভেচ্ছা।", 
        "নববর্ষের এই শুভক্ষণে আপনার জীবনে আসুক অপার সুখ ও সমৃদ্ধি।", 
        "চৈত্র যায় বৈশাখ আসে, নতুন বছর আসে হাসে। সকলের জীবনে সুখ ও শান্তি বয়ে আনুক নববর্ষ।", 
        "পুরাতনকে বিদায় জানিয়ে নতুনকে বরণ করে নিন। শুভ নববর্ষ!", 
        // --- Added 10 ---
        "মুছে যাক সকল গ্লানি, ঘুচে যাক জরা। নতুন বছর আপনার জীবনে আনুক অনাবিল আনন্দ।", 
        "বৈশাখী শুভেচ্ছা! নতুন বছর আপনার এবং আপনার পরিবারের জন্য খুব ভালো কাটুক।", 
        "নতুন দিনের নতুন আলো, মুছে দিক সকল কালো। শুভ নববর্ষ ১৪৩২!", // Adjust year if needed
        "পয়লা বৈশাখের এই শুভ দিনে, আপনার সব ইচ্ছা পূর্ণ হোক। শুভ নববর্ষ!", 
        "এসো হে বৈশাখ, এসো এসো! আপনার জীবন আনন্দে ভরে উঠুক।", 
        "নববর্ষের উষ্ণ শুভেচ্ছা! আশা করি এই বছরটি আপনার জন্য সাফল্য এবং সৌভাগ্য নিয়ে আসবে।", 
        "সকল দুঃখ কষ্ট ভুলে, আসুন নতুন বছরকে স্বাগত জানাই। শুভ পয়লা বৈশাখ!", 
        "মঙ্গলময় হোক নতুন বছর। আপনার পথচলা হোক মসৃণ ও সুন্দর। শুভ নববর্ষ।", 
        "নতুন বছর আসুক নিয়ে নতুন নতুন আশা, পৃথিবীতে ছড়িয়ে দিক শুধুই ভালোবাসা। শুভ নববর্ষ!", 
        "সকল পুরোনো দুঃখ ভুলে, নতুন বছর কাটুক খুব আনন্দে। নববর্ষের শুভেচ্ছা।",
         // --- Added 10 More ---
        "নব আনন্দে জাগো আজি নব রবি কিরণে। শুভ নববর্ষ!", // Inspired by Rabindra Sangeet
        "পান্তা ভাতে ভরসা থাকুক, ইলিশ মাছের স্বাদ থাকুক। শুভ নববর্ষ!", // Cultural reference
        "বৈশাখের রঙে রঙিন হোক আপনার জীবন। নববর্ষের আন্তরিক প্রীতি ও শুভেচ্ছা।",
        "বছর ঘুরে আবার এলো পয়লা বৈশাখ। পুরোনো সব ক্লান্তি ভুলে নতুনকে করি আহ্বান।",
        "শুভ নববর্ষ! আনন্দ, স্বাস্থ্য ও সমৃদ্ধিতে ভরে উঠুক আপনার আগামীর দিনগুলো।",
        "ঢাক ঢোল আর গানের সুরে, নতুন বছর আসুক ঘুরে। শুভ নববর্ষ!",
        "বাংলা নববর্ষের শুভেচ্ছা সহ, আপনার জন্য রইল অনেক শুভকামনা।",
        "নতুন সকাল, নতুন দিন, নতুন করে শুরু হোক সব। শুভ নববর্ষ।",
        "সুখের স্মৃতি রেখো মনে, দুঃখের স্মৃতি যেও ভুলে। নতুন বছর কাটুক সবার খুব আনন্দে। শুভ নববর্ষ!",
        "পয়লা বৈশাখ মানেই বাঙালির উৎসব, বাঙালির গর্ব। এই দিনটি সবার ভালো কাটুক।",
        "এসো, এসো, এসো হে বৈশাখ! তাপসনিশ্বাসবায়ে মুমূর্ষুরে দাও উড়ায়ে। শুভ নববর্ষ!" // Tagore reference
    ];
    
    // Bengali poems/quotes for additional content
    const bengaliPoems = [
        "এসো হে বৈশাখ, এসো এসো\nমুছে যাক গ্লানি, ঘুচে যাক জরা\nতোমার অমৃত-পরশে",
        "নতুন দিনের সূর্য উঠেছে\nনতুন প্রাণের স্পন্দন জেগেছে\nনতুন বছরের প্রভাতে",
        "বহে যায় কাল, ফিরে না আসে\nনতুন দিনের আলো জ্বলে\nনতুন জীবন ফুটুক হাসে",
        "চিঁড়ে দই আর মিষ্টিমুখ,\nনববর্ষে আসুক শুধুই সুখ।",
        "আকাশভরা সূর্য তারা, বিশ্বভরা প্রাণ,\nতাহারি মাঝখানে আমি পেয়েছি মোর স্থান।",
        "ওই বাজে বৈশাখী ঝড়,\nআকাশ পাতাল করিয়া থর থর।",
        "মুক্ত কর হে বন্ধ,\nসব ভয় সংশয়।"
    ];
    
    // Generate a random wish
    function getRandomWish() {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        return wishes[randomIndex];
    }
    
    // Generate a random poem
    function getRandomPoem() {
        const randomIndex = Math.floor(Math.random() * bengaliPoems.length);
        return bengaliPoems[randomIndex];
    }
    
    // Update greeting card with random wish and name
    function updateCard() {
        const name = nameInput.value.trim();
        const wish = getRandomWish();
        
        wishText.innerHTML = `<p>${wish}</p><p class="poem">${getRandomPoem()}</p>`;
        
        if (name) {
            personalizedName.textContent = `শুভ নববর্ষ, ${name}!`;
        } else {
            personalizedName.textContent = "শুভ নববর্ষ!";
        }
        
        // Trigger fireworks animation
        showFireworks();
    }
    
    // Copy wish to clipboard
    function copyWish() {
        const wishParagraphs = wishText.querySelectorAll('p');
        let wishContent = '';
        wishParagraphs.forEach(p => {
            wishContent += p.innerText + '\n'; 
        });
        
        const name = personalizedName.textContent;
        const fullWish = `${wishContent.trim()}\n\n${name}`;
        
        navigator.clipboard.writeText(fullWish)
            .then(() => {
                alert('Wish copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = fullWish;
                    // Make the textarea invisible
                    textArea.style.position = 'fixed';
                    textArea.style.top = '-9999px';
                    textArea.style.left = '-9999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Wish copied to clipboard!');
                } catch (fallbackErr) {
                    console.error('Fallback copy failed: ', fallbackErr);
                    alert('Failed to copy wish. Please copy manually.');
                }
            });
    }
    
    // Toggle background music
    function toggleMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                 console.warn("Audio playback failed. User interaction might be required first.", error);
            });
            musicStatus.textContent = "Turn Off Music";
            musicToggle.classList.add('playing');
        } else {
            backgroundMusic.pause();
            musicStatus.textContent = "Turn On Music";
            musicToggle.classList.remove('playing');
        }
    }

    // Create balloons
    function createBalloons() {
        const colors = ['#e71d36', '#ff9505', '#2ec4b6', '#fdca40', '#f79256'];
        
        for (let i = 0; i < 10; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            
            const posX = Math.random() * 100;
            const size = 40 + Math.random() * 30;
            const colorIndex = Math.floor(Math.random() * colors.length);
            const delay = Math.random() * 10;
            const duration = 15 + Math.random() * 10;
            
            balloon.style.left = `${posX}%`;
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.2}px`;
            balloon.style.backgroundColor = colors[colorIndex];
            balloon.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
            balloon.style.animationDelay = `${delay}s`;
            balloon.style.animationDuration = `${duration}s`;
            
            const string = document.createElement('div');
            string.style.position = 'absolute';
            string.style.width = '2px';
            string.style.height = `${size * 0.7}px`;
            string.style.backgroundColor = '#aaa';
            string.style.top = `${size * 1.2}px`;
            string.style.left = `${size / 2}px`;
            
            balloon.appendChild(string);
            balloonsContainer.appendChild(balloon);
        }
    }
    
    // Show fireworks animation
    function showFireworks() {
        fireworksContainer.style.display = 'block';
        fireworksContainer.innerHTML = ''; 
        
        const colors = ['#e71d36', '#ff9505', '#2ec4b6', '#fdca40', '#f79256'];
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('firework');
                
                const posX = Math.random() * 90 + 5; 
                const posY = Math.random() * 80 + 10; 
                const colorIndex = Math.floor(Math.random() * colors.length);
                
                firework.style.left = `${posX}%`;
                firework.style.top = `${posY}%`;
                firework.style.backgroundColor = colors[colorIndex];
                
                fireworksContainer.appendChild(firework);
            }, i * 200); 
        }
        
        setTimeout(() => {
            fireworksContainer.style.display = 'none';
        }, 3000); 
    }
    
    // Event listeners
    generateBtn.addEventListener('click', updateCard);
    copyBtn.addEventListener('click', copyWish);
    musicToggle.addEventListener('click', toggleMusic);
    
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
    
    // Initialize application
    createBalloons();
    updateCard(); 
});
