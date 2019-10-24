insert into bank_users (
  bank_user_email,
  password
) values (
  ${email},
  ${password}
)
returning *;