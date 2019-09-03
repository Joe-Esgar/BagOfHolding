drop table if exists users;
drop table if exists characters;
drop table if exists classes;
drop table if exists items;
drop table if exists inventories;

create table users
(
    user_id serial primary key,
    username varchar(25) not null,
    password text not null,
    email varchar(64) not null
)

create table characters
(
    char_id serial primary key,
    char_name varchar(25) not null,
    user_id integer references users(user_id),
    gold integer not null,
    size char(1) not null,
    carry_weight int not null,
    class text not null,
    level int not null,
    class_name varchar(25) not null,
)

create table classes
(
    class text not null,
    level int not null,
    class_name varchar(25) not null,
    char_id int references characters(char_id)
)

create table items
(
    item_id serial primary key,
    item_name varchar(25) not null,
    value int not null,
    currency string not null,
    weight int,
    is_broken boolean not null,
    description text,
    damage int,
    dice varchar(3),
    damType varchar(24),
    range int,
    category varchar(24),
    prop_one varchar(24),
    prop_two varchar(24),
    prop_three varchar(24)
)

create table inventories
(
    char_id int references characters(char_id),
    item_id int references items(item_id)
)




