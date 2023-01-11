CREATE DATABASE IF NOT EXISTS DiscordTrucho;
CREATE USER IF NOT EXISTS 'dev'@'localhost' IDENTIFIED BY 'devpass';
GRANT ALL PRIVILEGES ON DiscordTrucho.* TO 'dev'@'%';

FLUSH PRIVILEGES;

USE DiscordTrucho;
CREATE TABLE users (id varchar(36) NOT NULL, uname varchar(24) NOT NULL, email varchar(24) NOT NULL, pass varchar(32) NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY (id));
CREATE TABLE messages (sender_id varchar(36) NOT NULL, receiver varchar(36) NOT NULL, message varchar(1024) NOT NULL);