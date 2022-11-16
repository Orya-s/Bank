use bank;

drop table IF EXISTS transactions;

CREATE TABLE IF NOT EXISTS transactions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    amount INT,
    vendor VARCHAR(20),
    category VARCHAR(20)
); 