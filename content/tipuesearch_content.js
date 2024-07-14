var tipuesearch = {"pages": [{'title': 'About', 'text': '課程倉儲:\xa0 https://github.com/mdecycu/cp2024 \n 課程網頁:\xa0 https://mde.tw/cp2024 \n 課程目標: \n 利用\xa0Python 程式協助執行機電整合系統設計 \n 課程教材:\xa0 2023_course_in_python.pdf \n CAD 套件:\xa0 Solvespace \xa0and\xa0 Onshape \n 機電模擬:\xa0 CoppeliaSim \xa0and\xa0 Webots \n 課程評分: \n 全勤出席 (20%) \n 隔週採網頁與網誌紀錄學習心得 (30%) \n 期中口頭專題簡報 (25%) \n 期末口頭專題簡報 (25%) \n \n 行事曆 \n  全頁檢視  \n', 'tags': '', 'url': 'About.html'}, {'title': 'IDE', 'text': 'Python_for_NX1872.7z \n', 'tags': '', 'url': 'IDE.html'}, {'title': 'Replit', 'text': 'https://replit.com \xa0 \n Replit 作為一個基於全球資訊網與手機或平板 APP 的整合程式開發環境 (Integrated Development Environment, IDE), 可以用來執行  cmsimde  網站的動態編輯伺服器, 以及靜態網站. \n 所謂  cmsimde  是利用 Python 與 Javascript 程式語言所編寫的一套簡單網際內容管理系統. 其使用方法? \n 當在 Replit 環境中啟動與 Web (即 World Wide Web, 全球資訊網) 有關的程式, 內建會啟動 Webview tab, 若要關閉此設定, 可以透過 Tools 中的 User Settings tab, 將 Automatic Webview 功能關閉. 一旦完成設定將對所有帳號下的 Repls 有效. \n \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsite: git submodule update --init --recursive \n for cmsimde_site: cmsimde is as directory not submodule \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p', 'tags': '', 'url': 'Replit.html'}, {'title': 'Codespaces', 'text': 'https://github.com/features/codespaces \xa0', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'CAD', 'text': 'Solvespace \n https://solvespace.com/ \xa0 \n NX \n https://plm.sw.siemens.com/en-US/nx/ \xa0 \n NXOpen in Python \n CoppeliaSim \n cad2024_foosball_with_ball_python_script.7z \n Webots \n How to un simulation on cloud \n Set up environment \n Webots and ROS2 \n Webots.cloud \xa0( https://webots.cloud/ ) \n Simulation examples \n Webots cloud proto \n', 'tags': '', 'url': 'CAD.html'}, {'title': 'CoppeliaSim', 'text': 'https://manual.coppeliarobotics.com/en/versionInfo.htm \n user settings file is C:\\Users\\%USERNAME%\\AppData\\Roaming/CoppeliaSim/usrset.txt \n CoppeliaSim 4.5.1 與 4.7.1 使用 ZMQ RemoteAPI Python 程式的差異: \n \n zmqRemoteApi 模組名稱改為 coppeliasim_zmqremoteapi_client \n sim 物件中的 sim.setJointForce() 方法已經失效, 必須改用 sim.setJointTargetForce() \n \n # zmqRemoteApi_IPv6 為將 zmq 通訊協定修改為 IPv4 與 IPv6 相容\n# pip install pyzmq cbor keyboard\n# for 4.5.1\n#from zmqRemoteApi_IPv6 import RemoteAPIClient\n# for 4.7.1\nfrom coppeliasim_zmqremoteapi_client import RemoteAPIClient\nimport time\nimport math\nimport keyboard\n\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'localhost\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\n# 啟動模擬\nsim.startSimulation()\n# 建立尺寸數列, 分別定義 x, y, z 方向尺寸\nx = 0.2\ny = 0.2\nz = 0.1\nsize = [x, y, z]\n\n# 利用 size 數列, 建立圓柱物件, 2 代表 cylinder\n# 8 表示 respondable, 1 為 質量\ndigit1_handle = sim.createPureShape(2, 8, size, 1, None)\n# 將圓柱物件命名為 digit1, 若用於機械計分可做為個位數轉盤\n# 之後可再導入帶有數字組立的外型零件\nsim.setObjectAlias(digit1_handle, \'digit1\')\n# 轉角單位為徑度\nsim.setObjectOrientation(digit1_handle, -1, [0, math.pi/2, 0])\n# 起始物件中心位於 [0, 0, 0], 為了位於地板, 往 z 提升一個半徑高度\nsim.setObjectPosition(digit1_handle, -1, [0, 0, x/2])\n\n# 建立 revolute joint 命名為 joint, 且將 joint mode 設為 dynamic, control mode 設為 velocity\njoint1_handle = sim.createJoint(sim.joint_revolute_subtype, sim.jointmode_dynamic, 0, None)\nsim.setObjectInt32Param(joint1_handle, sim.jointintparam_dynctrlmode, sim.jointdynctrl_velocity)\nsim.setObjectAlias(joint1_handle, \'joint1\')\n\n# 取得 cylinder 的位置座標\ndigit1_pos = sim.getObjectPosition(digit1_handle, -1)\njoint1_pos = [digit1_pos[0], digit1_pos[1], digit1_pos[2]]\n\n# 將 joint1 至於 cylinder 中心\nsim.setObjectPosition(joint1_handle, -1, joint1_pos)\n# 取得 digit1_handle 的方位\ndigit1_ori = sim.getObjectOrientation(digit1_handle, -1)\n# 將 joint1_handle 方位與 digit1 對齊\nsim.setObjectOrientation(joint1_handle, -1, digit1_ori)\n\n# 將 joint1 置於 box 上\nsim.setObjectParent(joint1_handle, box, True)\n# 將 cylinder 置於 joint1 上\nsim.setObjectParent(digit1_handle, joint1_handle, True)\n\n# 鎖定 joint1\n# for 4.5.1\n#sim.setJointForce(joint1_handle, float(\'inf\'))\n# for 4.7.1\nsim.setJointTargetForce(joint1_handle, float(\'inf\'))\n\nprint("基本場景建立完成!")\n\n# 設定主迴圈\nwhile True:\n    # 設定 joint1 目標速度\n    sim.setJointTargetVelocity(joint1_handle, 10)\n    # 讓 coppeliasim 有時間按照設定讓 joint1 旋轉\n    time.sleep(0.01) \n\n    if keyboard.is_pressed(\'q\'):\n        # 可以按下 q 鍵跳出重複執行迴圈\n        break\n\n# 終止模擬\nsim.stopSimulation()\n\n \n', 'tags': '', 'url': 'CoppeliaSim.html'}, {'title': 'Python', 'text': '課程教材:\xa0 \n 2023_course_in_python.pdf \n https://docs.python.org/zh-tw/3/index.html   \n Python 執行環境 \n Brython (全球資訊網上的 Python) \n Replit \n Cospaces \n Gitpod \n Windows 操作系統 \n 制式安裝 (VSCode and SciTE) \n 可攜設定 (VSCode and SciTE) \n Ubuntu 操作系統 \n Types : Integers, Floats, Strings and Booleans \n Type Conversion \n Variables and Assignment \n Arithmetic Operators \n Comparison Operators \n Logical Operators \n Conditional Statements (if, elif, else) \n Loops (for, while) \n break, continue and pass \n Lists \n Tuples \n Sets \n Dictionaries \n Defining and Calling Functions \n Arguments and Return Values \n Local and Global Variables \n Importing  Modules \n Standard Library \n https://github.com/TheAlgorithms/Python \xa0 \n nxopen_base_and_center_pole_python.txt \n qrcode \n https://en.wikipedia.org/wiki/QR_code \n https://www.funcode-tech.com/QR_app.html \n # pip install qrcode matplotlib\nimport qrcode\nimport matplotlib.pyplot as plt\nimport matplotlib.image as mpimg\n#img=qrcode.make(\'20240101;5745632912;Steel;---;---\')\nimg=qrcode.make(\'虎尾科大機械設計工程系\')\nimg.save(\'qrcode_ex1.png\')\nimg = mpimg.imread(\'qrcode_ex1.png\')\nplt.imshow(img)\nplt.show() \n pdf \n pip install pypdf2 \n split pdf file: \n # pypdf2_split.py\nimport os\nfrom PyPDF2 import PdfWriter, PdfReader\n\npdfReader = PdfReader(open("Learn_Autodesk_Inventor_2018_Basics.pdf", "rb"))\ninformation = [("inventor",18,45)]\n \nfor page in range(len(information)):\n    pdf_writer = PdfWriter()\n    start = information[page][1]\n    end = information[page][2]\n    while start<=end:\n        pdf_writer.add_page(pdfReader.pages[start-1])\n        start+=1\n    if not os.path.exists("./"):\n        os.makedirs(savepath)\n    output_filename = \'{}_{}_page_{}.pdf\'.format(information[page][0],information[page][1], information[page][2])\n    with open(output_filename,\'wb\') as out:\n        pdf_writer.write(out)\nprint("已經完成 pdf 切割與存檔") \n combine pdf file: \n import os\nfrom PyPDF2 import PdfWriter, PdfReader\n\npdf_write_object = PdfWriter()\n\npdfFileNames = ["inventor1.pdf", "inventor2.pdf"]\nnewFileName = "inventor"\nfilenameString = ""\n\nfor filename in pdfFileNames:\n    pdf_read_object = PdfReader(open(filename, "rb"))\n    filenameString += filename + ", "\n    for page in range(len(pdf_read_object.pages)):\n        pdf_write_object.add_page(pdf_read_object.pages[page])\n \nfinal_file_object = open(newFileName + ".pdf", \'wb\')\npdf_write_object.write(final_file_object)\nfinal_file_object.close()\n\nprint("已經將 " + filenameString+ " 合併為: "+ newFileName + ".pdf")\n \n Pelican Blog md generator \n https://github.com/mdecycu/pelican_md_generator   \n NXOpen Python \n 機械設計工程師若能夠看得懂  nxopen_base_and_center_pole_python.txt , 是否能夠將程式碼改寫為 Function 或 Class 架構, 以方便用程式方法建立機電系統設計中的參數式零組件? \n ZMQ remote API Python for CoppeliaSim \n 可遠端透過 Python 程式控制機電模擬系統的  cd2023_pj3ag4_zmq_football4.7z , 則牽涉 ZMQ、IPv4、IPv6 與  asyncio  模組. \n Python for Webots \n Python 程式也能用來控制 Webots 機電模擬系統:  https://cyberbotics.com/doc/guide/using-python \n Python 與 CAD 有關的其他應用 \n https://pypi.org/project/python-solvespace/ \n https://github.com/jimy-byerley/pymadcad \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};