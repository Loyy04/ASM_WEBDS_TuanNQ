document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (gửi form)

    // Lấy giá trị từ các trường input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra thông tin đăng nhập
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        // Chuyển hướng người dùng đến trang chính sau khi đăng nhập thành công
        window.location.href = '/index.html'; // Cập nhật URL chính xác của trang chính
    } else {
        alert('Invalid email or password!');
    }
});
