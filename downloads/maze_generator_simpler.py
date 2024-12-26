# 從 random 模組導入 shuffle 和 randrange 函數
from random import shuffle, randrange

# 生成迷宮的函數
def make_maze(w = 16, h = 8):
    # 1. 初始化迷宮的牆壁和訪問狀態
    # vis: 用來追蹤每個格子是否已經被訪問過，1代表牆壁，0代表可以走的路
    # 初始化 vis 為空列表
    vis = []

    # 使用雙重迴圈來創建 h 行，每行有 w 個 0
    for i in range(h):
        row = []  # 創建一個空的行列表
        for j in range(w):
            row.append(0)  # 將 0 添加到當前行
        vis.append(row)  # 將創建好的行添加到 vis 中
    
        # 初始化 hor 和 ver 為空列表
        hor = []
        ver = []

        # 2. 使用雙重迴圈創建水平方向牆壁 (hor)
        for i in range(h + 1):
            row = []  # 創建一行水平方向牆壁
            for j in range(w):
                row.append("+--")  # 每一列的牆壁是 "+--"
            hor.append(row)  # 將這一行添加到 hor 中

        # 使用雙重迴圈創建垂直方向牆壁 (ver)
        for i in range(h):
            row = []  # 創建一行垂直方向牆壁
            for j in range(w):
                row.append("|  ")  # 每一列的牆壁是 "|  "
            ver.append(row)  # 將這一行添加到 ver 中
    
    # 3. 定義遞歸函數，生成迷宮
    def walk(x, y):
        # 3.1. 標記當前格子為已訪問
        vis[y][x] = 1

        # 3.2. 定義四個可能的移動方向：左、下、右、上
        directions = [(x - 1, y), (x, y + 1), (x + 1, y), (x, y - 1)]
        shuffle(directions)  # 隨機打亂方向順序
        
        # 3.3. 對每一個隨機打亂的方向進行探索
        for xx, yy in directions:
            # 如果新的位置在迷宮範圍內且未訪問過
            if 0 <= xx < w and 0 <= yy < h and vis[yy][xx] == 0:
                # 3.4. 如果是左右方向的移動，去除垂直牆壁
                if xx == x:
                    hor[max(y, yy)][x] = "+  "
                # 3.5. 如果是上下方向的移動，去除水平牆壁
                if yy == y:
                    ver[y][max(x, xx)] = "   "
                
                # 3.6. 遞歸調用，繼續探索新位置
                walk(xx, yy)

    # 4. 隨機選擇起點開始生成迷宮
    start_x = randrange(w)
    start_y = randrange(h)
    walk(start_x, start_y)

    # 5. 格式化迷宮輸出為字符串
    maze_str = ""
    for i in range(h):
        # 合併水平方向牆壁和垂直方向牆壁，並添加換行符
        maze_str += ''.join(hor[i]) + '\n' + ''.join(ver[i]) + '\n'
    
    # 6. 返回生成的迷宮字符串
    return maze_str

# 主程序，打印生成的迷宮
if __name__ == '__main__':
    print(make_maze())  # 調用函數生成迷宮並打印
