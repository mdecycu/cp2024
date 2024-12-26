'''
Generate and show a maze, using the simple Depth-first search algorithm.

Start at a random cell.
Mark the current cell as visited, and get a list of its neighbors. For each neighbor, starting with a randomly selected neighbor:
If that neighbor hasn't been visited, remove the wall between this cell and that neighbor, and then recurse with that neighbor as the current cell.

Randomized depth-first search

This algorithm, also known as the "recursive backtracker" algorithm, is a randomized version of the depth-first search algorithm.

Frequently implemented with a stack, this approach is one of the simplest ways to generate a maze using a computer. Consider the space for a maze being a large grid of cells (like a large chess board), each cell starting with four walls. Starting from a random cell, the computer then selects a random neighbouring cell that has not yet been visited. The computer removes the wall between the two cells and marks the new cell as visited, and adds it to the stack to facilitate backtracking. The computer continues this process, with a cell that has no unvisited neighbours being considered a dead-end. When at a dead-end it backtracks through the path until it reaches a cell with an unvisited neighbour, continuing the path generation by visiting this new, unvisited cell (creating a new junction). This process continues until every cell has been visited, causing the computer to backtrack all the way back to the beginning cell. We can be sure every cell is visited.

As given above this algorithm involves deep recursion which may cause stack overflow issues on some computer architectures. The algorithm can be rearranged into a loop by storing backtracking information in the maze itself. This also provides a quick way to display a solution, by starting at any given point and backtracking to the beginning.

Mazes generated with a depth-first search have a low branching factor and contain many long corridors, because the algorithm explores as far as possible along each branch before backtracking.
'''

# 從 random 模組導入 shuffle 和 randrange 函數
from random import shuffle, randrange

def make_maze(w = 16, h = 8):
    # 設定預設的迷宮寬度 w (16 列) 和高度 h (8 行)

    # vis: 這是一個二維列表，用來追蹤每個格子是否被訪問過。預設所有格子都是未訪問 (0)，並且邊界用 1 表示牆壁
    # 例如，16 列 8 行的迷宮，會在邊界加上牆壁，最後一列會包含邊界的牆壁（值為 1）
    vis = [[0] * w + [1] for _ in range(h)] + [[1] * (w + 1)]

    # ver: 這是用來表示垂直牆壁的位置。每個位置上用 " |  " 表示垂直牆，行尾會有一個邊界牆。
    ver = [["|  "] * w + ['|'] for _ in range(h)] + [[]]

    # hor: 這是用來表示水平方向的牆壁。每個位置上用 "+--" 表示水平牆，行尾會有一個邊界牆。
    hor = [["+--"] * w + ['+'] for _ in range(h + 1)]

    # 定義一個遞歸函數 walk(x, y)，用來遍歷迷宮並生成迷宮的路徑
    def walk(x, y):
        # 將當前格子 (x, y) 標記為已訪問
        vis[y][x] = 1

        # d: 定義了四個方向的候選位置 (左、下、右、上)
        # 每個方向是由 x 和 y 坐標的變化來表示的
        d = [(x - 1, y), (x, y + 1), (x + 1, y), (x, y - 1)]

        # 打亂候選方向順序，以便隨機選擇探索方向
        shuffle(d)

        # 遍歷打亂後的四個方向
        for (xx, yy) in d:
            # 如果該位置已經被訪問過，就跳過
            if vis[yy][xx]: continue

            # 如果 x 沒變，表示走的是上下方向，則更新水平方向的牆壁
            if xx == x: 
                hor[max(y, yy)][x] = "+  "
            # 如果 y 沒變，表示走的是左右方向，則更新垂直方向的牆壁
            if yy == y: 
                ver[y][max(x, xx)] = "   "
            
            # 進行遞歸調用，探索下一個未訪問的格子
            walk(xx, yy)

    # 隨機選擇起始點 (x, y)，並開始生成迷宮
    walk(randrange(w), randrange(h))

    # 將生成的迷宮格式化為一個字符串
    s = ""
    for (a, b) in zip(hor, ver):
        # 將每行的水平方向牆壁和垂直方向牆壁連接起來，並加入換行符
        s += ''.join(a + ['\n'] + b + ['\n'])

    return s  # 返回生成的迷宮字符串

# 如果是直接執行該腳本，則輸出生成的迷宮
if __name__ == '__main__':
    print(make_maze())  # 調用 make_maze 函數並打印結果
