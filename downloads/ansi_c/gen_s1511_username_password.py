# Brython 程式碼
# 導入亂數模組
import random
# 導入字串模組
import string
# 利用 def 關鍵字定義函式
# 函式的輸入變數可以設定初始值
def password_generator(size=4, chars=string.ascii_lowercase + string.digits):
    # 函式內以多行註解說明函式功能
    """Generate random password
    """
    # 利用 return 關鍵字將所產生的亂數字串傳回
    return ''.join(random.choice(chars) for _ in range(size))
# 建立一個變數與隨後的字串對應
pass_string = "abcdefhkrstuwxyz"
cp_num = ["0813", "0826"]
cad_num = ["0838", "0851"]
connect_port = 8001
internal_port = 9001
def gen_acc_pass(course, course_num):
    global connect_port, internal_port
    stud_list =[]
    for num in course_num:
        url = "https://stud.cycu.org:8800?semester=1121&courseno=" + num + "&column=True"
        class_list = open(url).read().split("\n")[:-1]
        stud_list += class_list
        #print(stud_list)
    for stud_num in stud_list:
        password = password_generator(4, pass_string)
        #print(password)
        account = course + stud_num
        #print(account)
        print(stud_num + "\t" + account + "\t" + password + "\t" + str(connect_port) + "\t" + str(internal_port))
        connect_port += 1
        internal_port += 1
gen_acc_pass("cp", cp_num)
gen_acc_pass("cad", cad_num)