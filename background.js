// إعداد Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-background').appendChild(renderer.domElement);

// إضافة ضوء خفيف للخلفية
const light = new THREE.AmbientLight(0xffffff, 0.1); // ضوء خافت
scene.add(light);

camera.position.z = 5;

// دالة الرسوم المتحركة
function animate() {
    requestAnimationFrame(animate);

    // لا نحتاج لتحريك أي كائنات هنا
    renderer.render(scene, camera);
}

animate();

// تعديل حجم الخلفية عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});