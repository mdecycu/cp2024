#include <stdio.h>
#include <gd.h>
#include <math.h>

// Function prototype
void draw_star(gdImagePtr img, int x, int y, int size, int color, int rotation);
void draw_proc_flag(gdImagePtr img);

int main() {
    // width 3: height 2
    int width = 1200;
    // 國旗長寬比為 3:2
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_proc_flag(img);

    FILE *outputFile = fopen("proc_flag_in_gd_w15.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_star(gdImagePtr img, int x, int y, int size, int color, int rotation) {
    double deg = M_PI / 180.0;
    gdPoint points[10]; // Initialize array here
    int num_points = 10;

    for (int i = 0; i < num_points; i++) {
        // 若沒有逆時針轉 90 度, 尖角將與水平線平行
        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation * deg;
        int radius = (i % 2 == 0) ? size : size * sin(18 * deg) / cos(36 * deg);
        points[i].x = x + radius * cos(angle);
        points[i].y = y - radius * sin(angle);
    }

    gdImageFilledPolygon(img, points, num_points, color);
}

void draw_proc_flag(gdImagePtr img) {
    double deg = M_PI / 180.0;
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, yellow;
    double angle;
    // 大黃星位於 width 的 1/6 與 height 的 1/4 處
    int center_x = (int)(width / 6);
    int center_y = (int)(height / 4);
    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖
    // 大黃星的半徑為 width 的 1/10
    int big_star_radius = (int)(width / 10);
    // 小黃星的半徑為 width 的 1/15
    int small_star_radius = (int)(width / 30);
    // 先塗上滿地紅
    red = gdImageColorAllocate(img, 238, 28, 37); // 紅色
    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色
    // 根據畫布大小塗上紅色長方形區域
    gdImageFilledRectangle(img, 0, 0, width, height, red);
    // 畫大黃星
    draw_star(img, center_x, center_y, big_star_radius, yellow, 0);
    // 畫小黃星
    // draw_star(img, center_x, center_y, small_star_dia, yellow, 0);
    // the first small star  center_x = (width/3, width/15), angle = atan(5/3)
    center_x = (int) width/3;
    center_y = (int) width/15;
    // 第一個小黃星, 為了尖角從垂直指向大黃星的中心
    // 必須再逆時針轉以下的 angle, 也就是 atan(5/3)/deg 的補角
    angle = 180 - atan(5/3)/deg;
    draw_star(img, center_x, center_y, small_star_radius, yellow, angle);
    // the second small star
    center_x = (int) 2*width/5;
    center_y = (int) 2*width/15;
    // 第二個小黃星, 為了尖角從垂直指向大黃星的中心
    // 必須再逆時針轉以下的 angle, 也就是 atan(7/1)/deg 的補角
    angle = 180 - atan(7/1)/deg;
    draw_star(img, center_x, center_y, small_star_radius, yellow, angle);
    // the third small star
    center_x = (int) 2*width/5;
    center_y = (int) 7*width/30;
    // 第三個小黃星, 為了尖角從垂直指向大黃星的中心
    // 必須再逆時針轉以下的 angle, 也就是大小為 atan(7/2)/deg 的角度
    angle = atan(7/2)/deg;
    draw_star(img, center_x, center_y, small_star_radius, yellow, angle);
    // the fourth small star
    center_x = (int) width/3;
    center_y = (int) 3*width/10;
    // 第四個小黃星, 為了尖角從垂直指向大黃星的中心
    // 必須再逆時針轉以下的 angle, 也就是大小為 atan(5/4)/deg 的角度
    angle = atan(5/4)/deg;
    draw_star(img, center_x, center_y, small_star_radius, yellow, angle);
}
