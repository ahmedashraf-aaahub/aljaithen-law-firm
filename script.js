/* --- 1. تهيئة مكتبة AOS (Animation On Scroll) --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // تشغيل AOS وضمان التفاعل في كل مرة
    AOS.init({
        duration: 1000,
        once: false, // تم التغيير إلى false لضمان التفاعل عند التمرير صعوداً ونزولاً
        offset: 50, 
    });

    // 2. تفعيل قائمة الهامبرغر في الجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // إغلاق قائمة الجوال عند الضغط على رابط
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. شريط التنقل الثابت (Sticky Header)
    const header = document.getElementById('header');
    const logoImg = document.querySelector('.logo-img');
    
    // جعل الهيدر أصغر عند التمرير
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            // تصغير الشعار قليلاً
            logoImg.style.height = '40px'; 
        } else {
            header.style.padding = '10px 0';
            logoImg.style.height = '60px'; 
        }
    });

    // 4. Smooth Scrolling (التمرير السلس) - يعمل فقط على الصفحة الرئيسية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // التحقق من أننا على الصفحة الرئيسية قبل تطبيق التمرير السلس
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 5. وظيفة إرسال النموذج (Contact Form)
    const contactForm = document.querySelector('#contact-form-info form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // ملاحظة: هذا مجرد مثال لـ mailto وسيعتمد على إعدادات بريد العميل
            alert('تم إرسال طلبك بنجاح. سنتواصل معك قريباً.');
        });
    }
});
