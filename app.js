angular.module('customerApp',[])
.controller('customerTableCtrl',customerTableCtrl);

function customerTableCtrl($scope,$http){
	$scope.customers = [];
	$scope.delCustomer = delCustomer;
	$scope.addCustomer = addCustomer;
	$scope.sortChanged = sortChanged;



	//Get Data
	$http.get('data.json')
	.success(function(resp){
		 $scope.customers = resp;
	});

	function addCustomer(){
		$scope.customers.push({
			"name":$scope.cname,
			"age":$scope.cage,
			"job_title":$scope.ctitle,
			"zip":$scope.czip
		});
	}

	function sortChanged(info){
		switch(info){
			case 'name':
				if($scope.sortStatus=="name"){
					$scope.sortStatus = "-name"
				}else{
					$scope.sortStatus = "name";
				}
				break;
			default: 
				if($scope.sortStatus=="age"){
					$scope.sortStatus = "-age"
				}else{
					$scope.sortStatus = "age";
				}
				break;
		}
	}

	function delCustomer(customer){
		$scope.customers.splice($scope.customers.indexOf(customer),1);
	}

}