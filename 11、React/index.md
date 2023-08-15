

## 添加样式
```jsx
<div className="avatar"></div>
```


添加一个css文件编写样式
```css
.avatar{
    color:red
}
```

x
## 显示数据

显示user.name的值
```jsx
return (
    <div>{user.name}</div>
)
```


也可以将变量赋值给属性 src属性会读取user.image的值 然后将该值作为属性传递
```jsx
return (
    <img src={user.image}/>
)
```


字符串拼接
```jsx
const user = {
    name:"hello",
    imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:100
}


export default function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt={'你好'+user.name} style={{
                width:user.imageSize,
                height:user.imageSize
            }}/>
        </>
    )
}
```

**style{ }** JSX 大括号内的一个普通 {} 对象


## 条件渲染
```jsx
if(true){
    ..
}else {
    ..
}

// 条件运算符
let flag = true
<div>
    {flag ? '你好': 'hello world'}
</div>


// 逻辑&&
flag && '你好'
```


## 渲染列表

有一个 key 属性 对于列表中的每一个元素 你应该传递一个字符串或者数字给 key 用于在其兄弟节点中唯一标识该元素

```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingLists(){
    const list = products.map(item=>{
        return <li key={item.id}>
            {item}
        </li>
    })

    return (
        <ul>
            {list}
        </ul>
    )
}
```


## 拆分步骤
1. 将UI拆分为组件层级结构

2. 使用React构建一个静态版本

3.  找出UI精简且完整的state标识
    
    -		随着时间**推移**保持不变的 不是state
    -       通过**props**从父组件传递的 不是state
    -       是否可以基于已存在组件中的props或者state**进行计算** 如果是 肯定不是state  
    -       **props** 像是传递的参数 
    -       **state** 像是组件的内存

4.  验证 state 应该被放置在哪里 

    -       验证每一个基于特定 state 渲染的组件
    -       寻找它们最近并且共同的父组件——在层级结构中，一个凌驾于它们所有组件之上的组件
    -       决定 state 应该被放置于哪里
        -       可以放到父组件
        -       也可以放到父组件上层的组件
        -       单独创建一个新的组件进行管理 添加到父组件的某个地方

5.  添加反向数据流 


## 为什么多个 JSX 标签需要被一个父元素包裹？

JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹

