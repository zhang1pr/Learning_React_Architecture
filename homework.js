// 1.调试playground.js，看看jsx编译后的结果是什么。

// Before
const App = () => {
  return <div>{user.name}</div>
}

// After
const App = () => {
  return createElement("div", null, user.name);
};


// 2.实现一个数据结构，把jsx编译后的结构以嵌套形式保存在数据结构对象中（参考react渲染）。
{
    type: "div",
  	children: {
	  	type: "string",
	  	value: "test"
  	}
}

// 3.实现render，解析这个嵌套对象，并且把解析结果渲染到页面上。渲染可以调用dom.js里createElement函数。
import * from ./dom.js

const user = { name: 'test' }

const JSXObj = {
    type: "div",
  	children: {
 	  	type: "string",
	  	value: user.name
  	}
}

var jsx = createElement(JSXObj);

if( JSXObj.hasOwnProperty('children') ){

    if(Array.isArray(JSXObj.chilren)){
        JSXObj.children.forEach(function(e){ 
           if(e.type === "string") jsx.append(createElement(e));
           else jsx.appendChild(createElement(e));
        });
    }
    else{
        var e = JSXObj.children;
        if(e.type === "string") jsx.append(createElement(e));
        else jsx.appendChild(createElement(e));
    }
  
}

document.body.appendChild(jsx);
// For more complicated HTML, a similar recursive function is useful.
