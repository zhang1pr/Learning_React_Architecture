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
Data structures are the way of storing and managing data, and algorithms, as steps to solve<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;problems, are functions of data structures.
The well-known ones are currying, dom-diff and fiber(created in react-16).<br/>


(2) Front-end is usually event-driven, in which case drawing Module Diagrams or Sequence Diagrams help<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to understand. Comparing different frameworks is also a good way to think such as listing pros and cons.<br/>

(3) Before ng/redux/vue, we can only use static pages and dom operations which have poor performance.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React and Redux provide data store, fast rendering and better compatibility.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components are not a new idea but better implemented in React.js.<br/>

(4) In most cases, Libraries provide interfaces for users to call but frameworks call themselves and provide configuration.

<br/>

#### 2:<br/>
(1) For projects with a huge codebase like React.js, breath-first reading or reading call stack first makes the code easier to<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;understand.<br/>

(2) ReactCompositeComponent.createClass and ReactMount.renderComponent are main functions in v0.3.0.

<br/>

#### 3:<br/>
(1) React uses virtual components to realize rendering only updated UI known as Virtual DOM. React implements a heuristic<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O(n) algorithm to detect dom-diff. 

(2) There are 3 types of components: ReactTextComponent, ReactNativeComponent and ReactCompositeComponent, based<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on which React creates the virtual component tree.on which React creates the virtual component tree. Only composite<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components can include any components, which should be capitalized.

<br/>

#### 4:<br/>
(1) renderComponent are in charge of rendering the component to the DOM. If the component has not been rendered before, renderComponent will call mountComponentIntoNode.

(2) JSX as a syntactic sugar is actually compiled into one of 3 basic components in React.

<br/>

#### 5.1:<br/>
(1) In V0.3.0, JSXTransformer.js compiles JSX while the latest version uses babel-preset-react including transform-react-jsx.

(2) The way createClass were wrapped is to prevent objects from being modified when running.


<br/>

#### 5.2:<br/>
(1) ReactComponent.mountComponentIntoNode and ReactComponent._mountComponentIntoNode render a new or<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated component into container.

(2) ReactCompositeComponent.mountComponent deals with react lifecycles and renders the content finally. Mounting a<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;composite component in order includes mounting on ref(if not null), setState, checking props, binding this for functions,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initializing state, putting componentDidMount into ReactOnDOMReady queue(if not null), calling render functions and<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calling this.mountComponent(Mixin).
