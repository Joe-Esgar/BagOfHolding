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
    size varchar(1) not null,
    carry_weight int not null
)

create table class
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
    currency varchar(2) not null,
    weight int,
    is_broken boolean not null,
    description text,
    char_id int references characters(char_id)
)

