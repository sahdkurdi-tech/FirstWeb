// تهيئة Parse SDK
Parse.initialize("waFQSQKs9uEYZkeRLuR1U0CezqFttdgnjm8QaqpM", "SKA303Hp3U0oDrzjUcuzIjmZKL3spDT2iOMfHk6Q"); // استبدل APPLICATION_ID و JAVASCRIPT_KEY بمفاتيحك
Parse.serverURL = 'https://parseapi.back4app.com/';

// التحقق من حالة تسجيل الدخول
const currentUser = Parse.User.current();
if (!currentUser) {
    window.location.href = 'index.html'; // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول إذا لم يكن مسجلًا
}

// عرض معلومات المستخدم
document.getElementById('username').textContent = currentUser.get('username');

// زر تسجيل الخروج
document.getElementById('logoutButton').addEventListener('click', async function () {
    try {
        await Parse.User.logOut();
        console.log('تم تسجيل الخروج بنجاح.');
        window.location.href = 'index.html'; // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    } catch (error) {
        console.error('خطأ في تسجيل الخروج:', error.message);
    }
});

// إضافة منطق الأزرار
document.querySelectorAll('.buttons-container button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = this.id;
        const contentArea = document.getElementById('contentArea');

        // عرض رسالة مؤقتة تعتمد على الزر الذي تم النقر عليه
        contentArea.innerHTML = `<p>تم النقر على الزر: ${buttonId}</p>`;
    });
});