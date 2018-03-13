CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	 item_id INT NOT NULL,
	 product_name VARCHAR (200) NULL,
	 department_name VARCHAR (300) NULL,
	 price DECIMAL (10,2) NOT NULL,
	 stock_quantity INT NOT NULL,
 PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('789101', 'Gardein Crispy Chickn', 'Frozen Food', '4.99', '20');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('111213', 'Luxary Spa Towel Set', 'Home & Kitchen', '35.99', '50');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('141516', 'Shower Caddy', 'Bedding & Bath', '15.99', '30');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('171819', 'All Black Standard Pillow Case Set', 'Bedding & Bath', '23.99', '46');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('202122', 'Cesars Puppy Dinner', 'Pet Supplies', '2.99', '45');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('232425', '27.5 Mountain Bike', 'Mountain Bikes', '135.99', '10');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('262728', 'Olay Face Mask', 'Skin Care', '5.99', '50');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('293031', 'Aztec Secret Indian Healing Clay', 'Skin Care', '8.69', '22');
INSERT INTO products (item_id, product_name, department_name, price, stock_quanity) VALUES ('323334', 'Blackhead Remover Mask', 'Skin Care', '12.99', '100');
