document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout");
    const totalElement = document.getElementById("total"); // Giả sử bạn có một <div> hoặc <span> với id="total" để hiển thị tổng giá trị

    // Lấy dữ liệu giỏ hàng từ LocalStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra giỏ hàng có dữ liệu không
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        totalElement.innerHTML = "$0.00"; // Hiển thị $0.00 nếu giỏ hàng trống
    } else {
        // Duyệt qua danh sách sản phẩm và hiển thị chúng
        let total = 0; // Khởi tạo tổng giá trị

        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                <div class="cart-item-content">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.desc}</p>
                        <strong>${item.price}</strong>
                    </div>
                </div>
                <button class="remove" data-index="${index}">Xóa</button>
            `;
            cartItemsContainer.appendChild(listItem);

            // Thêm giá trị của sản phẩm hiện tại vào tổng
            const itemPrice = parseFloat(item.price.replace('$', '').replace(',', '')); // Loại bỏ dấu $ và dấu , rồi chuyển sang kiểu số
            total += itemPrice; // Cộng vào tổng
        });

        // Hiển thị tổng giá trị
        totalElement.innerHTML = `$${total.toFixed(2)}`; // Định dạng tổng giá trị với 2 chữ số thập phân
    }

    // Xử lý nút "Xóa"
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1); // Xóa sản phẩm khỏi danh sách
            localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật LocalStorage
            location.reload(); // Làm mới trang để cập nhật giỏ hàng
        }
    });

    // Xử lý nút "Thanh toán"
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Thank you for your purchase!");
            localStorage.removeItem("cart"); // Xóa giỏ hàng
            location.reload(); // Làm mới trang
        }
    });
});
