/* eslint-disable max-len */
// NOTE: updates to translations will not appear until the client is restarted
// i.e. close it and run npm run develop

// Only translate the text that is not surround by single backticks
const TRANSLATIONS = [
  {
    id: 'hyek8f',
    text: '24.44 摄氏度'
  },
  {
    id: 'rscjup',
    text: '26 摄氏度'
  },
  {
    id: 'am2xch',
    text: '一个展示需要完成的任务的字符串列表：'
  },
  {
    id: '6rztdg',
    text: '在这里添加一条记录'
  },
  {
    id: 'to1vwe',
    text: '在这里添加 handleChange() 和 submitMessage() 方法'
  },
  {
    id: '31b7ey',
    text: '在这行上面添加代码'
  },
  {
    id: 'c24by8',
    text: '在这行下面添加代码'
  },
  {
    id: 'jbrt8k',
    text: '添加第 m 行到 newArray'
  },
  {
    id: 'zkh12d',
    text: '使用 myString 通过挑战后，了解分组如何运行'
  },
  {
    id: 'mobihi',
    text: '给 oopsGlobal 赋值 5'
  },
  {
    id: 'v3ups9',
    text: '调用 scale，传入一个参数'
  },
  {
    id: 'iw4a3a',
    text: '示例 1：Target 没有子级'
  },
  {
    id: '463xp8',
    text: '示例 2：Target 有一个子级'
  },
  {
    id: 'u3inrm',
    text: '示例 3：Target 有两个子级'
  },
  {
    id: 'axnbgg',
    text: '修改这行上面的代码'
  },
  {
    id: 'i2kck7',
    text: '修改这行下面的代码'
  },
  {
    id: 'dlbobn',
    text: '修改这一行'
  },
  {
    id: 'v127zb',
    text:
      '检查两个控制台的差异。freeCodeCamp 控制台应该打印两次变量，分别对应这个挑战的每一个测试。浏览器控制台应该只打印一次变量，因为你清除了第一次的打印结果。'
  },
  {
    id: 'ejm0ql',
    text: '关闭视频窗口的第三个选项卡，并合并'
  },
  {
    id: 'iwch6t',
    text: '完成下面的方法，其余的执行类似'
  },
  {
    id: 'hihhyz',
    text: '完成 return 语句'
  },
  {
    id: 'sdxti5',
    text: '计数 target 的子节点，并删掉'
  },
  {
    id: 'wfw6sc',
    text: '创建 x 和 y 轴'
  },
  {
    id: 'sjw6f4',
    text: '在这里创建轴'
  },
  {
    id: 'nupsh2',
    text: '创建一个二维数组，有 m 行 n 列，元素均为 0'
  },
  {
    id: 'xfjb3s',
    text: '在这行下面声明 myGlobal 变量'
  },
  {
    id: 'htpjk7',
    text: '为 decrement action types 定义一个常量'
  },
  {
    id: 'tfzdsp',
    text: '为 increment action types 定义一个常量'
  },
  {
    id: 'zh20mi',
    text: '定义 ADD、addMessage()、messageReducer() 并在这里存储：'
  },
  {
    id: '43qs4c',
    text: '为自减运算定义一个动作创建器'
  },
  {
    id: 'nen3qo',
    text: '为自增运算定义一个动作创建器'
  },
  {
    id: '0cwyam',
    text: '在这里定义一个动作创建器：'
  },
  {
    id: 'fq0wsg',
    text: '在这里定义一个动作'
  },
  {
    id: 'tegkqa',
    text: '在这里定义 Container 组件：'
  },
  {
    id: 'b5oihn',
    text: '定义 counter reducer，根据接收到的动作递增或递减 state'
  },
  {
    id: '91y4pd',
    text: '在这里定义 Redux store，传入 reducers'
  },
  {
    id: 'eie1vk',
    text: '在这里定义 root reducer'
  },
  {
    id: '5s7nnl',
    text: '在这里定义 store here：'
  },
  {
    id: '34qe2q',
    text: '字典将包含集合的元素'
  },
  {
    id: '2c1wra',
    text: '在这里发送接收到的 data action'
  },
  {
    id: '923cpg',
    text: '在这里发送 request action'
  },
  {
    id: 'picsyf',
    text: '在这里发送 action：'
  },
  {
    id: 'ysjr1s',
    text: '显示代码'
  },
  {
    id: 'kjd1am',
    text: '这里不能修改 state，否则测试不能通过'
  },
  {
    id: '5tx4ow',
    text: '娱乐网站'
  },
  {
    id: '9yu58b',
    text: '示例库存清单'
  },
  {
    id: 'ciddtb',
    text: '找到目标值及其父级'
  },
  {
    id: 'ixx548',
    text: '修改下方代码，使其结果为 true'
  },
  {
    id: '6mbhjj',
    text: '例如：Redux.createStore()'
  },
  {
    id: 'jshtzq',
    text: '函数返回表示“一杯红茶（black tea）”的字符串'
  },
  {
    id: 'cw1ghf',
    text: '函数返回表示“一杯绿茶（green tea）”的字符串'
  },
  {
    id: 'iuccln',
    text: '返回一个随机填充的数组'
  },
  {
    id: 'bm2mop',
    text: '点击之后获取 tabs'
  },
  {
    id: 'kchz5k',
    text: '点击之前获取 tabs'
  },
  {
    id: 'bfd23c',
    text:
      '有一个函数（代表茶的种类）和需要几杯茶，下面的函数返回一个数组，包含字符串（每个字符串表示一杯特别种类的茶）。'
  },
  {
    id: 'ead98i',
    text: '全局 count 变量：'
  },
  {
    id: '7zf0i2',
    text: '将它们合并起来'
  },
  {
    id: '5j2l88',
    text: '我们创建三个浏览器窗口'
  },
  {
    id: 'e843r9',
    text: '我们现在打开一个新的选项卡'
  },
  {
    id: '5fvehh',
    text: '在 myLocalScope 之外，未定义 myVar'
  },
  {
    id: 'qn720a',
    text:
      '现在，在 console.log() 之前添加 console.clear()，清除浏览器控制台的内容，通过测试。'
  },
  {
    id: 'j86mef',
    text: '现在执行打开选项卡，关闭选项卡和其他操作'
  },
  {
    id: 'mk7rvy',
    text: '现在移除 console log 这一行，通过测试'
  },
  {
    id: 'n7vm1s',
    text: '只修改这一行上面的代码'
  },
  {
    id: 'cvh4x7',
    text: '只修改这一行下面的代码'
  },
  {
    id: 'lvmnm7',
    text: '打开一个新的选项卡，显示猫的图片'
  },
  {
    id: 'avpx79',
    text: '打开你的浏览器控制台。'
  },
  {
    id: '0b5ps6',
    text: '画布边线和图表之间的 padding'
  },
  {
    id: 'uemoej',
    text: '将 n 个 0 推入当前行以创建列'
  },
  {
    id: 'lm86nf',
    text: '将当前行（已有 n 个 0）推送到数组'
  },
  {
    id: 'qscelx',
    text: '可从 Redux 对象获得 Redux 方法'
  },
  {
    id: 'atqiig',
    text: '在这一行下面渲染一个输入框（input），按钮（button）和列表（ul）'
  },
  {
    id: 'yq81wg',
    text: '在这一行下面渲染 Provider'
  },
  {
    id: 'kxio9j',
    text: 'responseFromServer 设置为 false，表示从服务器获得无效响应'
  },
  {
    id: 'alh6pw',
    text: 'responseFromServer 设置为 true，表示从服务器获得有效响应'
  },
  {
    id: '1cfidd',
    text: 'responseFromServer 表示从服务器获得一个响应'
  },
  {
    id: '96tntk',
    text: '返回 30'
  },
  {
    id: '58a5g7',
    text: '运行并检查控制台'
  },
  {
    id: '71bus9',
    text: '运行测试，查看两个控制台的差异。'
  },
  {
    id: '7wp46n',
    text: '设置为华氏刻度'
  },
  {
    id: 'oefvg5',
    text: '设置'
  },
  {
    id: 'mnt4d3',
    text: "应该显示 'carrot'"
  },
  {
    id: 'fhe9m4',
    text: '社交网站'
  },
  {
    id: 'za434b',
    text: '每周训练的堆积条形图'
  },
  {
    id: '7c1fv9',
    text: '堆积条形图在这里显示'
  },
  {
    id: 'r44ovx',
    text: 'tabs 是在窗口中打开的每个站点的 title 的数组'
  },
  {
    id: 'cl8peb',
    text: '测试数组：'
  },
  {
    id: '1xi3cv',
    text: '全局变量'
  },
  {
    id: '3gc01a',
    text: 'main.scss 文件'
  },
  {
    id: '14kfog',
    text: '这是交集方法'
  },
  {
    id: 'd1shtt',
    text: '这是并集方法'
  },
  {
    id: 'pqq6sy',
    text: '此方法添加一个元素到集合中'
  },
  {
    id: 'nd2oxy',
    text: '此方法将检查元素是否存在，并返回 true 或 false'
  },
  {
    id: 'ocm81t',
    text: '此方法将从集合中删除一个元素'
  },
  {
    id: 'or9p5p',
    text: '此方法将返回集合中的所有值'
  },
  {
    id: 'g1608f',
    text: '此方法将返回集合的大小'
  },
  {
    id: 'bheu99',
    text: '这将保存一个集合'
  },
  {
    id: 'x1djjr',
    text: '在下一行使用 console.clear()，清除浏览器控制台的内容'
  },
  {
    id: '22ta95',
    text: '使用 console.log() 打印输出变量'
  },
  {
    id: 'w43c7l',
    text: '使用 s = [2, 5, 7] 将无效'
  },
  {
    id: 'pgckoj',
    text: '变量赋值'
  },
  {
    id: '2xiqvv',
    text: '变量声明'
  },
  {
    id: '2sx8zg',
    text: '我们记录对象内部的数组'
  },
  {
    id: 'xmjfd8',
    text: '当你关闭一个选项卡时'
  },
  {
    id: 'es69h6',
    text: '当你将两个窗口合并为一个窗口时'
  },
  {
    id: 'fho5t5',
    text: '当你在最后打开一个选项卡时'
  },
  {
    id: '00kcrm',
    text: '输出 true'
  },
  {
    id: 'sxpg2a',
    text: '你的邮箱、Google Drive 和其他工作地点'
  }
];

module.exports = TRANSLATIONS;
