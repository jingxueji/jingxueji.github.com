1.配置运行环境
	npm - v
	node -v
2.安装gulp命令环境
	nmp install gulp --save-dev
	验证好用 gulp -v
3.准备gulpfile.js
	编写任务
		a)安装模块
			npm install gulp-concat
			npm install gulp-uglify--save-dev
		b)引入模块
			
		c）写任务
4.需要使用模块
	gulp
	gulp-uglify 压缩
	gulp-concat 合并
----------------------------------------------------
raphael: 拉斐尔

	官网：http://dmitrybaranovskiy.github.io/raphael/

	下载：

	手册：http://dmitrybaranovskiy.github.io/raphael/reference.html
	
	
使用：
1. 引入文件
	<script src="">
2. 准备一张纸(画布)  准备一张纸
	var p=Raphael(0,0,800,600);
3. 画图
	p.rect(100,100,300,200);
4. 添加属性
	添加属性
	图形.attr({
		fill：
		storke:
		'stroke-width':
	})
5. 事件
	图形.click(function(){
		
	});
6. 运动：
	图形.animate(json,duration,easing,complete);

	duration-> ms
	easing ->  linear ,ease-in,ease-out,elastic,bounce
----------------------------------
圆：
	p.circle(200,200,100)
椭圆:
	p.ellipse();
路径：
	p.path('M200 200L300 100L400 200Z');
文字:
	p.text(200,200,'大智能社')

---------------------------------
事件：
	.click();
	.mouseover();
	.mouseout();
	.dblclick();
	....
---------------------------------
变形：
	a). 图形.rotate()/translate()/scale()
	b). 
	    transform:'r30t300,100s1,0.5'

	"t100,100r30,100,100s2,2,100,100r45s1.5"

	r30,100,100
		中心点 100,100
		旋转 30
---------------------------------
阴影：
	图形.glow()

	图形.glow({
		offsetx:10,
                offsety:10,
                width:100,
                color:'red'
	});
渐变：
	线性渐变：
		180-#ff0-#00f

	径向：
		r(0.25,0.75)red-blue
-----------------------------------------
canvas: 位图

	-> JcavnasScript
svg: 矢量
vml：
	-> raphael
-----------------------------------------
app	








