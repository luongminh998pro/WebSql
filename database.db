-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS shoe_store;
USE shoe_store;

-- Tạo bảng sản phẩm
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

-- Thêm sản phẩm mẫu
INSERT INTO products (name, price, image_url) VALUES
('Nike Air Max', 120.00, 'images/nike1.jpg'),
('Adidas Ultraboost', 140.00, 'images/adidas_ultraboost.jpg'),
('Puma Classic', 90.00, 'images/puma_classic.jpg');
