// تهيئة Parse SDK
Parse.initialize("waFQSQKs9uEYZkeRLuR1U0CezqFttdgnjm8QaqpM", "SKA303Hp3U0oDrzjUcuzIjmZKL3spDT2iOMfHk6Q"); // استبدل APPLICATION_ID و JAVASCRIPT_KEY بمفاتيحك
Parse.serverURL = 'https://parseapi.back4app.com/';

// التعامل مع نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    try {
        // تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور
        const user = await Parse.User.logIn(email, password);
        console.log('User logged in:', user);

        // توجيه المستخدم إلى لوحة التحكم
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error logging in:', error);

        // عرض رسالة خطأ مع تحريك الرسالة
        messageElement.textContent = 'خطأ في تسجيل الدخول: ' + error.message;
        messageElement.classList.add('show');
        setTimeout(() => messageElement.classList.remove('show'), 3000); // إخفاء الرسالة بعد 3 ثوانٍ
    }
});