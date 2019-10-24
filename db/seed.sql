CREATE TABLE bank_users (
  bank_user_id SERIAL PRIMARY KEY,
  bank_user_email varchar(100) NOT NULL,
  password varchar(250) NOT NULL
);

CREATE TABLE user_accounts (
  user_account_id SERIAL PRIMARY KEY,
  bank_user_id int references bank_users(bank_user_id),
  account_balance float
);