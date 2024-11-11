with open("2023_fall_s1511_account_pass.txt") as f:
    data = f.readlines()
# use "cut -d: -f1,3 /etc/passwd" to make sure used uid range
# newusers format:  
# pw_name:pw_passwd:pw_uid:pw_gid:pw_gecos:pw_dir:pw_shell
# uid starts from 1003
uid_starts = 1002
users = ""
send = ""
 
for i in data:
    #stud_num \t account \t password \n
    stud = i.split("\t")
    stud_num = stud[0]
    account = stud[1]
    password = stud[2]
    port1 = stud[3]
    port2 = stud[4].rstrip()
    uid_starts += 1
    uid = str(uid_starts)
    gid = uid
    gecos = account
    home_dir = "/home/" + account
    shell = "/bin/bash"
    #print(stud_num, account, password)
    users += account + ":" + password + ":" + uid + ":" + gid + ":" + gecos + ":" + home_dir + ":" + shell + "\n"
    send += stud_num + ":" + account + ":" + password + ":" + port1 + ":" + port2 + "\n"
 
with open("users.txt", "w", encoding="utf-8", newline='\n') as f:
        f.write(users)
 
with open("send.txt", "w", encoding="utf-8", newline='\n') as f:
        f.write(send)