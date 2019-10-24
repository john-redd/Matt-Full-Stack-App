update user_accounts
set account_balance = $1
where bank_user_id = $2;