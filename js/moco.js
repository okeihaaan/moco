var list = [50, 42];
var svgWidth = 30%;	// SVG領域の横幅
var svgHeight = 20%;	// SVG領域の縦幅
// SVGの表示領域を生成
var svg = d3.select(.pie-graph1").append("svg")
	.attr("width", svgWidth).attr("height", svgHeight)
// 円グラフを生成
var pie = d3.layout.pie()
	.value(function(d){ return d; })
// 円グラフのサイズを指定
var arc = d3.svg.arc().innerRadius(0).outerRadius(100);
// グループを作成
var g = svg.append("g");
// 円グラフを描画
g.selectAll("path")
	.data(pie(list))
	.enter()
	.append("path")	// 円弧はパスで指定する
	.attr("stroke", "white")	// 円グラフの区切り線を白色にする
	.attr("transform", "translate("+svgWidth/2+", "+svgHeight/2+")")	// 円グラフをSVG領域の中心にする
	.transition()	// トランジション開始
	.duration(2000)	// 2秒間でアニメーションさせる
	.attrTween("d", function(d){	// 指定した範囲で値を変化させアニメーションさせる
		var interpolate = d3.interpolate(
			{ startAngle : 0, endAngle : 0 },	// 各円グラフの開始角度
			{ startAngle : d.startAngle, endAngle : d.endAngle }	// 各円グラフの終了角度
		);
		return function(t){
			return arc(interpolate(t));	// 時間に応じて処理
		}
	})
