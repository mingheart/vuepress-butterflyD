module.exports = {
    // base:'/vuepress-butterflyd/',//线上
    // base:'/docs/.vuepress/dist/',//本地打包
    base:'/',//默认
    title: 'mingheart的知识库',
    description: 'B站搜索「mingheart」关注我，长期交流学习。不知名前端，Node.js爱好者',
    themeConfig: {
        logo: 'https://www.linglan01.cn/favicon.JPG',
        //顶部导航栏
        nav: [
            // { text: '博客', link: 'https://linglan01.cn/' },
            { text: 'B站', link: 'https://space.bilibili.com/503641507?spm_id_from=333.999.0.0' },
            { text: '掘金', link: 'https://juejin.cn/user/2418581312900285' },
            { text: 'Gitee', link: 'https://gitee.com/mingheart' }
        ],

        sidebar: [
            {
                title: '侧边栏分组1', 
                collapsable: false, 
                sidebarDepth: 1,    
                children: [
                    '/introduce/vue2',//自动获取README.md
                    '/introduce/vue3'
                ]
            },
        ],

    }
}