CREATE DATABASE farmer_profit;

USE farmer_profit;

CREATE TABLE profits (
id INT AUTO_INCREMENT PRIMARY KEY,
crop_name VARCHAR(50),
cost INT,
selling_price INT,
profit INT
);