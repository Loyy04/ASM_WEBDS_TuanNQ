document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Lấy giỏ hàng từ LocalStorage hoặc khởi tạo nếu chưa có
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Lắng nghe sự kiện click vào nút "Add to Cart"
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = {
                name: button.dataset.name,
                price: button.dataset.price,
                desc: button.dataset.desc,
                img: button.dataset.img,
            };


            // Thêm sản phẩm vào giỏ hàng
            cart.push(product);

            // Lưu giỏ hàng vào LocalStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Thông báo thêm thành công
            alert(`${product.name} has been added to your cart!`);

            // Chuyển hướng sang trang giỏ hàng
            window.location.href = "/Cart/cart.html";
        });
    });
});
