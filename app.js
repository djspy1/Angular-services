var app=angular.module("myApp"[])              /*crating a module*/
app.provider("mycontroller",function(){    
      /*crating module*/
	
	this.$get=function(){
		return="i am from provider"
	}
})
app.config(["myprovider",function(myprovider){
	console.log(myprovider)
}])

app.controller("mycontroller",["$scope",function($scope{
	console.log("my controller provider")
}])


