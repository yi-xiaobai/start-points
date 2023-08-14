

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