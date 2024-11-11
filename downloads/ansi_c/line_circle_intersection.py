# 可攜 Python 必須利用 pip install sympy 安裝模組
from sympy import symbols, Eq, solve

# 宣告變數
x, y, m, c, p, q, r = symbols('x y m c p q r')

# 定義直線方程式
line_equation = Eq(y, m * x + c)

# 定義圓方程式
circle_equation = Eq((x - p)**2 + (y - q)**2, r**2)

# 利用 solve 聯立解直線與圓的方程式
intersection = solve((line_equation, circle_equation), (x, y))

# 列出利用符號式 (Symbolic) 方法解出交點座標
print("直線與圓的交點座標為：")
for point in intersection:
    x_value, y_value = point
    print(f"x = {x_value}, y = {y_value}")
