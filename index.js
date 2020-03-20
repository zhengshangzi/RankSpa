$(function() {
  /* global echarts: true */
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init($('.main2').get(0));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: 'JavaScript语言排名变化'
    },
    tooltip: {
      //触发类型
      trigger: 'axis',
      axisPointer: {
          type: 'line',
      },
      formatter(params) {
        const item = params[0];
        return `
                排名
                <br />
                ${item.name}:${item.data}
               `;
        }
    },
  
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: ["2000","2005","2010","2015","2020"]
    },
    yAxis: {},
    series: [{
      name: '排名',
      type: 'line',
      // smooth: 'true',
      data: [6, 9, 8, 8,7]
    }],
  
  };

  myChart.setOption(option);
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升','+2.44%'],
    ['Python', '3', '升', '-2.58%'],
    ['C++', '4', '降','+2.07%'],
    ['C#', '5', '升', '-1.17%'],
    ['Visual Basic .NET', '6', '降','-0.85%'],
    ['JavaScript', '7', '降','-0.28%'],
  ];
  var container = $('.main');
  /* global Handsontable: true */
  var hot = new Handsontable(container.get(0), {
    data: data,
    contextMenu: true,          // 启用快捷菜单
    // manualRowResize : true,     // 允许行拖动  
    // manualColumnResize : true,  // 允许列拖动 
    rowHeaders: true,
    colWidths:150,
    rowHeights:35,
    rowHeaders: false,
    className: 'htCenter htMiddle',
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });
  return hot;
});