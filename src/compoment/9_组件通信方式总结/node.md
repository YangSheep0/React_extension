# 组件间的关系 #
- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件 （跨级组件）
# 通信方式 #
    1.props :
        - children props
        - render props
    2.消息订阅-发布：
        - pubs-sub.js event等等
    3.集中式管理：
        redux/dva等等
    4.conText: 
        生产者-消费者模式
# 常用方式 #
    父子组件：props
    兄弟组件：消息订阅-发布,redux
    祖孙组件：消息订阅-发布,redux,conText