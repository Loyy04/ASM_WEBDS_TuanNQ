document.addEventListener('DOMContentLoaded', function() {
    // Khi DOM đã sẵn sàng, thêm sự kiện submit cho form
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngừng hành động mặc định của form

        // Lấy giá trị từ các trường input
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Kiểm tra mật khẩu có khớp không
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Kiểm tra xem email đã tồn tại trong localStorage chưa
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        if (existingUsers.some(user => user.email === email)) {
            alert("Email already registered!");
            return;
        }

        // Tạo đối tượng người dùng mới
        const newUser = { firstName, lastName, email, password };

        // Lưu người dùng vào localStorage
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Hiển thị thông báo đăng ký thành công
        alert('Registration successful! You can now log in.');

        // Chuyển hướng người dùng về trang đăng nhập
        window.location.href = '/Login/login.html';
    });
});
