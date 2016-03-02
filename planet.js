var app=angular.module('myApp',['ui.router']);
app.controller('firstctr',function($scope,$http,$state,plan){
	$scope.planetinfos=[];
	$http.get('planetx.json')
	.success(function(resp){
		$scope.planetinfos=resp;
	});
	
		$scope.homeclick=function(i){
		plan.sss=$scope.planetinfos[i];
		$state.go('details',{'id':i});
		}
});
app.controller('secondctr',function($scope,plan,$stateParams,$state){
	$scope.sss=plan.sss;
	$scope.i=$stateParams.id;
	
		$scope.takeback=function(){
		$state.go('home');
		}
});
	app.service('plan',function(){
		this.sss={};
	});

app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
	.otherwise('/home');
	$stateProvider
	.state('home',{
	 url:'/home',
	 templateUrl:'home.html',
	 controller:'firstctr'
	});
	
	$stateProvider
	.state('details',{
	 url:'/details',
	 templateUrl:'details.html',
	 controller:'secondctr'
		});
		
});