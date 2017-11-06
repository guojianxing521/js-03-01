(function(window){
			//创建一个构造函数，挂载各个元素
			function Tab(id){
				this.parent = document.getElementById(id);
				this.aIpt = this.parent.getElementsByTagName('input');
				this.aDiv = this.parent.getElementsByTagName('div');
				this.init();//执行初始化函数
				this.timer = null;
				this.num = 0;
				this.onoff = false;
			}
			//初始化函数，点击事件
			
			Tab.prototype.init = function(){
				var that = this;
//				console.log(that);
				for(var i=0;i<this.aIpt.length;i++){
					this.aIpt[i].index = i;
//					 console.log(this);
					this.aIpt[i].onclick = function(){
						that.onoff = false;
						that.fnTab(this.index);
//						console.log(that);
//						console.log(this);
					};
				}
			}
			
			Tab.prototype.fnTab = function(idx){
				//暴力清除
				for(j=0;j<this.aIpt.length;j++){
					this.aIpt[j].className = '';
					this.aDiv[j].style.display = 'none';
				}
				//让当前的显示
				this.aIpt[idx].className ='active';
				this.aDiv[idx].style.display = 'block';
//				console.log(this);
				
			}
			Tab.prototype.autoplay= function(){
				var that = this;
				this.onoff = true;
				this.timer = setInterval(function(){
					that.fnTab(that.num);
					that.num++;
					if(that.num==3){
						that.num=0;
					}
				},800)
			}
			Tab.prototype.stop=function(){
				clearInterval(this.timer);
				this.onoff = false;
			}

			//暴露出来
			window.Tab = Tab;
		})(window)