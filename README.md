## Notes for React.js tutorial on source code https://gitee.com/zhufengpeixun/1.1.jsx

### Part A:

#### 0-1:<br/>
(1) v0.3.0 is the earliest stable version of React.js, with 8 core folders included. It is easy to start reading React source code 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with this version for its core ideas and implementations.

(2) It used Grunt to compile. To try examples, use http-server or local-server to power.

<br/>

#### 0-2:<br/>
(1) Main concepts are divided into two: Functions and Layers.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Functions, as independent modules, can be widely used while layers should be called in a certain direction in the flow.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React have only VC layers(no M layer). V works with dom, and C works with virtual dom, states and props.

(2) Things I can learn from source code: <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Learn how to use the framework.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Learn how to realize the functions.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Learn how to rewrite a framework(such as Preact).

<br/>

#### 1:<br/>
(1) Basics, ideas and algorithms are more essential to frameworks and technologies, since programs are just data structures<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and algorithms.
Data structures are the way of storing and managing data, and algorithms, as steps to solve problems, are<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;functions of data structures.
The well-known ones are currying, dom-diff and fiber(created in react-16).<br/>


(2) Front-end is usually event-driven, in which case drawing Module Diagrams or Sequence Diagrams help<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to understand. Comparing different frameworks is also a good way to think such as listing pros and cons.<br/>

(3) Before ng/redux/vue, we can only use static pages and dom operations which have poor performance.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React and Redux provide data store, fast rendering and better compatibility.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components are not a new idea but better implemented in React.js.<br/>

(4) In most cases, Libraries provide interfaces for users to call but frameworks call themselves and provide configuration.
