AngularJS1 Inspect Get Scope Controller Demo
============================================

How to inspect DOM to get `$scope` and controller.

注意：当选择DOM element的时候，不一定必须选择某个controller作用域的根元素，还可以选择其内部的
某个元素。比如在Demo中，我们使用的是：`document.querySelector('#hello')`，但实际上使用
`document.querySelector('#hello button')`等也是一样的效果。

```
npm install
npm start
```
