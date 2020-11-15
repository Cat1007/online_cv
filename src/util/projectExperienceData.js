let projectExperience = [
    {
        projectName: '推箱子游戏',
        projectDescription: '使用MFC实现的具有可视化界面的推箱子游戏',
        projectResults: '通过操作方向键，推动箱子到达指定的地点，达成通关条件；游戏有多个关卡，还可以自定义关卡内容',
        projectImgSrc: require('../assets/pic1.jpg'),
        githubSrc: 'https://github.com/Cat1007/online_cv',
        readmeSrc: 'https://github.com/Cat1007/online_cv',
        technicalPoint:[{
            pointName:'C++',
            icon:'mdi-language-c',
            content:'实现推箱子逻辑，何时能推动箱子，箱子和目的地的判定'
        },{
            pointName:'MFC',
            icon:'mdi-language-c',
            content:'实现UI，设置缓冲区避免图片刷新引起的闪屏'
        }]
    },
    {
        projectName: '健身管理系统小程序',
        projectDescription: '基于微信的小程序应用，专为健身房设计的登记管理应用，能够预约上课时间，进行人员管理。',
        projectResults: '参与设计UI界面，负责实现用户注册的功能页',
        projectImgSrc: require('../assets/pic2.png'),
        githubSrc: 'https://github.com/Cat1007/online_cv',
        readmeSrc: 'https://github.com/Cat1007/online_cv',
        technicalPoint:[{
            pointName:'微信云函数',
            icon:'mdi-wechat',
            content:'实现关键数据列表的拉取和刷新，数据项的实时更改显示'
        }]
    },
    {
        projectName: '大富翁小游戏',
        projectDescription: '基于Cocos Creator开发的微信小游戏',
        projectResults: '负责大部分UI设计，参与开发了游戏内页面的跳转，参与部分控制器的实现',
        projectImgSrc: require('../assets/pic3.jpg'),
        githubSrc: 'https://github.com/Cat1007/online_cv',
        readmeSrc: 'https://github.com/Cat1007/online_cv',
        technicalPoint:[{
            pointName:'Cocos Creator',
            icon:'mdi-language-c',
            content:'绘制UI，实现页面的跳转，进行游戏参数的设置，以及游戏的结算'
        },{
            pointName:'微信小游戏',
            icon:'mdi-wechat',
            content:'游戏的主逻辑，玩家的掷骰子与移动、使用道具、进行土地操作'
        }]
    }
]

export default projectExperience