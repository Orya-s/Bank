use bank;

drop table IF EXISTS transactions;
drop table IF EXISTS categories;


CREATE TABLE IF NOT EXISTS transactions(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    amount INT,
    vendor VARCHAR(20),
    category VARCHAR(20)
); 

-- CREATE TABLE IF NOT EXISTS categories(
--     category VARCHAR(20) PRIMARY KEY,
--     amount INT,
--     transactions_number INT
-- ); 