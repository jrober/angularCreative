var app = angular.module("loveCalc",[]);
			app.controller('loveCalcCtrl',function($scope, $http){
				$scope.famHistList = [];
				$scope.submit = function() {
					var person1 = $scope.inputPerson1;
					var person2 = $scope.inputPerson2;
					var url = "https://love-calculator.p.mashape.com/getPercentage?fname="+person1+"&sname="+person2;
					console.log(url); 
                    $http.get(url, {headers: {'X-Mashape-Key' : 'IuxvfEDS1hmsh76W0o1MUGx80TAqp1PjolSjsnBqVhQyZMRVmI'}}).then(function (response) {
                        console.log(response); 
                    });
					$scope.inputPerson1 = '';
					$scope.inputPerson2 = '';
				}


			});
