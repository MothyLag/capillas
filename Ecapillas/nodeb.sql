CREATE DATABASE noedb;
\c noedb

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    precio FLOAT,
    stock  INT
);